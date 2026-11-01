"""Audit the rendered public site, including metadata, schema, links and assets.

Usage: python3 scripts/audit-seo.py https://www.theannhewanfoundation.org
Use --report /tmp/report.json to retain the full evidence.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
from urllib.error import HTTPError
from urllib.parse import urljoin, urlparse, unquote, parse_qs
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self, body):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.meta = {}
        self.canonicals = []
        self.h1 = 0
        self.lang = None
        self.links = []
        self.images = []
        self.ids = set()
        self.schemas = []
        self._title = False
        self._schema = None
        self.feed(body)

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "title":
            self._title = True
        elif tag == "meta":
            self.meta[a.get("name", a.get("property", ""))] = a.get("content", "")
        elif tag == "link" and a.get("rel") == "canonical":
            self.canonicals.append(a.get("href"))
        elif tag == "h1":
            self.h1 += 1
        elif tag == "a" and a.get("href"):
            self.links.append(a["href"])
        elif tag == "img":
            self.images.append(a)
        elif tag == "script" and a.get("type") == "application/ld+json":
            self._schema = ""

    def handle_endtag(self, tag):
        if tag == "title":
            self._title = False
        if tag == "script" and self._schema is not None:
            try:
                self.schemas.append(json.loads(self._schema))
            except ValueError:
                self.schemas.append(None)
            self._schema = None

    def handle_data(self, text):
        if self._title:
            self.title += text
        if self._schema is not None:
            self._schema += text


def fetch(url):
    try:
        with urlopen(Request(url, headers={"User-Agent": "AnnHewanSiteAudit/1.0"}), timeout=30) as r:
            return r.status, r.geturl(), r.read().decode("utf-8", errors="replace")
    except HTTPError as e:
        return e.code, e.url, ""


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("origin")
    parser.add_argument("--canonical-origin", default="https://www.theannhewanfoundation.org")
    parser.add_argument("--report")
    args = parser.parse_args()
    origin = args.origin.rstrip("/")
    canonical = args.canonical_origin.rstrip("/")
    sitemap_status, _, sitemap = fetch(origin + "/sitemap.xml")
    if sitemap_status != 200:
        raise RuntimeError("Sitemap could not be fetched")
    locations = ET.fromstring(sitemap).findall("{*}url/{*}loc")
    paths = [urlparse(loc.text).path or "/" for loc in locations]
    issues = []
    pages = {}
    results = []
    with ThreadPoolExecutor(max_workers=4) as pool:
        for route, response in zip(paths, pool.map(fetch, [origin + p for p in paths])):
            status, final_url, body = response
            page = Page(body)
            pages[route] = page
            expected = canonical + (route if route != "/" else "")
            problems = []
            if status != 200:
                problems.append(f"HTTP {status}")
            if not page.title:
                problems.append("missing title")
            if page.title.count("The Ann Hewan Foundation") > 1:
                problems.append("duplicated brand in title")
            if not page.meta.get("description"):
                problems.append("missing description")
            if page.canonicals != [expected]:
                problems.append("missing or incorrect canonical URL")
            if page.meta.get("og:url") != expected:
                problems.append("incorrect Open Graph URL")
            if page.meta.get("og:title") != page.title:
                problems.append("Open Graph title differs from page title")
            if not page.meta.get("og:image") or not page.meta.get("twitter:card"):
                problems.append("missing social preview")
            if page.h1 != 1:
                problems.append(f"expected one H1; found {page.h1}")
            if not page.lang:
                problems.append("missing language")
            if "noindex" in page.meta.get("robots", ""):
                problems.append("public page has noindex")
            if not page.schemas or any(schema is None for schema in page.schemas):
                problems.append("missing or malformed JSON-LD")
            if '"@type": "NonProfit"' in json.dumps(page.schemas):
                problems.append("invalid NonProfit schema type")
            nodes = []
            for schema in page.schemas:
                if isinstance(schema, dict):
                    nodes.extend(schema.get("@graph", [schema]))
            page_types = {"WebPage", "AboutPage", "ContactPage", "CollectionPage"}
            if not any(node.get("@type") in page_types and node.get("url") == expected for node in nodes):
                problems.append("missing page structured data for canonical URL")
            if route != "/" and not any(node.get("@type") == "BreadcrumbList" for node in nodes):
                problems.append("missing breadcrumb structured data")
            for img in page.images:
                if "alt" not in img:
                    problems.append("image without alt attribute")
            results.append({"path": route, "status": status, "title": page.title,
                            "canonical": page.canonicals, "issues": problems})
            issues.extend(f"{route}: {problem}" for problem in problems)

    hosts = {urlparse(origin).hostname, "www.theannhewanfoundation.org", "theannhewanfoundation.org"}
    resources = set()
    for route, page in pages.items():
        image = urlparse(page.meta.get("og:image", ""))
        if image.hostname in hosts:
            resources.add(image.path)
        for href in page.links:
            parsed = urlparse(urljoin(origin + route, href))
            if parsed.scheme not in {"http", "https"} or parsed.hostname not in hosts:
                continue
            target = unquote(parsed.path) or "/"
            if target in pages:
                if parsed.fragment and unquote(parsed.fragment) not in pages[target].ids:
                    issues.append(f"{route}: broken fragment link {href}")
            else:
                resources.add(target)
        for img in page.images:
            src = urlparse(urljoin(origin, img.get("src", "")))
            if src.hostname in hosts:
                if src.path == "/_next/image":
                    resources.add(parse_qs(src.query)["url"][0])
                else:
                    resources.add(src.path)
    with ThreadPoolExecutor(max_workers=4) as pool:
        for resource, (status, _, _) in zip(sorted(resources), pool.map(fetch, [origin + p for p in sorted(resources)])):
            if status >= 400:
                issues.append(f"broken internal resource: {resource} (HTTP {status})")
    missing_status, _, _ = fetch(origin + "/seo-audit-page-that-does-not-exist")
    if missing_status != 404:
        issues.append(f"unknown page returns HTTP {missing_status} instead of 404")
    titles = [p.title for p in pages.values()]
    descriptions = [p.meta.get("description") for p in pages.values()]
    if len(set(titles)) != len(titles):
        issues.append("duplicate page titles")
    if len(set(descriptions)) != len(descriptions):
        issues.append("duplicate descriptions")
    report = {"origin": origin, "page_count": len(pages), "resource_count": len(resources),
              "issues": issues, "pages": results}
    if args.report:
        with open(args.report, "w") as f:
            json.dump(report, f, indent=2)
    print(json.dumps({key: value for key, value in report.items() if key != "pages"}, indent=2))
    raise SystemExit(bool(issues))


if __name__ == "__main__":
    main()

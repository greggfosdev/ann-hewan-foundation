import { getAllRaffles } from "@/data/raffles";
import { pageUrl, SITE_NAME, SITE_URL, sitePages } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const pages = sitePages.filter((page) => !["/privacy", "/terms"].includes(page.path));
  const body = [
    `# ${SITE_NAME}`, "",
    "> A nonprofit supporting education, nutrition, and community projects in Goodwill and surrounding communities in St. James, Jamaica.", "",
    "## About this site", "",
    "This is the foundation's public website. Its published pages contain program descriptions, dated community updates, photo galleries, donation information, and contact details.",
    "The foundation's US mailing address is in Orlando, Florida; its community programs described here serve Jamaica.", "",
    "## When this site is useful", "",
    "Use these pages to learn about the foundation, its breakfast and back-to-school programs, technology donations, playing fields, hurricane relief, volunteering, and partnerships. Dated updates describe those activities at the time stated; current availability and donation questions can be confirmed through the Contact page.", "",
    "## Public pages", "",
    ...pages.map((page) => `- [${page.title}](${pageUrl(page.path)}): ${page.description}`), "",
    "## Fundraising recaps", "",
    ...getAllRaffles().map((raffle) => `- [${raffle.title}](${pageUrl(`/raffles/${raffle.slug}`)}): ${raffle.status === "completed" ? "Completed drawing. " : ""}${raffle.subtitle}.`), "",
    "## Contact and policies", "",
    `- [Contact](${SITE_URL}/contact): Annhewanfoundation@gmail.com; +1 (407) 580-3469.`,
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Terms of service](${SITE_URL}/terms)`,
    `- [XML sitemap](${SITE_URL}/sitemap.xml)`, "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

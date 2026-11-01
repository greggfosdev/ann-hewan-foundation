import { getSitePage, pageUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "Ann Hewan Foundation",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.webp`,
        description: "A 501(c)(3) nonprofit supporting education, nutrition, and community development in Goodwill and surrounding communities in St. James, Jamaica.",
        foundingDate: "2010",
        founder: {
          "@type": "Person",
          name: "Edgar Pete Peters",
          description: "Founder of The Ann Hewan Foundation, established in memory of his grandmother Ann Hewan.",
          url: `${SITE_URL}/our-story`,
          jobTitle: "Founder",
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "11954 Narcoossee Rd, Suite 2 PBM 246",
          addressLocality: "Orlando",
          addressRegion: "FL",
          postalCode: "32832",
          addressCountry: "US",
        },
        areaServed: { "@type": "Place", name: "Goodwill and surrounding communities, St. James, Jamaica" },
        nonprofitStatus: "https://schema.org/Nonprofit501c3",
        sameAs: [
          "https://www.facebook.com/share/g/16yiGqXFW2/",
          "https://www.linkedin.com/company/theannhewanfoundation/",
        ],
        email: "Annhewanfoundation@gmail.com",
        telephone: "+1-407-580-3469",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "General inquiries",
          telephone: "+1-407-580-3469",
          email: "Annhewanfoundation@gmail.com",
          url: `${SITE_URL}/contact`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: "Ann Hewan Foundation",
        url: SITE_URL,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }} />;
}

export function PageJsonLd({ path, title, description }: {
  path: string;
  title?: string;
  description?: string;
}) {
  const page = title && description ? { title, description, schemaType: "WebPage" } : getSitePage(path);
  const url = pageUrl(path);
  const crumbs = [{ name: "Home", item: SITE_URL }];
  if (path.startsWith("/programs/")) crumbs.push({ name: "Programs", item: `${SITE_URL}/programs` });
  if (path.startsWith("/raffles/")) crumbs.push({ name: "Raffles", item: `${SITE_URL}/raffles` });
  if (path !== "/") crumbs.push({ name: page.title, item: url });

  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.schemaType ?? "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        ...(path !== "/" ? { breadcrumb: { "@id": `${url}/#breadcrumb` } } : {}),
        ...(path === "/donate" ? {
          potentialAction: {
            "@type": "DonateAction",
            target: url,
            recipient: { "@id": `${SITE_URL}/#organization` },
          },
        } : {}),
      },
      ...(path !== "/" ? [{
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem", position: index + 1, name: crumb.name, item: crumb.item,
        })),
      }] : []),
    ],
  }} />;
}

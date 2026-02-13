export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NonProfit",
    name: "The Ann Hewan Foundation",
    alternateName: "Ann Hewan Foundation",
    url: "https://ann-hewan-foundation.vercel.app",
    logo: "https://ann-hewan-foundation.vercel.app/images/logo.webp",
    description:
      "A 501(c)(3) nonprofit organization supporting education, nutrition, and community development in Goodwill and surrounding communities in St. James, Jamaica.",
    foundingDate: "2010",
    founder: {
      "@type": "Person",
      name: "Edgar Pete Peters",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goodwill",
      addressRegion: "St. James",
      addressCountry: "Jamaica",
    },
    areaServed: {
      "@type": "Place",
      name: "Goodwill, St. James, Jamaica",
    },
    nonprofitStatus: "Nonprofit501c3",
    sameAs: [
      "https://www.facebook.com/annhewanfoundation",
      "https://www.instagram.com/annhewanfoundation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "donations",
      url: "https://ann-hewan-foundation.vercel.app/donate",
    },
    knowsAbout: [
      "Child nutrition",
      "Education support",
      "Community development",
      "Hurricane relief",
      "Jamaica charity",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function DonatePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Donate to The Ann Hewan Foundation",
    description:
      "Support education, nutrition, and community development in Jamaica. 100% of donations go directly to programs.",
    recipient: {
      "@type": "NonProfit",
      name: "The Ann Hewan Foundation",
    },
    url: "https://ann-hewan-foundation.vercel.app/donate",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import type { Metadata } from "next";

export const SITE_URL = "https://www.theannhewanfoundation.org";
export const SITE_NAME = "The Ann Hewan Foundation";

interface SitePage {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}

// Shared by metadata, structured data, the sitemap, and the public site guide.
export const sitePages: SitePage[] = [
  {
    path: "/",
    title: "Jamaica Education & Community Support",
    description: "The Ann Hewan Foundation supports children and families in Goodwill and nearby communities in St. James, Jamaica through school meals, education and community projects.",
  },
  {
    path: "/programs",
    title: "Our Programs",
    description: "Explore our breakfast project, Back 2 School initiative, technology donations, playing fields and hurricane relief work in St. James, Jamaica.",
    schemaType: "CollectionPage",
  },
  {
    path: "/programs/breakfast-project",
    title: "The Breakfast Project",
    description: "Our Breakfast Project provides morning meals to children at schools in Goodwill and nearby communities in St. James, Jamaica. Learn how to support the program.",
    image: "/images/breakfast/breakfast-1.webp", imageWidth: 1200, imageHeight: 599,
    imageAlt: "The Ann Hewan Foundation Breakfast Project in Jamaica",
  },
  {
    path: "/programs/back-to-school",
    title: "Back 2 School Initiative",
    description: "School supplies, uniforms and textbook assistance for students in Goodwill, St. James, Jamaica. See photos from the 2026 Back 2 School event and learn how to help.",
    image: "/images/back-to-school/2026/event-01.webp", imageWidth: 1200, imageHeight: 1600,
    imageAlt: "Children and families at the 2026 Back 2 School gathering",
  },
  {
    path: "/programs/technology-donations",
    title: "Technology Donations in Jamaica",
    description: "In October 2026, The Ann Hewan Foundation delivered computers and iPads donated by a Dallas, Texas partner to three organizations in Jamaica. See the photo gallery.",
    image: "/images/technology-donations/2026/donation-01.webp", imageWidth: 1200, imageHeight: 900,
    imageAlt: "Lottery Primary School students with donated computers and iPads",
  },
  {
    path: "/programs/playing-fields",
    title: "Playing Fields Project",
    description: "Learn about our playing fields project to create spaces for sport and recreation for children and young people in Goodwill and nearby communities in Jamaica.",
    image: "/images/playing-fields/field-1.webp", imageWidth: 2560, imageHeight: 1410,
    imageAlt: "The community playing fields project in Jamaica",
  },
  {
    path: "/programs/hurricane-relief",
    title: "Hurricane Melissa Relief",
    description: "See The Ann Hewan Foundation's Hurricane Melissa relief work in Jamaica, including food, shelter supplies and support for families rebuilding after the storm.",
    image: "/images/hurricane-relief/relief-1.jpg", imageWidth: 960, imageHeight: 1280,
    imageAlt: "The Ann Hewan Foundation's hurricane relief work in Jamaica",
  },
  {
    path: "/our-story",
    title: "Our Story & Ann Hewan's Legacy",
    description: "Meet Ann Hewan, learn about founder Edgar 'Pete' Peters, and discover the community roots of The Ann Hewan Foundation in Goodwill, St. James, Jamaica.",
    image: "/images/about/ann-hewan-with-founder-enhanced.webp", imageWidth: 1774, imageHeight: 887,
    imageAlt: "Ann Hewan with the founder of the foundation", schemaType: "AboutPage",
  },
  {
    path: "/about", title: "About the Foundation",
    description: "Learn about The Ann Hewan Foundation, a 501(c)(3) nonprofit supporting education, nutrition and community development in Goodwill and nearby Jamaican communities.",
    image: "/images/about/ann-hewan-with-founder-enhanced.webp", imageWidth: 1774, imageHeight: 887,
    imageAlt: "Ann Hewan with the founder of the foundation",
    schemaType: "AboutPage",
  },
  {
    path: "/impact", title: "Our Impact in Jamaica",
    description: "Explore our community work in Jamaica, including school meals, back-to-school support, October 2026 technology donations, partner recognition and event photos.",
    schemaType: "CollectionPage",
  },
  {
    path: "/get-involved", title: "Volunteer, Donate & Partner with Us",
    description: "Support children and families in St. James, Jamaica. Find ways to volunteer, donate, fundraise or partner with The Ann Hewan Foundation.",
  },
  {
    path: "/donate", title: "Donate to Support Children in Jamaica",
    description: "Donate to The Ann Hewan Foundation to support school meals, education and community programs for children and families in Goodwill and nearby Jamaican communities.",
  },
  {
    path: "/contact", title: "Contact the Foundation",
    description: "Contact The Ann Hewan Foundation about donations, volunteering, partnerships and community programs in Jamaica. Find our email, telephone and US mailing address.",
    schemaType: "ContactPage",
  },
  {
    path: "/raffles", title: "Fundraising Raffles & Results",
    description: "View fundraising raffle information, completed drawings and prize handoff recaps supporting The Ann Hewan Foundation's work with children and families in Jamaica.",
    schemaType: "CollectionPage",
  },
  {
    path: "/privacy", title: "Privacy Policy",
    description: "Read The Ann Hewan Foundation's privacy policy, including how personal information is collected, used and protected when you visit the website or contact us.",
  },
  {
    path: "/terms", title: "Terms of Service",
    description: "Review the terms governing use of The Ann Hewan Foundation website, including information about donations, intellectual property and contacting the foundation.",
  },
];

export function getSitePage(path: string): SitePage {
  const page = sitePages.find((entry) => entry.path === path);
  if (!page) throw new Error(`Missing SEO information for ${path}`);
  return page;
}

export function pageUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function createPageMetadata(page: SitePage): Metadata {
  const title = `${page.title} | ${SITE_NAME}`;
  const image = {
    url: page.image ?? "/images/hero/children-hero-enhanced.webp",
    width: page.imageWidth ?? 1774,
    height: page.imageHeight ?? 887,
    alt: page.imageAlt ?? "Children from the Goodwill community in Jamaica",
  };
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: pageUrl(page.path) },
    openGraph: {
      title, description: page.description, url: pageUrl(page.path), type: "website",
      locale: "en_US", siteName: SITE_NAME, images: [image],
    },
    twitter: {
      card: "summary_large_image", title, description: page.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function getPageMetadata(path: string): Metadata {
  return createPageMetadata(getSitePage(path));
}

import type { MetadataRoute } from "next";
import { getAllRaffles } from "@/data/raffles";
import { pageUrl, sitePages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified rather than presenting each deployment as a content edit.
  return [
    ...sitePages.map((page) => ({ url: pageUrl(page.path) })),
    ...getAllRaffles().map((raffle) => ({ url: pageUrl(`/raffles/${raffle.slug}`) })),
  ];
}

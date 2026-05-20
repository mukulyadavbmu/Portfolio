// src/app/sitemap.ts — auto-generates /sitemap.xml
import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/mdx";

export const dynamic = "force-static";

const SITE_URL = "https://mukulyadav.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getProjectSlugs();

  const projectUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...projectUrls,
  ];
}

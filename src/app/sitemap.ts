import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://aryankelkar.dev";

  const staticRoutes = [
    "",
    "/work",
    "/about",
    "/archive",
    "/journey",
    "/activities",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes];
}

import { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/lib/siteConfig";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Core Top-Level Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: getAbsoluteUrl("/services"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl("/work"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl("/about"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getAbsoluteUrl("/contact"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: getAbsoluteUrl(`/services/${service.slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 3. Dynamic Case Study Pages
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: getAbsoluteUrl(`/work/${project.slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...serviceRoutes, ...projectRoutes];
}


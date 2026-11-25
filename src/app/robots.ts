import { MetadataRoute } from "next";
import { getAbsoluteUrl, getBaseUrl } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/design-system", "/playground", "/api/*"],
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/design-system", "/playground"],
      },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: getBaseUrl(),
  };
}

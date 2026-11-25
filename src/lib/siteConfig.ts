/**
 * ODDLYYY CENTRAL SITE CONFIGURATION
 * Single source of truth for site URL, metadata, brand constants, and domain migration.
 */

// Target custom domain (when confirmed live and DNS verified)
export const TARGET_CUSTOM_DOMAIN = "https://oddly.com";

// Current deployment fallback domain
export const CURRENT_VERCEL_DOMAIN = "https://oddlyyy.vercel.app";

// Flag to switch to custom domain once DNS and SSL are verified operational
// Can also be overridden via NEXT_PUBLIC_SITE_URL environment variable in Vercel
export const IS_CUSTOM_DOMAIN_ACTIVE = false;

export function getBaseUrl(): string {
  // 1. Explicit environment variable override takes top priority
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  // 2. Custom domain toggle
  if (IS_CUSTOM_DOMAIN_ACTIVE) {
    return TARGET_CUSTOM_DOMAIN;
  }

  // 3. Vercel deployment detection
  if (process.env.VERCEL_ENV === "production") {
    return IS_CUSTOM_DOMAIN_ACTIVE ? TARGET_CUSTOM_DOMAIN : CURRENT_VERCEL_DOMAIN;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 4. Local development default
  return "http://localhost:3000";
}

export function getAbsoluteUrl(path: string = "/"): string {
  const base = getBaseUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return base;
  return `${base}${cleanPath}`;
}

export const siteConfig = {
  name: "Oddlyyy",
  legalName: "Oddlyyy Creative Studio",
  shortName: "Oddlyyy",
  tagline: "Be the exception.",
  description:
    "Oddlyyy is an independent creative digital agency crafting quirky, bold, and high-impact digital experiences, bespoke websites, AI automations, and brand identities for brands that dare to be different.",
  email: "hello@oddlyyy.studio",
  social: {
    twitter: "https://twitter.com/oddlyyy",
    instagram: "https://instagram.com/oddlyyy",
    github: "https://github.com/Atharva0393/Oddlyyy",
    linkedin: "https://linkedin.com/company/oddlyyy",
  },
  authors: [
    {
      name: "Oddlyyy Creative Studio",
      url: getAbsoluteUrl("/about"),
    },
  ],
  creator: "Oddlyyy Creative Studio",
  publisher: "Oddlyyy Creative Studio",
  themeColor: "#FAF7F2",
  defaultOgImage: "/logo-preview.png",
};


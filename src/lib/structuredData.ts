import { siteConfig, getAbsoluteUrl } from "./siteConfig";

/**
 * Structured Data (JSON-LD) generators for Oddlyyy
 * Conforms to Schema.org standards for rich search results, AEO, and GEO citation.
 */

export function generateOrganizationSchema() {
  const orgUrl = getAbsoluteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${orgUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: orgUrl,
    logo: {
      "@type": "ImageObject",
      url: getAbsoluteUrl(siteConfig.defaultOgImage),
      width: 1200,
      height: 630,
    },
    image: getAbsoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ],
    knowsAbout: [
      "Custom Web Development",
      "Next.js Digital Platforms",
      "AI & Business Automation",
      "Brand Identity & Creative Direction",
      "Mobile App Development",
      "Business Systems & API Integrations",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
  };
}

export function generateWebSiteSchema() {
  const siteUrl = getAbsoluteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  const orgUrl = getAbsoluteUrl();
  const serviceUrl = getAbsoluteUrl(service.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}/#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: serviceUrl,
    provider: {
      "@id": `${orgUrl}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Deliverables`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
          },
        },
      ],
    },
  };
}

export interface ProjectSchemaInput {
  title: string;
  summary: string;
  path: string;
  image?: string;
  client?: string;
  industry?: string;
  year?: string;
}

export function generateProjectSchema(project: ProjectSchemaInput) {
  const orgUrl = getAbsoluteUrl();
  const projectUrl = getAbsoluteUrl(project.path);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}/#project`,
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: projectUrl,
    image: project.image ? getAbsoluteUrl(project.image) : getAbsoluteUrl(siteConfig.defaultOgImage),
    author: {
      "@id": `${orgUrl}/#organization`,
    },
    creator: {
      "@id": `${orgUrl}/#organization`,
    },
    dateCreated: project.year || "2025",
    inLanguage: "en-US",
  };
}

export interface FaqItemSchema {
  question: string;
  answer: string;
}

export function generateFaqPageSchema(faqs: FaqItemSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

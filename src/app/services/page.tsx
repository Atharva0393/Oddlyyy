import React from "react";
import type { Metadata } from "next";
import { TactileServicesShowcase } from "@/components/sections/TactileServicesShowcase";
import { CtaSection } from "@/components/sections/CtaSection";
import { getAbsoluteUrl, siteConfig } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Services & Capabilities | Web, AI, Brand & Systems | Oddlyyy",
  description:
    "Six core ways to build what is next. Custom Next.js web development, intelligent AI automations, bespoke brand identities, business systems, and mobile applications.",
  alternates: {
    canonical: getAbsoluteUrl("/services"),
  },
  openGraph: {
    title: "Services & Capabilities | Oddlyyy Creative Studio",
    description:
      "Design, engineering, and strategy working together to turn ambitious digital ideas into real business impact.",
    url: getAbsoluteUrl("/services"),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Capabilities | Oddlyyy Creative Studio",
    description:
      "Full-stack custom websites, AI automation workflows, brand identity design, and mobile applications.",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getAbsoluteUrl("/services")}/#collection`,
    name: "Oddlyyy Services & Capabilities",
    url: getAbsoluteUrl("/services"),
    description:
      "Complete catalog of creative, engineering, and automation services offered by Oddlyyy.",
    isPartOf: {
      "@type": "WebSite",
      url: getAbsoluteUrl(),
    },
  };

  return (
    <main className="min-h-screen bg-paper bg-notebook-ruled">
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />

      {/* 1. TACTILE SERVICES SHOWCASE */}
      <TactileServicesShowcase />

      {/* 2. UNIFIED CTA BANNER */}
      <CtaSection
        id="services-cta"
        title={
          <>
            Not sure what you need? That&apos;s fine.{" "}
            <span className="font-recoleta italic text-terracotta font-normal block sm:inline">
              Let&apos;s figure it out.
            </span>
          </>
        }
        description={null}
        primaryButtonLabel="Tell us what you're building"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Explore past case studies"
        secondaryButtonHref="/work"
      />
    </main>
  );
}

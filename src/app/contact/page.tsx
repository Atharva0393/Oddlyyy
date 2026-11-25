import React from "react";
import type { Metadata } from "next";
import { NotebookContactView } from "@/components/sections/notebook";
import { getAbsoluteUrl, siteConfig } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact | Start a Project | Independent Digital Studio",
  description:
    "Got a project, a technical challenge, or an ambitious digital brief? Start an inquiry with Oddlyyy. We collaborate directly with founders and teams.",
  alternates: {
    canonical: getAbsoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact Oddlyyy | Start a Project",
    description:
      "Leave a note for the Oddlyyy studio team. We read and reply to every message directly, with zero account manager layers.",
    url: getAbsoluteUrl("/contact"),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Oddlyyy | Start a Project",
    description:
      "Ready to build something exceptional? Tell us about your project, timeline, and goals.",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${getAbsoluteUrl("/contact")}/#contactpage`,
    name: "Contact Oddlyyy Studio",
    url: getAbsoluteUrl("/contact"),
    description:
      "Direct project inquiries and discovery scheduling for Oddlyyy creative digital agency.",
    mainEntity: {
      "@type": "Organization",
      name: "Oddlyyy",
      email: siteConfig.email,
      url: getAbsoluteUrl(),
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, contactPageSchema]} />
      <NotebookContactView />
    </>
  );
}

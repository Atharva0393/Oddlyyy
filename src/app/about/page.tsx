import React from "react";
import type { Metadata } from "next";
import {
  AboutHeroManifesto,
  AboutWhyWeStarted,
  AboutPersonality,
  AboutHowWeWork,
  AboutPeople,
  AboutFinalInvitation,
} from "@/components/sections/about";
import { getAbsoluteUrl } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "About | Independent Creative Digital Studio",
  description:
    "We're Oddlyyy: an independent creative digital studio crafting distinctive brand systems, high-performance web platforms, and clever digital experiences for ambitious companies.",
  alternates: {
    canonical: getAbsoluteUrl("/about"),
  },
  openGraph: {
    title: "About Oddlyyy | We Were Never Really Into Normal",
    description:
      "A small team of makers building brands, digital flagships, and high-performance experiences that refuse to blend into corporate consensus.",
    url: getAbsoluteUrl("/about"),
    siteName: "Oddlyyy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Oddlyyy | Independent Creative Digital Studio",
    description:
      "A small team of makers building brands, digital flagships, and high-performance experiences that refuse to blend in.",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${getAbsoluteUrl("/about")}/#aboutpage`,
    name: "About Oddlyyy Studio",
    url: getAbsoluteUrl("/about"),
    description:
      "Oddlyyy is an independent creative digital agency crafting quirky, bold, and high-impact digital experiences for brands that dare to be different.",
    mainEntity: {
      "@type": "Organization",
      name: "Oddlyyy",
      url: getAbsoluteUrl(),
    },
  };

  return (
    <main className="min-h-screen bg-paper bg-notebook-ruled text-ink">
      <JsonLd data={[breadcrumbSchema, aboutPageSchema]} />
      <AboutHeroManifesto />
      <AboutWhyWeStarted />
      <AboutPersonality />
      <AboutHowWeWork />
      <AboutPeople />
      <AboutFinalInvitation />
    </main>
  );
}

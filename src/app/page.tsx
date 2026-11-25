import React from "react";
import type { Metadata } from "next";
import {
  NotebookHero,
  NotebookWhatWeMake,
  NotebookFeaturedWork,
  NotebookAboutPreview,
  NotebookLetsTalk,
} from "@/components/sections/notebook";
import { getAbsoluteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Oddlyyy | Independent Creative Digital Agency | Be the Exception",
  description:
    "Oddlyyy is an independent creative digital agency crafting quirky, bold, and high-impact digital experiences, bespoke websites, AI automations, and brand identities for brands that dare to be different.",
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    title: "Oddlyyy | Independent Creative Digital Agency",
    description:
      "Oddlyyy is an independent creative digital agency crafting quirky, bold, and high-impact digital experiences, bespoke websites, AI automations, and brand identities.",
    url: getAbsoluteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 01: NOTEBOOK HERO */}
      <NotebookHero />

      {/* SECTION 02: WHAT WE MAKE SCRAPBOOK */}
      <NotebookWhatWeMake />

      {/* SECTION 03: IDEAS MADE REAL */}
      <NotebookFeaturedWork />

      {/* SECTION 04: ABOUT STUDIO PREVIEW */}
      <NotebookAboutPreview />

      {/* SECTION 05: LET'S TALK */}
      <NotebookLetsTalk />
    </>
  );
}

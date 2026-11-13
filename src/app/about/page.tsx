import React from "react";
import type { Metadata } from "next";
import {
  AboutHeroManifesto,
  AboutStory,
  AboutThreeYs,
  AboutCodePrinciples,
  AboutFounders,
  AboutHowWeWork,
  AboutFinalInvitation,
} from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About Oddlyyy — Independent Creative Digital Studio",
  description:
    "We're Oddlyyy. A small creative studio making brands, digital experiences and clever little things that refuse to blend in. Why. Why not. Why settle.",
  openGraph: {
    title: "About Oddlyyy — We Were Never Really Into Normal",
    description:
      "A small team of makers building brands, digital flagships, and high-performance experiences that refuse to blend into corporate consensus.",
    url: "https://oddlyyy.vercel.app/about",
    siteName: "Oddlyyy",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 01 — THE MANIFESTO */}
      <AboutHeroManifesto />

      {/* SECTION 02 — THE STORY (WHY WE EXIST) */}
      <AboutStory />

      {/* SECTION 03 — THE THREE Y'S (THE ODDLYYY PHILOSOPHY) */}
      <AboutThreeYs />

      {/* SECTION 04 — THE ODDLYYY CODE (WHAT MAKES US TICK) */}
      <AboutCodePrinciples />

      {/* SECTION 05 — THE FOUNDERS (THE PEOPLE BEHIND THE PIXELS) */}
      <AboutFounders />

      {/* SECTION 06 — HOW WE WORK (LESS THEATRE, MORE MAKING) */}
      <AboutHowWeWork />

      {/* SECTION 07 — THE INVITATION (FINAL CTA) */}
      <AboutFinalInvitation />
    </>
  );
}

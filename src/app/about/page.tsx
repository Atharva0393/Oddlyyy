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

export const metadata: Metadata = {
  title: "About Oddlyyy | Independent Creative Digital Studio",
  description:
    "We're Oddlyyy. A creative studio making brands, digital experiences and clever little things that refuse to blend in. Why. Why not. Why settle.",
  openGraph: {
    title: "About Oddlyyy | We Were Never Really Into Normal",
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
      <AboutHeroManifesto />
      <AboutWhyWeStarted />
      <AboutPersonality />
      <AboutHowWeWork />
      <AboutPeople />
      <AboutFinalInvitation />
    </>
  );
}

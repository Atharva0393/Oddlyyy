import React from "react";
import {
  Hero,
  TripleYSection,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <Hero />

      {/* THE THREE Y'S MOTIF — WHY. WHY NOT. WHY SETTLE. */}
      <TripleYSection />

      {/* FINAL CTA */}
      <FinalCta />
    </>
  );
}

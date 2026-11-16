"use client";

import React from "react";
import { CtaSection } from "@/components/sections/CtaSection";

export const AboutFinalInvitation: React.FC = () => {
  return (
    <CtaSection
      id="about-invitation"
      eyebrow="NEXT STEPS // STUDIO INVITATION"
      annotation="no pitch decks, just honest conversations →"
      title={
        <>
          YOU WEREN&apos;T LOOKING FOR ANOTHER AGENCY.{" "}
          <span className="font-secondary text-terracotta font-normal block sm:inline">
            GOOD.
          </span>
        </>
      }
      description="If you've got an idea that deserves more than the usual treatment, we'd probably get along."
      primaryButtonLabel="Let's make something odd ↗"
      primaryButtonHref="/contact"
      secondaryButtonLabel="Explore our work"
      secondaryButtonHref="/work"
      footerNote="ODDLYYY CREATIVE STUDIO © 2024–PRESENT"
    />
  );
};

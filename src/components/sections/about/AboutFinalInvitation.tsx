"use client";

import React from "react";
import { CtaSection } from "@/components/sections/CtaSection";

export const AboutFinalInvitation: React.FC = () => {
  return (
    <CtaSection
      id="about-invitation"
      title="YOU WEREN'T LOOKING FOR ANOTHER AGENCY."
      description="If you've got an idea that deserves more than the usual treatment, we'd probably get along."
      primaryButtonLabel="Let's make something odd ↗"
      primaryButtonHref="/contact"
      secondaryButtonLabel="Explore our work"
      secondaryButtonHref="/work"
    />
  );
};

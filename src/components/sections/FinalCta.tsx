"use client";

import React from "react";
import { CtaSection } from "./CtaSection";

export const FinalCta: React.FC = () => {
  return (
    <CtaSection
      id="final-cta"
      title="Got an idea that refuses to be ordinary?"
      description="Tell us what you're imagining. We'll bring the creativity, the strategy and the skills to make it happen."
      primaryButtonLabel="Let's Connect"
      primaryButtonHref="/contact"
    />
  );
};

"use client";

import React from "react";
import { CtaSection } from "@/components/sections/CtaSection";

export const AboutFinalInvitation: React.FC = () => {
  return (
    <CtaSection
      id="about-invitation"
      title={
        <>
          Got something a little{" "}
          <span className="font-secondary text-terracotta font-normal block sm:inline">
            different in mind?
          </span>
        </>
      }
      description="Tell us what you're dreaming up. We'll bring the curiosity, creativity and skills to help make it happen."
      primaryButtonLabel="Let's Connect"
      primaryButtonHref="/contact"
      secondaryButtonLabel="Explore our work"
      secondaryButtonHref="/work"
    />
  );
};

import React from "react";
import { TactileServicesShowcase } from "@/components/sections/TactileServicesShowcase";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = {
  title: "Services & Capabilities | Oddlyyy",
  description:
    "Six ways to build what's next. Design, technology and strategy working together to turn ideas into real impact.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* 1. TACTILE SERVICES SHOWCASE (MATCHING REFERENCE DESIGN) */}
      <TactileServicesShowcase />

      {/* 2. UNIFIED CTA BANNER */}
      <CtaSection
        id="services-cta"
        title={
          <>
            Not sure what you need? That&apos;s fine.{" "}
            <span className="font-secondary text-terracotta font-normal block sm:inline">
              Let&apos;s figure it out.
            </span>
          </>
        }
        description={null}
        primaryButtonLabel="Tell us what you're building"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Explore past case studies"
        secondaryButtonHref="/work"
      />
    </main>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  PrimaryButton,
  SecondaryButton,
  HandwrittenNote,
  RotatingBadge,
} from "@/components/ui";
import { ServicesLanyardSection } from "@/components/sections/ServicesLanyardSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = {
  title: "Services & Capabilities — Oddlyyy",
  description:
    "We have a few tricks up our sleeve. From building your next website to automating the boring stuff, we turn ambitious ideas into things that actually work.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
              We have a few tricks{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                up our sleeve.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              From building your next website to automating the boring stuff, we turn ambitious ideas into things that actually work.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="lavender" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. DEDICATED TACTILE LANYARD RAIL SERVICE SECTION */}
      <ServicesLanyardSection />

      {/* 3. FINAL CTA */}
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
        description="You don't need a finalized 50-page specification deck. Share where you are today and where you want to go—we'll shape the right scope and technical milestones together."
        primaryButtonLabel="Tell us what you're building"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Explore past case studies"
        secondaryButtonHref="/work"
      />
    </>
  );
}

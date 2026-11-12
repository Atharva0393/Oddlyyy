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
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-cream leading-[1.05]">
              Not sure what you need? That&apos;s fine.{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                Let&apos;s figure it out.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
              You don&apos;t need a finalized 50-page specification deck. Share where you are today and where you want to go—we&apos;ll shape the right scope and technical milestones together.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Tell us what you&apos;re building</span>
              </PrimaryButton>

              <SecondaryButton
                href="/work"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Explore past case studies</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PrimaryButton, SecondaryButton, HandwrittenNote, RotatingBadge } from "@/components/ui";

export const AboutFinalInvitation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionContainer
      id="about-invitation"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
        {/* Subtle Background Noise Overlay */}
        <div
          className="absolute inset-0 bg-noise opacity-20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient Warm Corner Glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-terracotta/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl space-y-10 sm:space-y-12">
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cream/15 text-xs font-mono uppercase tracking-wider text-cream/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
              <span className="text-cream font-bold">NEXT STEPS // STUDIO INVITATION</span>
            </div>

            <div className="flex items-center gap-3">
              <span>REMOTE-FIRST</span>
              <span>•</span>
              <span className="text-terracotta font-bold">GLOBAL CLIENTS</span>
            </div>
          </div>

          {/* Headline & Display Moment */}
          <div className="space-y-4">
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream leading-[1.02]">
              YOU WEREN&apos;T LOOKING FOR ANOTHER AGENCY.{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                GOOD.
              </span>
            </h2>

            <p className="text-lg sm:text-2xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal pt-2">
              If you&apos;ve got an idea that deserves more than the usual treatment, we&apos;d probably get along.
            </p>
          </div>

          {/* CTAs & Handwritten Annotation */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full sm:w-auto">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>LET&apos;S MAKE SOMETHING ODD ↗</span>
              </PrimaryButton>

              <SecondaryButton
                href="/work"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center font-semibold"
              >
                <span>EXPLORE OUR WORK</span>
              </SecondaryButton>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <HandwrittenNote
                direction="right"
                color="terracotta"
                className="text-lg sm:text-xl text-cream/90"
              >
                no pitch decks, just honest conversations →
              </HandwrittenNote>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="pt-8 border-t border-cream/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cream/50">
            <span>ODDLYYY CREATIVE STUDIO © 2024–PRESENT</span>
            <span className="text-terracotta font-bold">WHY. WHY NOT. WHY SETTLE.</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};


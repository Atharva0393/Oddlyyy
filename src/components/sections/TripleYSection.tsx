"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, FloatingAsterisk, GlassFolder } from "@/components/ui";

export const TripleYSection: React.FC = () => {
  return (
    <SectionContainer
      id="three-ys-motif"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      {/* Decorative Grid Noise */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[0.95]">
              WHY. WHY NOT.
              <br />
              <span className="text-terracotta italic font-normal">
                WHY SETTLE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-primary">
              People often ask why our name ends with three Y&apos;s. It&apos;s not an eccentric typo. It&apos;s our entire creative operating system condensed into three stubborn questions.
            </p>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            our creative DNA
          </HandwrittenNote>
        </div>

        {/* The Three Y Glass Folder Cards */}
        <div className="relative grid max-w-[1140px] grid-cols-1 items-end justify-items-center gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 mx-auto pt-4 pb-2">
          {/* Card 1: WHY. (Pillar 01 · Curiosity) */}
          <GlassFolder
            label="WHY."
            meta="Y¹ · Curiosity"
            art="aurora"
            seed={101}
            tone="light"
            labelPlacement="bottom-left"
            action="more"
            appearDelay={0}
            width={330}
            files={[
              {
                name: "Interrogating the Default",
                meta: "Pillar 01 · Thesis",
                art: "aurora",
              },
              {
                name: "Why do competitor sites look identical?",
                meta: "First Principle",
              },
              {
                name: "Questioning assumptions before designing",
                meta: "Oddlyyy Core #1",
              },
              {
                name: "Read Full Studio Story",
                meta: "About Us · Link",
                href: "/about",
              },
            ]}
            menu={[
              { label: "Pillar 01: Curiosity" },
              {
                label: "Read Studio Story",
                onSelect: () => {
                  window.location.href = "/about";
                },
              },
              {
                label: "Explore Selected Work",
                onSelect: () => {
                  window.location.href = "/work";
                },
              },
            ]}
          />

          {/* Card 2: WHY NOT. (Pillar 02 · Unconventional Thinking) */}
          <GlassFolder
            label="WHY NOT."
            meta="Y² · Unconventional"
            art="verdant"
            seed={202}
            tone="light"
            labelPlacement="bottom-left"
            action="more"
            appearDelay={140}
            width={330}
            files={[
              {
                name: "Daring to Be Distinct",
                meta: "Pillar 02 · Thesis",
                art: "verdant",
              },
              {
                name: "Tactile friction & real digital joy",
                meta: "User Experience",
              },
              {
                name: "Editorial craft + instantaneous speed",
                meta: "Oddlyyy Core #2",
              },
              {
                name: "Browse Studio Services",
                meta: "Services Menu · Link",
                href: "/services",
              },
            ]}
            menu={[
              { label: "Pillar 02: Unconventional" },
              {
                label: "Browse Services",
                onSelect: () => {
                  window.location.href = "/services";
                },
              },
              {
                label: "Interactive Playground",
                onSelect: () => {
                  window.location.href = "/playground";
                },
              },
            ]}
          />

          {/* Card 3: WHY SETTLE. (Pillar 03 · High Standards) */}
          <GlassFolder
            label="WHY SETTLE."
            meta="Y³ · High Standards"
            art="ember"
            seed={303}
            tone="dark"
            labelPlacement="bottom-left"
            action="more"
            appearDelay={280}
            width={330}
            files={[
              {
                name: "Rigor Beneath the Playfulness",
                meta: "Pillar 03 · Thesis",
                art: "ember",
              },
              {
                name: "No cookie-cutter templates or bloat",
                meta: "Executive Standard",
              },
              {
                name: "Meticulous craft & commercial results",
                meta: "Oddlyyy Core #3",
              },
              {
                name: "Start a Project",
                meta: "Inquiry Form · Link",
                href: "/contact",
              },
            ]}
            menu={[
              { label: "Pillar 03: High Standards" },
              {
                label: "Start a Commission",
                onSelect: () => {
                  window.location.href = "/contact";
                },
              },
              {
                label: "View All Case Studies",
                onSelect: () => {
                  window.location.href = "/work";
                },
              },
            ]}
          />
        </div>

        {/* Interaction hint */}
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
          Hover to lean &bull; Click folder to inspect &bull; Select files to explore
        </p>

        {/* Brand Payoff Banner: Connects the 3 Y's to Main Tagline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-ink text-cream border-2 border-ink flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-ink-offset">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-medium block">
              The Brand Conclusion
            </span>
            <p className="font-primary font-semibold text-2xl sm:text-3xl text-cream tracking-tight">
              Three stubborn questions. One inescapable conclusion:
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-cream text-ink font-primary font-semibold text-sm sm:text-xl border border-cream shadow-sm flex items-center gap-2">
              <span>Be the exception.</span>
              <FloatingAsterisk size="xs" color="terracotta" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

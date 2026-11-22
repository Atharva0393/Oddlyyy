"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

interface StudioPillar {
  title: string;
  description: string;
}

const STUDIO_PILLARS: StudioPillar[] = [
  {
    title: "Direct with the makers.",
    description:
      "You collaborate directly with the people who design the brand and write the code. No account layers, no diluted messages, no lost nuances in translation.",
  },
  {
    title: "Selective by choice.",
    description:
      "We deliberately take on only a handful of clients at a time. Every project gets our full attention, creative depth and obsessive craftsmanship.",
  },
  {
    title: "Skin in the game.",
    description:
      "We care deeply about whether the work actually moves the needle for your business. Good looks are table stakes; real impact is the benchmark.",
  },
];

export const AboutPeople: React.FC = () => {
  return (
    <section
      id="about-people"
      className="relative overflow-hidden bg-[#FAF3EE] py-20 sm:py-28 md:py-36 border-b border-ink/10"
    >
      <SectionContainer paddingY="none">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 sm:pb-20 border-b border-ink/10">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold block">
              THE STUDIO
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
              Small studio. Big on{" "}
              <span className="font-serif italic font-normal text-terracotta block sm:inline">
                getting things right.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 pt-2 lg:pt-8">
            <p className="font-primary text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed font-normal">
              We like keeping things close to the work. Fewer layers, direct conversations and the people making the work actually involved in making it.
            </p>
          </div>
        </div>

        {/* Elegant Typography-led Composition (3 Studio Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-16 sm:pt-20">
          {STUDIO_PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-4">
              <span className="w-2 h-2 rounded-full bg-terracotta block" />
              <h3 className="font-primary font-bold text-xl sm:text-2xl text-ink tracking-tight">
                {pillar.title}
              </h3>
              <p className="font-primary text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authentic Studio Hallmark & Note */}
        <div className="pt-16 sm:pt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-ink/10 mt-16 sm:mt-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink/50 font-medium">
            <span>ODDLYYY CREATIVE STUDIO</span>
            <span>/</span>
            <span>REMOTE-FIRST &amp; GLOBAL</span>
          </div>

          <HandwrittenNote direction="right" color="terracotta" className="text-base sm:text-lg">
            no agency bureaucracy, just honest craft
          </HandwrittenNote>
        </div>
      </SectionContainer>
    </section>
  );
};

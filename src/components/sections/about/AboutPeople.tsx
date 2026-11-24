"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";
import { NoticeBoardPin, type PinColor } from "@/components/ui/notebook";

interface StudioPillar {
  title: string;
  description: string;
}

const PIN_COLORS: PinColor[] = ["terracotta", "yellow", "mint"];
const PIN_ANGLES = [-8, 6, -5];

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
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 md:py-36 border-b border-ink/10"
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
          {STUDIO_PILLARS.map((pillar, index) => (
            <div key={pillar.title} className="group relative space-y-4">
              <div className="pb-1 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3">
                <NoticeBoardPin
                  color={PIN_COLORS[index % PIN_COLORS.length]}
                  angle={PIN_ANGLES[index % PIN_ANGLES.length]}
                  size="md"
                />
              </div>
              <h3 className="font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-terracotta transition-colors duration-200">
                {pillar.title}
              </h3>
              <p className="font-primary text-base sm:text-lg text-ink/75 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authentic Studio Note */}
        <div className="pt-12 sm:pt-16 flex items-center justify-end border-t border-ink/10 mt-16 sm:mt-20">
          <HandwrittenNote direction="right" color="terracotta" className="text-base sm:text-lg">
            no agency bureaucracy, just honest craft
          </HandwrittenNote>
        </div>
      </SectionContainer>
    </section>
  );
};


"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, FloatingAsterisk } from "@/components/ui";
import { ThreeDPaper, type ThreeDPaperVariant } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { cn } from "@/lib/utils";

interface EditorialPageConfig {
  id: string;
  description: string;
  variant: ThreeDPaperVariant;
  heightClass: string;
  staggerClass: string;
}

const editorialPages: EditorialPageConfig[] = [
  {
    id: "why",
    description:
      "Why should every brand look the same? Why should every website follow the same formula? We believe the best ideas begin by asking better questions.",
    variant: "why",
    heightClass: "h-[450px] sm:h-[490px] lg:h-[520px]",
    staggerClass: "lg:translate-y-0",
  },
  {
    id: "why-not",
    description:
      "Why not make it more interesting? More thoughtful? More memorable? We bring design, creativity and technology together to make ideas worth noticing.",
    variant: "why-not",
    heightClass: "h-[480px] sm:h-[520px] lg:h-[550px]",
    staggerClass: "lg:translate-y-12",
  },
  {
    id: "why-settle",
    description:
      "Good looks are only the beginning. We care about the details, the experience and the impact our work creates for your business.",
    variant: "why-settle",
    heightClass: "h-[460px] sm:h-[500px] lg:h-[530px]",
    staggerClass: "lg:translate-y-4",
  },
];

export const TripleYSection: React.FC = () => {
  return (
    <SectionContainer
      id="three-ys-motif"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      {/* Decorative Grid Noise */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="space-y-14 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[0.95]">
              The Oddlyyy philosophy.
            </h2>

            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-primary">
              Three questions. One way of thinking.
            </p>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            our creative DNA
          </HandwrittenNote>
        </div>

        {/* Three Independent Floating 3D Pages (NO Outer Card Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          {editorialPages.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col space-y-5 sm:space-y-6 transition-transform duration-500",
                item.staggerClass
              )}
            >
              {/* The 3D Floating Editorial Page (pure 3D object, no outer boxes or borders) */}
              <div
                className={cn(
                  "relative w-full cursor-grab active:cursor-grabbing",
                  item.heightClass
                )}
              >
                <ThreeDPaper variant={item.variant} />
              </div>

              {/* Bottom Paragraph: Editorial copy directly on the page */}
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interaction hint */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50 text-center">
            Drag to explore &middot; Hover to reveal
          </p>
        </div>

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

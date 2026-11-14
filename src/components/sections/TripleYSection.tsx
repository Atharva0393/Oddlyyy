"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";
import { ThreeDPaper, type ThreeDPaperVariant } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { cn } from "@/lib/utils";
import logoData from "@/components/ui/oddlyyy-logo-paths.json";

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
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center justify-center">
            <HandwrittenNote direction="right" color="terracotta">
              our creative DNA
            </HandwrittenNote>
          </div>

          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[1.05] flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1">
            <span>The</span>
            <span
              className="inline-flex items-center text-terracotta"
              title="Oddlyyy"
              aria-label="Oddlyyy"
            >
              <svg
                viewBox="50 14 668 222"
                className="h-[0.84em] w-auto inline-block align-baseline -translate-y-[0.03em]"
                fill="currentColor"
                role="img"
                aria-hidden="true"
              >
                <path d={logoData.letters} fill="currentColor" fillRule="evenodd" />
              </svg>
            </span>
            <span>philosophy.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed font-primary max-w-xl mx-auto">
            Three questions. One way of thinking.
          </p>
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
      </div>
    </SectionContainer>
  );
};

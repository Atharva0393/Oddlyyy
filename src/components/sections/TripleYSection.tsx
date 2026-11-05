"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, FloatingAsterisk } from "@/components/ui";
import { ThreeDPaper, type ThreeDPaperVariant } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { threeYsMotif } from "@/content/brand";
import { cn } from "@/lib/utils";

export const TripleYSection: React.FC = () => {
  const cardConfigs: {
    variant: ThreeDPaperVariant;
    cardBg: string;
    markBg: string;
    linkText: string;
    href: string;
  }[] = [
    {
      variant: "why",
      cardBg: "bg-[#E4E0FC]/30 hover:bg-[#E4E0FC]/45 border-ink/20",
      markBg: "bg-lavender text-ink",
      linkText: "Read studio story",
      href: "/about",
    },
    {
      variant: "why-not",
      cardBg: "bg-[#E4F0E8]/40 hover:bg-[#E4F0E8]/55 border-ink/20",
      markBg: "bg-mint text-ink",
      linkText: "Explore services",
      href: "/services",
    },
    {
      variant: "why-settle",
      cardBg: "bg-[#F4E4DC]/50 hover:bg-[#F4E4DC]/65 border-ink/20",
      markBg: "bg-terracotta text-cream",
      linkText: "Start a project",
      href: "/contact",
    },
  ];

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

        {/* The Three Y 3D Paper Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {threeYsMotif.map((item, idx) => {
            const config = cardConfigs[idx];

            return (
              <article
                key={item.letter}
                className={cn(
                  "group relative flex flex-col justify-between rounded-3xl border-2 p-5 sm:p-6 shadow-sm hover:shadow-ink-offset hover:border-ink/35 transition-all duration-300 space-y-5",
                  config.cardBg
                )}
              >
                {/* Top Row: Character Mark + Pillar info */}
                <div className="flex items-center justify-between pb-4 border-b border-ink/10">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center font-primary font-bold text-xl border border-ink/15 shadow-sm transition-transform duration-300 group-hover:scale-105",
                      config.markBg
                    )}
                  >
                    <span>Y</span>
                    <span className="text-[10px] font-mono font-semibold align-super ml-0.5 opacity-80">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="text-right space-y-0.5">
                    <span className="font-mono text-xs font-semibold text-terracotta uppercase tracking-wider block">
                      {item.pillar}
                    </span>
                    <span className="text-[11px] font-mono opacity-60 uppercase block">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Main Question & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                    {item.question}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-terracotta font-medium">
                    {item.subtitle}
                  </p>
                </div>

                {/* The 3D Paper Shader Frame */}
                <div className="shader-frame relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden border border-ink/20 shadow-md bg-[#08080a]">
                  <ThreeDPaper variant={config.variant} />
                </div>

                {/* Elaboration Narrative */}
                <p className="text-sm text-ink/85 leading-relaxed font-primary pt-1">
                  {item.elaboration}
                </p>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-ink/60 font-medium">
                    Oddlyyy Core #{idx + 1}
                  </span>
                  <Link
                    href={config.href}
                    className="inline-flex items-center gap-1.5 text-terracotta hover:text-ink font-semibold transition-colors group-hover:underline underline-offset-4"
                  >
                    <span>{config.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interaction hint */}
        <div className="flex items-center justify-center gap-2 pt-2">
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

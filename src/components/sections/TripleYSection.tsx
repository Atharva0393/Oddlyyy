"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, FloatingAsterisk } from "@/components/ui";
import { threeYsMotif } from "@/content/brand";
import { cn } from "@/lib/utils";

export const TripleYSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const cardColors = [
    {
      bg: "bg-lavender",
      border: "border-ink/20",
      accent: "text-terracotta",
      markBg: "bg-cream text-ink",
    },
    {
      bg: "bg-mint",
      border: "border-ink/20",
      accent: "text-ink",
      markBg: "bg-terracotta text-cream",
    },
    {
      bg: "bg-cream",
      border: "border-ink/20",
      accent: "text-terracotta",
      markBg: "bg-ink text-cream",
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
              WHY. WHY NOT.
              <br />
              <span className="text-terracotta italic font-normal">
                WHY SETTLE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-secondary">
              People often ask why our name ends with three Y&apos;s. It&apos;s not an eccentric typo. It&apos;s our entire creative operating system condensed into three stubborn questions.
            </p>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            our creative DNA
          </HandwrittenNote>
        </div>

        {/* The Three Y Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threeYsMotif.map((item, idx) => {
            const colors = cardColors[idx];
            const isHovered = hoveredIdx === idx;

            return (
              <motion.article
                key={item.letter}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={prefersReduced ? undefined : { y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "group relative p-6 sm:p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between space-y-8",
                  colors.bg,
                  colors.border,
                  "hover:shadow-ink-offset"
                )}
              >
                {/* Top Row: The Expressive Y Character Mark */}
                <div className="flex items-center justify-between pb-6 border-b border-ink/15">
                  <div
                    className={cn(
                      "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-primary font-bold text-3xl sm:text-4xl shadow-sm border border-ink/15 transition-transform duration-300 group-hover:scale-110",
                      colors.markBg
                    )}
                  >
                    <span>Y</span>
                    <span className="text-xs font-mono font-medium align-super ml-0.5 opacity-80">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="text-right space-y-0.5">
                    <span className="font-mono text-xs font-medium text-terracotta uppercase tracking-wider block">
                      {item.pillar}
                    </span>
                    <span className="text-[11px] font-mono opacity-60 uppercase block">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Question & Narrative */}
                <div className="space-y-4 my-auto">
                  <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                    {item.question}
                  </h3>

                  <p className="font-mono text-xs uppercase tracking-wider text-terracotta font-medium">
                    {item.meaning}
                  </p>

                  <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-secondary">
                    {item.elaboration}
                  </p>
                </div>

                {/* Card Footer Micro-Interactions */}
                <div className="pt-4 border-t border-ink/15 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-70 group-hover:text-terracotta transition-colors font-medium">
                    Oddlyyy Core #{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center bg-cream/70 group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.article>
            );
          })}
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


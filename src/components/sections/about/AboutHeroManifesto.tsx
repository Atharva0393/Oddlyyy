"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, RotatingBadge } from "@/components/ui";

export const AboutHeroManifesto: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="about-manifesto"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-24"
    >
      {/* Decorative Technical Grid Background Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(32,32,40,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,32,40,0.04)_1px,transparent_1px)]"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-10 sm:space-y-14"
      >
        {/* Top Editorial Metadata Rail */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink/15 text-xs font-mono uppercase tracking-wider text-ink/70"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
            <span className="font-semibold text-ink">THE ODDLYYY INTRODUCTION</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] sm:text-xs">
            <span>EST. 2024</span>
            <span className="hidden sm:inline text-ink/30">•</span>
            <span>CREATIVE STUDIO // INDEPENDENT BY DESIGN</span>
            <span className="hidden sm:inline text-ink/30">•</span>
            <span className="text-terracotta font-bold">BE THE EXCEPTION.</span>
          </div>
        </motion.div>

        {/* Oversized Headline with Visual Typographic Interruption on "NORMAL" */}
        <motion.div variants={itemVariants} className="space-y-6 max-w-6xl">
          <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight text-ink leading-[0.96] sm:leading-[0.94]">
            WE WERE NEVER REALLY INTO{" "}
            <span className="relative inline-block my-1.5 sm:my-2 px-3 sm:px-5 py-0.5 sm:py-1 rounded-2xl bg-ink text-cream -rotate-2 select-none shadow-ink-offset transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]">
              <span className="line-through decoration-terracotta decoration-[3px] sm:decoration-[5px]">
                NORMAL.
              </span>
              <span
                className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-terracotta text-cream text-[10px] font-mono font-bold flex items-center justify-center shadow-sm"
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          </h1>

          {/* Supporting Copy + Editorial Asymmetric Placement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="font-primary font-normal text-xl sm:text-2xl md:text-3xl text-ink/80 leading-relaxed sm:leading-snug max-w-3xl">
                We&apos;re Oddlyyy. A small creative studio making brands, digital experiences and clever little things that refuse to blend in.
              </p>
            </div>

            {/* Handwritten Note Annotation */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-2">
              <HandwrittenNote
                direction="left"
                color="terracotta"
                rotate="left"
                className="text-xl sm:text-2xl"
              >
                Good. Neither are we.
              </HandwrittenNote>
              <span className="font-mono text-[11px] text-ink/50 uppercase tracking-widest">
                Manifesto Note 01
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Graphic Accent Strip */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-ink/15 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-ink/70">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>CRAFT</span>
              <span className="text-ink/30">•</span>
              <span className="w-2 h-2 rounded-full bg-lavender-dark" />
              <span>STRATEGY</span>
              <span className="text-ink/30">•</span>
              <span className="w-2 h-2 rounded-full bg-mint-dark" />
              <span>TECHNOLOGY</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="font-accent text-lg text-terracotta">
              scroll to unpack the story ↓
            </span>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

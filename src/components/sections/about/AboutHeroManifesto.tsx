"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";

export const AboutHeroManifesto: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <SectionContainer
      id="about-hero"
      paddingY="none"
      className="relative overflow-hidden bg-transparent pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 border-b border-ink/10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 flex flex-col items-center"
      >
        {/* Hero Display Headline */}
        <motion.div variants={itemVariants} className="w-full">
          <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-ink leading-[0.96] sm:leading-[0.93]">
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
        </motion.div>

        {/* Conversational Supporting Narrative */}
        <motion.div variants={itemVariants} className="pt-2 sm:pt-4 max-w-2xl mx-auto">
          <p className="font-primary text-xl sm:text-2xl md:text-[26px] text-ink/80 leading-relaxed font-normal">
            We&apos;re Oddlyyy. A creative studio making brands, digital experiences and clever little things that refuse to blend in.
          </p>
        </motion.div>

        {/* Clean Scroll Cue */}
        <motion.div variants={itemVariants} className="pt-4 flex items-center justify-center gap-2 text-terracotta font-accent text-lg sm:text-xl mx-auto">
          <span>scroll to unpack the story</span>
          <span className="inline-block animate-bounce">↓</span>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

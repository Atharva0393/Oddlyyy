"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Sparkles, Palette, Zap } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

export const BrandIntro: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionContainer
      id="brand-intro"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 lg:space-y-16"
      >
        {/* Top Note */}
        <motion.div
          variants={itemVariants}
          className="flex justify-end"
        >
          <HandwrittenNote direction="left" color="terracotta">
            normal won&apos;t cut it
          </HandwrittenNote>
        </motion.div>

        {/* Large Editorial Headline & Core Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-4">
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05]">
              Different isn&apos;t a strategy.{" "}
              <span className="block text-terracotta font-normal mt-1">
                It&apos;s our starting point.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6 pt-2"
          >
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-primary">
              In a digital landscape flooded with lookalike templates and interchangeable corporate websites, playing it safe is the single biggest commercial risk.
            </p>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed font-primary">
              Oddlyyy combines bold creative thinking, modern technology, and meticulous execution to help ambitious businesses stake out unmistakable cultural territory and convert passive visitors into obsessed advocates.
            </p>
          </motion.div>
        </div>

        {/* The 3-Pillar Convergence: Creative Thinking + Modern Tech + Execution */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink/10"
        >
          {/* Pillar 1: Creative Thinking */}
          <div className="p-5 sm:p-7 rounded-2xl bg-lavender/50 border border-ink/15 space-y-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-ink-offset">
            <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
              <Palette className="w-5 h-5 text-lavender" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block">
              [01] Ideation
            </span>
            <h3 className="font-primary font-semibold text-2xl text-ink tracking-tight">
              Creative Thinking
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed font-primary">
              Unpacking assumptions, discovering non-obvious angles, and crafting expressive typographic narratives that refuse to blend into corporate feeds.
            </p>
          </div>

          {/* Pillar 2: Seamless Experiences */}
          <div className="p-5 sm:p-7 rounded-2xl bg-mint/50 border border-ink/15 space-y-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-ink-offset">
            <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-mint" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block">
              [02] Digital Craft
            </span>
            <h3 className="font-primary font-semibold text-2xl text-ink tracking-tight">
              Seamless Experiences
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed font-primary">
              Lightning-fast digital platforms, intuitive user journeys, and tactile interactions engineered to captivate audiences across every screen.
            </p>
          </div>

          {/* Pillar 3: Flawless Execution */}
          <div className="p-5 sm:p-7 rounded-2xl bg-cream/90 border border-ink/15 space-y-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-ink-offset">
            <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
              <Zap className="w-5 h-5 text-terracotta" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block">
              [03] Execution
            </span>
            <h3 className="font-primary font-semibold text-2xl text-ink tracking-tight">
              Flawless Execution
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed font-primary">
              Direct maker-to-client collaboration with zero middleman layers, delivering measurable business outcomes and lasting market distinction.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};


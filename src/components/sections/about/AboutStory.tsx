"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

export const AboutStory: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="about-story"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="space-y-16 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/15">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              01 / WHY WE EXIST
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
              A little allergic to the ordinary.
            </h2>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            founded on conviction
          </HandwrittenNote>
        </div>

        {/* Asymmetric Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Huge Section Numeral + Narrative Paragraphs */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono font-bold text-6xl sm:text-7xl md:text-8xl text-ink/15 select-none leading-none">
                01
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
                [ Studio Thesis // Origin ]
              </span>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink/85 leading-relaxed font-primary">
              <p className="font-medium text-ink text-xl sm:text-2xl leading-snug">
                The internet has no shortage of things that look the same.
              </p>

              <p className="text-ink/80">
                The same layouts. The same language. The same safe little ideas dressed up as innovation.
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-lavender/40 border-l-4 border-l-terracotta border-y border-r border-ink/15 space-y-2">
                <p className="font-semibold text-ink text-lg sm:text-xl">
                  We thought it was time for something different.
                </p>
                <p className="text-sm sm:text-base text-ink/80">
                  Oddlyyy started with a simple belief: good work should do more than look good. It should make people feel something, remember something and do something.
                </p>
              </div>

              <p className="text-ink/80">
                So we bring design, technology and a healthy amount of curiosity together to make things that stand out for the right reasons.
              </p>

              <p className="text-ink/80">
                We&apos;re a small studio by choice. Close to the work, close to the people we work with, and always interested in finding a better way to make an idea happen.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Pull Quote & Studio Graphic Card */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Visual Interruption Pull Quote Card */}
            <div className="relative rounded-3xl p-8 sm:p-10 bg-ink text-cream border-2 border-ink shadow-ink-offset space-y-6 overflow-hidden">
              {/* Subtle Noise Texture Overlay */}
              <div
                className="absolute inset-0 bg-noise opacity-15 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold block">
                  CORE TENET
                </span>

                <blockquote className="font-primary font-bold text-2xl sm:text-3xl text-cream tracking-tight leading-snug">
                  &ldquo;GOOD IDEAS DON&apos;T ALWAYS FOLLOW THE BRIEF. SOMETIMES THEY MAKE A BETTER ONE.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-cream/15 flex items-center justify-between text-xs font-mono text-cream/70">
                  <span>ODDLYYY MANIFESTO</span>
                  <span className="text-terracotta font-bold">RULE #01</span>
                </div>
              </div>
            </div>

            {/* Abstract Graphic Diagram Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-mint/50 border-2 border-ink/15 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-ink/15">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 font-semibold">
                  STUDIO ARCHITECTURE
                </span>
                <span className="w-2 h-2 rounded-full bg-mint-dark" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-cream border border-ink/10 space-y-1">
                  <span className="text-terracotta font-bold block">01 / TEAM</span>
                  <span className="text-ink/80 block">Small by choice</span>
                </div>
                <div className="p-3 rounded-xl bg-cream border border-ink/10 space-y-1">
                  <span className="text-terracotta font-bold block">02 / ACCESS</span>
                  <span className="text-ink/80 block">Direct with makers</span>
                </div>
                <div className="p-3 rounded-xl bg-cream border border-ink/10 space-y-1">
                  <span className="text-terracotta font-bold block">03 / FOCUS</span>
                  <span className="text-ink/80 block">Deep craftsmanship</span>
                </div>
                <div className="p-3 rounded-xl bg-cream border border-ink/10 space-y-1">
                  <span className="text-terracotta font-bold block">04 / OUTPUT</span>
                  <span className="text-ink/80 block">Cultural distinction</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-accent text-terracotta">
                <span>no account managers in the middle →</span>
                <span className="font-mono text-[10px] text-ink/40">100% DIRECT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

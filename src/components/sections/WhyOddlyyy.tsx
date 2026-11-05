"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Lightbulb,
  Target,
  Layers2,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";
import { whyPillars } from "@/content/whyOddlyyy";

export const WhyOddlyyy: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const icons = [Lightbulb, Target, Layers2, Users, TrendingUp];

  return (
    <SectionContainer
      id="why-oddlyyy"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[0.98]">
            Why fit in when you can{" "}
            <span className="text-terracotta italic font-normal">
              stand out?
            </span>
          </h2>
        </div>

        <HandwrittenNote direction="right" color="terracotta">
          built for real results
        </HandwrittenNote>
      </div>

      {/* Dynamic Bento Layout (Non-Repetitive Composition) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        {/* Bento Item 1: Creative Thinking (Span 6) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-lavender border-2 border-ink/15 flex flex-col justify-between transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-ink/15 mb-6">
              <span className="font-mono text-xs text-terracotta font-medium uppercase tracking-wider">
                [{whyPillars[0].index}] &bull; {whyPillars[0].badge}
              </span>
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-lavender" />
              </div>
            </div>

            <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              {whyPillars[0].title}
            </h3>
            <p className="font-secondary text-sm text-ink/75 font-normal italic mb-3">
              {whyPillars[0].tagline}
            </p>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
              {whyPillars[0].description}
            </p>
          </div>

          <div className="pt-6 border-t border-ink/15 mt-8 flex items-center justify-between text-xs font-mono text-ink/60">
            <span>Distinctive typography &amp; visual wit</span>
            <span className="font-accent text-terracotta text-base">
              {whyPillars[0].annotation}
            </span>
          </div>
        </motion.div>

        {/* Bento Item 2: Strategy-Led Execution (Span 6) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-mint border-2 border-ink/15 flex flex-col justify-between transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-ink/15 mb-6">
              <span className="font-mono text-xs text-terracotta font-medium uppercase tracking-wider">
                [{whyPillars[1].index}] &bull; {whyPillars[1].badge}
              </span>
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
                <Target className="w-5 h-5 text-mint" />
              </div>
            </div>

            <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              {whyPillars[1].title}
            </h3>
            <p className="font-secondary text-sm text-ink/75 font-normal italic mb-3">
              {whyPillars[1].tagline}
            </p>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
              {whyPillars[1].description}
            </p>
          </div>

          <div className="pt-6 border-t border-ink/15 mt-8 flex items-center justify-between text-xs font-mono text-ink/60">
            <span>Commercial positioning &amp; conversion</span>
            <span className="font-accent text-terracotta text-base">
              {whyPillars[1].annotation}
            </span>
          </div>
        </motion.div>

        {/* Bento Item 3: Design & Development Under One Roof (Full Width Span 12 Feature) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-12 p-6 sm:p-8 md:p-12 rounded-3xl bg-cream/90 border-2 border-ink/20 transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-terracotta font-medium uppercase tracking-wider">
                  [{whyPillars[2].index}] &bull; {whyPillars[2].badge}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-terracotta text-cream font-medium">
                  Zero Hand-Off Friction
                </span>
              </div>

              <h3 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                {whyPillars[2].title}
              </h3>
              <p className="font-secondary text-base text-ink/80 font-normal italic">
                {whyPillars[2].tagline}
              </p>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
                {whyPillars[2].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-ink/80">
                  <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Next.js 15 &bull; React 19 Native</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink/80">
                  <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Framer Motion &bull; Kinetic Micro-physics</span>
                </div>
              </div>
            </div>

            {/* Visual Code & Design Token Showcase */}
            <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-ink text-cream border border-ink space-y-3 font-mono text-xs shadow-inner overflow-x-auto">
              <div className="flex items-center justify-between pb-3 border-b border-cream/15 text-cream/50 text-[10px] sm:text-[11px]">
                <span>oddlyyy-engine.tsx</span>
                <span className="text-terracotta">TypeScript Strict</span>
              </div>
              <div className="space-y-1 text-cream/80 text-[10px] sm:text-[11px] leading-relaxed break-all sm:break-normal">
                <div><span className="text-lavender">const</span> <span className="text-mint">experience</span> = {"{"}</div>
                <div className="pl-4">framework: <span className="text-cream">&quot;Next.js 15 App Router&quot;</span>,</div>
                <div className="pl-4">designTokens: <span className="text-terracotta">&quot;Warm Cream + Odd Ink&quot;</span>,</div>
                <div className="pl-4">conventionRisk: <span className="text-lavender">0</span>,</div>
                <div className="pl-4">bespokeQuality: <span className="text-mint">&quot;100% Uncompromised&quot;</span></div>
                <div>{"};"}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Item 4: Flexible Collaboration (Span 6) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-mint/60 border-2 border-ink/15 flex flex-col justify-between transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-ink/15 mb-6">
              <span className="font-mono text-xs text-terracotta font-medium uppercase tracking-wider">
                [{whyPillars[3].index}] &bull; {whyPillars[3].badge}
              </span>
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center">
                <Users className="w-5 h-5 text-mint" />
              </div>
            </div>

            <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              {whyPillars[3].title}
            </h3>
            <p className="font-secondary text-sm text-ink/75 font-normal italic mb-3">
              {whyPillars[3].tagline}
            </p>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
              {whyPillars[3].description}
            </p>
          </div>

          <div className="pt-6 border-t border-ink/15 mt-8 flex items-center justify-between text-xs font-mono text-ink/60">
            <span>Direct sprints &bull; Zero middleman</span>
            <span className="font-accent text-terracotta text-base">
              {whyPillars[3].annotation}
            </span>
          </div>
        </motion.div>

        {/* Bento Item 5: Solutions Built Around Actual Business Needs (Span 6 - Odd Ink Dark Card) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-ink text-cream border-2 border-ink flex flex-col justify-between transition-all duration-300 hover:shadow-terracotta-offset hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-cream/15 mb-6">
              <span className="font-mono text-xs text-lavender font-medium uppercase tracking-wider">
                [{whyPillars[4].index}] &bull; {whyPillars[4].badge}
              </span>
              <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cream" />
              </div>
            </div>

            <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-cream tracking-tight mb-2">
              {whyPillars[4].title}
            </h3>
            <p className="font-secondary text-sm text-cream/70 font-normal italic mb-3">
              {whyPillars[4].tagline}
            </p>
            <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-primary">
              {whyPillars[4].description}
            </p>
          </div>

          <div className="pt-6 border-t border-cream/15 mt-8 flex items-center justify-between text-xs font-mono text-cream/60">
            <span>Targeted ROI &bull; Custom Architecture</span>
            <span className="font-accent text-lavender text-base">
              {whyPillars[4].annotation}
            </span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};


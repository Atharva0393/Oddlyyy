"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

interface ThreeYCardProps {
  letter: string;
  question: string;
  tagline: string;
  description: string;
  secondaryReveal: string;
  accentColor: string;
  bgClass: string;
  diagramType: "concentric" | "cross" | "grid";
  index: string;
}

const ThreeYCompositionCard: React.FC<ThreeYCardProps> = ({
  letter,
  question,
  tagline,
  description,
  secondaryReveal,
  accentColor,
  bgClass,
  diagramType,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative rounded-3xl p-8 sm:p-10 border-2 border-ink/15 flex flex-col justify-between transition-shadow duration-300 hover:shadow-ink-offset hover:border-ink cursor-pointer ${bgClass}`}
    >
      {/* Top Header Information & Visual Diagram Icon */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-ink/15">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-ink text-cream">
              {letter}
            </span>
            <span className="font-mono text-xs text-ink/50 uppercase tracking-wider">
              {index}
            </span>
          </div>

          {/* Minimalist Graphic Diagram */}
          <div className="w-8 h-8 flex items-center justify-center">
            {diagramType === "concentric" && (
              <div className="relative w-7 h-7 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-terracotta" />
                <span className="w-3.5 h-3.5 rounded-full border border-terracotta/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              </div>
            )}
            {diagramType === "cross" && (
              <div className="relative w-6 h-6 flex items-center justify-center text-ink font-mono font-bold text-lg group-hover:rotate-45 transition-transform duration-300">
                ✦
              </div>
            )}
            {diagramType === "grid" && (
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <span className="w-2 h-2 rounded-sm bg-terracotta" />
                <span className="w-2 h-2 rounded-sm bg-ink/20 group-hover:bg-ink transition-colors" />
                <span className="w-2 h-2 rounded-sm bg-ink/20 group-hover:bg-ink transition-colors" />
                <span className="w-2 h-2 rounded-sm bg-terracotta" />
              </div>
            )}
          </div>
        </div>

        {/* Large Typography Moment */}
        <div className="space-y-2">
          <h3 className="font-primary font-bold text-4xl sm:text-5xl text-ink tracking-tight leading-none">
            {question}
          </h3>
          <p className="font-mono text-xs text-terracotta uppercase font-bold tracking-wider">
            {tagline}
          </p>
        </div>

        {/* Core Description */}
        <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
          {description}
        </p>
      </div>

      {/* Interactive Secondary Statement Reveal */}
      <div className="pt-6 border-t border-ink/15 mt-8 space-y-3">
        <div
          className={`p-3.5 rounded-2xl bg-cream/80 border border-ink/10 text-xs sm:text-sm font-primary leading-relaxed text-ink transition-all duration-300 ${
            isHovered ? "border-terracotta shadow-sm bg-cream" : "opacity-90"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-terracotta font-bold">
              {isHovered ? "INSIGHT REVEALED" : "TAP / HOVER TO INSPECT"}
            </span>
          </div>
          <p className="italic text-ink/90 font-medium">
            &ldquo;{secondaryReveal}&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-ink/50 pt-1">
          <span>PHILOSOPHY // 0{index}</span>
          <span className="text-terracotta font-bold group-hover:translate-x-1 transition-transform">
            EXPLORE →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutThreeYs: React.FC = () => {
  return (
    <SectionContainer
      id="about-three-ys"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="space-y-14 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/15">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              02 / THE ODDLYYY PHILOSOPHY
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
              Three little letters.{" "}
              <span className="text-terracotta font-normal italic">
                Three big questions.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              One very stubborn belief: there is always a more interesting way.
            </p>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            our operating DNA
          </HandwrittenNote>
        </div>

        {/* 3 Individual Art-Directed Composition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ThreeYCompositionCard
            index="01"
            letter="Y¹"
            question="WHY."
            tagline="Question the ordinary."
            description="We question the obvious, challenge familiar patterns and look beyond the first answer. Because the best ideas rarely begin with doing what everyone else is doing."
            secondaryReveal="The first idea is usually just a reflex. The genuine breakthrough is three questions deeper."
            accentColor="#A04C34"
            bgClass="bg-[#FFF9F4]"
            diagramType="concentric"
          />

          <ThreeYCompositionCard
            index="02"
            letter="Y²"
            question="WHY NOT."
            tagline="Challenge the expected."
            description="We experiment, explore and connect ideas that don't usually sit together. Different isn't the goal by itself. Making something genuinely more interesting is."
            secondaryReveal="Consensus creates commodities. Unconventional connections create cult brands."
            accentColor="#E4E0FC"
            bgClass="bg-lavender"
            diagramType="cross"
          />

          <ThreeYCompositionCard
            index="03"
            letter="Y³"
            question="WHY SETTLE."
            tagline="Make it matter."
            description="We care about the details, the experience and the outcome. Good looks are only the beginning. What matters is what the work actually does."
            secondaryReveal="Pixel-perfection without commercial velocity is mere vanity. We build for both."
            accentColor="#E4F0E8"
            bgClass="bg-mint"
            diagramType="grid"
          />
        </div>
      </div>
    </SectionContainer>
  );
};


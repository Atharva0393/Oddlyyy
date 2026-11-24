"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperBadge } from "@/components/ui/notebook";
import { cn } from "@/lib/utils";

interface HeroPersonalityBadge {
  id: string;
  label: string;
  popupNote: string;
  color: "mint" | "yellow" | "pink" | "blue" | "lavender" | "paper";
  rotate: number;
  desktopWrapperClass: string;
  hasArrow?: "up-right" | "up-left";
  popDirection?: "up" | "down";
  popAlign?: "left" | "right" | "center";
}

const leftPersonalityBadges: HeroPersonalityBadge[] = [
  {
    id: "curious",
    label: "CURIOUS BY DEFAULT",
    popupNote: "we ask why 3x deeper 🔍",
    color: "mint",
    rotate: -5,
    desktopWrapperClass: "self-start -translate-x-2 lg:-translate-x-4 xl:-translate-x-8 -mt-4 lg:-mt-6",
    popDirection: "down",
    popAlign: "left",
  },
  {
    id: "crafted",
    label: "OBSESSIVELY CRAFTED",
    popupNote: "the 1px difference matters ✨",
    color: "pink",
    rotate: 3.5,
    desktopWrapperClass: "self-start -translate-x-6 lg:-translate-x-10 xl:-translate-x-14 my-1",
    popDirection: "up",
    popAlign: "left",
  },
  {
    id: "odd",
    label: "DELIGHTFULLY ODD",
    popupNote: "normal is boring anyway ✌️",
    color: "blue",
    rotate: -3,
    desktopWrapperClass: "self-end translate-x-1 lg:translate-x-3 xl:translate-x-6 -mb-4 lg:-mb-6",
    hasArrow: "up-right",
    popDirection: "up",
    popAlign: "center",
  },
];

const rightPersonalityBadges: HeroPersonalityBadge[] = [
  {
    id: "taste",
    label: "TASTE + RIGOR",
    popupNote: "bold design + solid code ⚡",
    color: "yellow",
    rotate: 4.5,
    desktopWrapperClass: "self-end translate-x-2 lg:translate-x-4 xl:translate-x-8 -mt-4 lg:-mt-6",
    popDirection: "down",
    popAlign: "right",
  },
  {
    id: "quirky",
    label: "THOUGHTFULLY QUIRKY",
    popupNote: "personality with purpose ✳️",
    color: "lavender",
    rotate: -4,
    desktopWrapperClass: "self-end translate-x-6 lg:translate-x-10 xl:translate-x-14 my-1",
    popDirection: "up",
    popAlign: "right",
  },
  {
    id: "honest",
    label: "HONEST CRAFT",
    popupNote: "direct makers, zero fluff 🛠️",
    color: "mint",
    rotate: 3,
    desktopWrapperClass: "self-start -translate-x-1 lg:-translate-x-3 xl:-translate-x-6 -mb-4 lg:-mb-6",
    hasArrow: "up-left",
    popDirection: "up",
    popAlign: "center",
  },
];

const allMobileBadges = [...leftPersonalityBadges, ...rightPersonalityBadges];

/**
 * Interactive personality badge with playful pop-up on hover/tap
 * Purely visual and interactive: non-navigational
 */
const InteractiveBadge: React.FC<{
  badge: HeroPersonalityBadge;
  className?: string;
}> = ({ badge, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative inline-flex items-center gap-1.5 group select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label={`${badge.label}: ${badge.popupNote}`}
    >
      {badge.hasArrow === "up-left" && (
        <span className="font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          ↖
        </span>
      )}

      <div className="inline-block transition-transform duration-200 cursor-default group-hover:scale-105 active:scale-95">
        <PaperBadge
          color={badge.color}
          rotate={badge.rotate}
          className="text-xs lg:text-[13px] px-3 lg:px-3.5 py-1 lg:py-1.5 tracking-wider font-semibold transition-all duration-200 group-hover:shadow-[3.5px_3.5px_0px_#222126]"
        >
          {badge.label}
        </PaperBadge>
      </div>

      {badge.hasArrow === "up-right" && (
        <span className="font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          ↗
        </span>
      )}

      {/* Playful Pop-up Animation on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: badge.popDirection === "down" ? -6 : 6,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: badge.popDirection === "down" ? -4 : 4,
            }}
            transition={{ type: "spring", damping: 16, stiffness: 320 }}
            className={cn(
              "absolute z-40 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold border border-[#222126] shadow-[2.5px_2.5px_0px_#222126] bg-[#FFF8D6] text-[#222126]",
              badge.popDirection === "down" ? "top-full mt-2" : "bottom-full mb-2",
              badge.popAlign === "left"
                ? "left-0"
                : badge.popAlign === "right"
                ? "right-0"
                : "left-1/2 -translate-x-1/2"
            )}
          >
            <span>{badge.popupNote}</span>
            {/* Little notch arrow pointing to badge */}
            <div
              className={cn(
                "absolute w-2 h-2 bg-[#FFF8D6] rotate-45",
                badge.popDirection === "down"
                  ? "-top-1 border-t border-l border-[#222126]"
                  : "-bottom-1 border-b border-r border-[#222126]",
                badge.popAlign === "left"
                  ? "left-4"
                  : badge.popAlign === "right"
                  ? "right-4"
                  : "left-1/2 -translate-x-1/2"
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const NotebookHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 overflow-hidden border-b border-[#222126]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full my-auto">
        {/* MOBILE / TABLET: Interactive creative personality badge cluster above headline */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 max-w-[340px] sm:max-w-md mx-auto">
          {allMobileBadges.map((badge) => (
            <InteractiveBadge key={badge.id} badge={badge} />
          ))}
        </div>

        {/* 1. TOP HANDWRITTEN ANNOTATION */}
        <div className="mb-3 sm:mb-4">
          <span className="font-accent text-terracotta text-lg sm:text-xl md:text-2xl select-none -rotate-1 inline-flex items-center gap-1.5">
            <span>good things happen here</span>
            <span className="text-xl sm:text-2xl leading-none">↘</span>
          </span>
        </div>

        {/* 2. MAIN CENTER HERO COMPOSITION WITH FLANKING CREATIVE PERSONALITY BADGES */}
        <div className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto flex items-center justify-center mb-4 sm:mb-6">
          {/* LEFT FLANK: Creative personality badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-2 gap-8 lg:gap-10 xl:gap-14 shrink-0 w-48 lg:w-56 xl:w-72 select-none z-20">
            {leftPersonalityBadges.map((badge) => (
              <div
                key={badge.id}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <InteractiveBadge badge={badge} />
              </div>
            ))}
          </div>

          {/* CENTER HEADLINE: Bold Berthold x Expressive Recoleta Typography */}
          <div className="flex-1 max-w-3xl xl:max-w-4xl px-2 sm:px-4 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.75rem] 2xl:text-[7.75rem] text-[#222126] leading-[0.9] sm:leading-[0.88] tracking-tight uppercase select-none">
              <span className="font-primary font-black block whitespace-nowrap">GOOD IDEAS</span>
              <span className="relative inline-block font-recoleta italic font-normal text-terracotta mt-1 sm:mt-2 whitespace-nowrap">
                DON&apos;T SIT STILL.
                {/* Hand-drawn marker yellow underline stroke */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#FFD84D] pointer-events-none overflow-visible"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 10 Q 100 3, 200 8 T 396 7"
                    stroke="currentColor"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* RIGHT FLANK: Creative personality badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-2 gap-8 lg:gap-10 xl:gap-14 shrink-0 w-48 lg:w-56 xl:w-72 select-none z-20">
            {rightPersonalityBadges.map((badge) => (
              <div
                key={badge.id}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <InteractiveBadge badge={badge} />
              </div>
            ))}
          </div>
        </div>

        {/* 3. SMALL EDITORIAL ANNOTATION BELOW HEADLINE */}
        <div className="mb-4 sm:mb-5">
          <span className="font-accent text-base sm:text-lg md:text-xl text-[#222126]/60 select-none inline-flex items-center gap-1.5">
            <span>a little different, on purpose</span>
            <span className="text-base sm:text-lg leading-none">→</span>
          </span>
        </div>

        {/* 4. DESCRIPTION: Centered, readable, comfortable line-height */}
        <p className="font-primary text-base sm:text-lg lg:text-[19px] text-[#222126]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-6 sm:mb-8 text-center">
          We&apos;re Oddlyyy. A creative studio building distinctive brands,
          digital experiences and clever little things that refuse to blend in.
        </p>

        {/* 5. CTA BUTTON: Perfectly center-aligned */}
        <div className="flex items-center justify-center w-full">
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2.5 h-12 sm:h-13 px-8 sm:px-10 bg-[#222126] text-[#F7F6F0] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-[#222126] shadow-[3.5px_3.5px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[5.5px_5.5px_0px_#FFD84D] active:translate-y-0 transition-all select-none"
          >
            <span>SEE WHAT WE COOK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

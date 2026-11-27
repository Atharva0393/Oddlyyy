"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

type MobileStickerBadge = Omit<HeroPersonalityBadge, "desktopWrapperClass">;

const leftPersonalityBadges: HeroPersonalityBadge[] = [
  {
    id: "curious",
    label: "CURIOUS BY DEFAULT",
    popupNote: "we ask why 3x deeper 🔍",
    color: "mint",
    rotate: -5,
    desktopWrapperClass: "self-start translate-x-1 lg:translate-x-2 -mt-2 lg:-mt-4",
    popDirection: "down",
    popAlign: "left",
  },
  {
    id: "crafted",
    label: "OBSESSIVELY CRAFTED",
    popupNote: "the 1px difference matters ✨",
    color: "pink",
    rotate: 3.5,
    desktopWrapperClass: "self-start translate-x-0 lg:translate-x-1 my-1",
    popDirection: "up",
    popAlign: "left",
  },
  {
    id: "odd",
    label: "DELIGHTFULLY ODD",
    popupNote: "normal is boring anyway ✌️",
    color: "blue",
    rotate: -3,
    desktopWrapperClass: "self-end -translate-x-1 lg:-translate-x-2 -mb-2 lg:-mb-4",
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
    desktopWrapperClass: "self-end -translate-x-1 lg:-translate-x-2 -mt-2 lg:-mt-4",
    popDirection: "down",
    popAlign: "right",
  },
  {
    id: "quirky",
    label: "THOUGHTFULLY QUIRKY",
    popupNote: "personality with purpose ✳️",
    color: "lavender",
    rotate: -4,
    desktopWrapperClass: "self-end translate-x-0 lg:-translate-x-1 my-1",
    popDirection: "up",
    popAlign: "right",
  },
  {
    id: "honest",
    label: "HONEST CRAFT",
    popupNote: "direct makers, zero fluff 🛠️",
    color: "mint",
    rotate: 3,
    desktopWrapperClass: "self-start translate-x-1 lg:translate-x-2 -mb-2 lg:-mb-4",
    hasArrow: "up-left",
    popDirection: "up",
    popAlign: "center",
  },
];

/**
 * Mobile 2-column staggered layout:
 * Row 1: Curious by Default | Obsessively Crafted
 * Row 2: Delightfully Odd | Taste + Rigor
 * Row 3: Thoughtfully Quirky | Honest Craft
 */
const mobileStickerRows: MobileStickerBadge[][] = [
  // Row 1: Curious by Default | Obsessively Crafted
  [
    {
      id: "curious",
      label: "CURIOUS BY DEFAULT",
      popupNote: "we ask why 3x deeper 🔍",
      color: "mint",
      rotate: -2.5,
      popDirection: "down",
      popAlign: "center",
    },
    {
      id: "crafted",
      label: "OBSESSIVELY CRAFTED",
      popupNote: "the 1px difference matters ✨",
      color: "pink",
      rotate: 2,
      popDirection: "down",
      popAlign: "center",
    },
  ],
  // Row 2: Delightfully Odd | Taste + Rigor
  [
    {
      id: "odd",
      label: "DELIGHTFULLY ODD",
      popupNote: "normal is boring anyway ✌️",
      color: "blue",
      rotate: -1.5,
      popDirection: "down",
      popAlign: "center",
    },
    {
      id: "taste",
      label: "TASTE + RIGOR",
      popupNote: "bold design + solid code ⚡",
      color: "yellow",
      rotate: 2.5,
      popDirection: "down",
      popAlign: "center",
    },
  ],
  // Row 3: Thoughtfully Quirky | Honest Craft
  [
    {
      id: "quirky",
      label: "THOUGHTFULLY QUIRKY",
      popupNote: "personality with purpose ✳️",
      color: "lavender",
      rotate: -2,
      popDirection: "up",
      popAlign: "center",
    },
    {
      id: "honest",
      label: "HONEST CRAFT",
      popupNote: "direct makers, zero fluff 🛠️",
      color: "mint",
      rotate: 1.8,
      popDirection: "up",
      popAlign: "center",
    },
  ],
];

/**
 * Interactive personality badge with playful pop-up on hover/tap
 * Purely visual and interactive: non-navigational
 */
const InteractiveBadge: React.FC<{
  badge: HeroPersonalityBadge | MobileStickerBadge;
  className?: string;
  isMobile?: boolean;
}> = ({ badge, className, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
      {!isMobile && badge.hasArrow === "up-left" && (
        <span className="hidden lg:inline font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          ↖&#xFE0E;
        </span>
      )}

      <div className="inline-block transition-transform duration-200 cursor-default group-hover:scale-105 active:scale-95">
        <PaperBadge
          color={badge.color}
          rotate={badge.rotate}
          className={cn(
            "tracking-wider font-semibold transition-all duration-200 group-hover:shadow-[3.5px_3.5px_0px_#222126]",
            isMobile
              ? "text-[10px] min-[360px]:text-[11px] xs:text-xs px-2 min-[360px]:px-2.5 xs:px-3 py-1 shadow-[2px_2px_0px_#222126]"
              : "text-xs lg:text-[13px] px-3 lg:px-3.5 py-1 lg:py-1.5"
          )}
        >
          {badge.label}
        </PaperBadge>
      </div>

      {!isMobile && badge.hasArrow === "up-right" && (
        <span className="hidden lg:inline font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          ↗&#xFE0E;
        </span>
      )}

      {/* Playful Pop-up Animation on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.8,
              y: shouldReduceMotion ? 0 : (badge.popDirection === "down" ? -6 : 6),
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.85,
              y: shouldReduceMotion ? 0 : (badge.popDirection === "down" ? -4 : 4),
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0.12 }
                : { type: "spring", damping: 16, stiffness: 320 }
            }
            className={cn(
              "absolute z-40 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold border border-[#222126] shadow-[2.5px_2.5px_0px_#222126] bg-[#FFF8D6] text-[#222126]",
              badge.popDirection === "down" ? "top-full mt-2" : "bottom-full mb-2",
              badge.popAlign === "left"
                ? "left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"
                : badge.popAlign === "right"
                ? "left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0"
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
                  ? "left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0"
                  : badge.popAlign === "right"
                  ? "left-1/2 -translate-x-1/2 lg:left-auto lg:right-4 lg:translate-x-0"
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
    <section className="relative min-h-[calc(100svh-4rem)] flex flex-col justify-start sm:justify-center pt-6 xs:pt-8 sm:py-8 lg:py-10 pb-12 sm:pb-16 overflow-hidden border-b border-[#222126]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full my-0 sm:my-auto">
        {/* MOBILE / TABLET: Interactive creative personality badges in balanced, staggered 2-column rows */}
        <div className="flex lg:hidden flex-col items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md mx-auto mb-5 xs:mb-6 sm:mb-8 px-2 select-none">
          {mobileStickerRows.map((row, rIdx) => (
            <div
              key={rIdx}
              className={cn(
                "flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3.5 w-full",
                // Subtle organic horizontal stagger per row:
                rIdx === 0 && "justify-center",
                rIdx === 1 && "justify-center -translate-x-1 xs:-translate-x-1.5",
                rIdx === 2 && "justify-center translate-x-1 xs:translate-x-1.5"
              )}
            >
              {row.map((badge) => (
                <div key={badge.id} className="shrink-0 transition-transform duration-200">
                  <InteractiveBadge badge={badge} isMobile />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 1. TOP HANDWRITTEN ANNOTATION */}
        <div className="mb-2.5 xs:mb-3 sm:mb-4">
          <span className="font-accent text-terracotta text-base xs:text-lg sm:text-xl md:text-2xl select-none -rotate-1 inline-flex items-center gap-1.5">
            <span>good things happen here</span>
            <span className="text-base xs:text-lg sm:text-xl md:text-2xl leading-none font-accent">&#x2198;&#xFE0E;</span>
          </span>
        </div>

        {/* 2. MAIN CENTER HERO COMPOSITION WITH FLANKING CREATIVE PERSONALITY BADGES */}
        <div className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto flex items-center justify-between lg:justify-center mb-3.5 xs:mb-4 sm:mb-6">
          {/* LEFT FLANK: Creative personality badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-2 gap-6 lg:gap-8 xl:gap-10 shrink-0 w-44 lg:w-48 xl:w-56 select-none z-20">
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
          <div className="flex-1 max-w-2xl xl:max-w-4xl px-2 sm:px-4 text-center">
            <h1 className="text-[clamp(2.15rem,9.2vw,3.75rem)] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.75rem] 2xl:text-[7.75rem] text-[#222126] leading-[0.92] sm:leading-[0.88] tracking-tight uppercase select-none">
              <span className="font-primary font-black block sm:whitespace-nowrap">GOOD IDEAS</span>
              <span className="relative inline-block font-recoleta italic font-normal text-terracotta mt-1 sm:mt-2 sm:whitespace-nowrap max-w-full">
                DON&apos;T SIT STILL.
                {/* Hand-drawn marker yellow underline stroke */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-2.5 xs:h-3 sm:h-4 text-[#FFD84D] pointer-events-none overflow-visible"
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
          <div className="hidden lg:flex flex-col justify-between py-2 gap-6 lg:gap-8 xl:gap-10 shrink-0 w-44 lg:w-48 xl:w-56 select-none z-20">
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
        <div className="mb-4 xs:mb-5 sm:mb-6">
          <span className="font-accent text-sm xs:text-base sm:text-lg md:text-xl text-[#222126]/60 select-none inline-flex items-center gap-1.5">
            <span>a little different, on purpose</span>
            <span className="text-sm xs:text-base sm:text-lg leading-none font-accent">&#x2192;&#xFE0E;</span>
          </span>
        </div>

        {/* 4. DESCRIPTION: Centered, readable, comfortable line-height */}
        <p className="font-primary text-[14px] xs:text-[15px] sm:text-base lg:text-[19px] text-[#222126]/85 max-w-[320px] xs:max-w-md sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed xs:leading-[1.65] font-normal mb-6 xs:mb-7 sm:mb-8 text-center px-2">
          We&apos;re Oddlyyy. A creative studio building distinctive brands,
          digital experiences and clever little things that refuse to blend in.
        </p>

        {/* 5. CTA BUTTON: Perfectly center-aligned */}
        <div className="flex items-center justify-center w-full">
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 h-11 xs:h-12 sm:h-13 px-7 xs:px-8 sm:px-10 bg-[#222126] text-[#F7F6F0] font-bold text-xs xs:text-[13px] sm:text-sm uppercase tracking-wider rounded-lg border border-[#222126] shadow-[3px_3px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#FFD84D] active:translate-y-0 transition-all select-none"
          >
            <span>SEE WHAT WE COOK</span>
            <ArrowUpRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

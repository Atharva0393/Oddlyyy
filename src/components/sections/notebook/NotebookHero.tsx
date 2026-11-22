"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PaperBadge } from "@/components/ui/notebook";

interface HeroServiceBadge {
  label: string;
  href: string;
  color: "mint" | "yellow" | "pink" | "blue" | "lavender" | "paper";
  rotate: number;
  desktopWrapperClass: string;
  hasArrow?: "up-right" | "up-left";
}

const leftServiceBadges: HeroServiceBadge[] = [
  {
    label: "WEB & DIGITAL",
    href: "/services/digital-platforms",
    color: "mint",
    rotate: -4.5,
    desktopWrapperClass: "self-end translate-x-3 xl:translate-x-6 -mt-2",
  },
  {
    label: "AI AUTOMATION",
    href: "/services/ai-automation",
    color: "pink",
    rotate: 3,
    desktopWrapperClass: "self-start -translate-x-4 xl:-translate-x-7 my-2",
  },
  {
    label: "APP DEVELOPMENT",
    href: "/services/mobile-app-development",
    color: "blue",
    rotate: -3,
    desktopWrapperClass: "self-end translate-x-1 xl:translate-x-4 -mb-1",
    hasArrow: "up-right",
  },
];

const rightServiceBadges: HeroServiceBadge[] = [
  {
    label: "BRAND SYSTEMS",
    href: "/services/brand-identity",
    color: "yellow",
    rotate: 4,
    desktopWrapperClass: "self-start -translate-x-3 xl:-translate-x-6 -mt-2",
  },
  {
    label: "BUSINESS SYSTEMS",
    href: "/services/business-systems",
    color: "lavender",
    rotate: -3.5,
    desktopWrapperClass: "self-end translate-x-5 xl:translate-x-8 my-2",
  },
  {
    label: "MARKETING & CONTENT",
    href: "/services/content-campaigns",
    color: "mint",
    rotate: 2.5,
    desktopWrapperClass: "self-start -translate-x-1 xl:-translate-x-3 -mb-1",
    hasArrow: "up-left",
  },
];

const allMobileBadges = [...leftServiceBadges, ...rightServiceBadges];

export const NotebookHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex flex-col justify-center py-4 sm:py-6 lg:py-8 overflow-hidden border-b border-[#222126]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full my-auto">
        {/* MOBILE / TABLET: Randomly scattered service badge cluster above headline */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 max-w-[300px] sm:max-w-md mx-auto">
          {allMobileBadges.map((badge) => (
            <Link
              key={badge.label}
              href={badge.href}
              className="transition-transform hover:scale-105 active:scale-95 inline-block"
            >
              <PaperBadge
                color={badge.color}
                rotate={badge.rotate}
                className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 tracking-wider"
              >
                {badge.label}
              </PaperBadge>
            </Link>
          ))}
        </div>

        {/* 1. TOP HANDWRITTEN ANNOTATION */}
        <div className="mb-2 sm:mb-3">
          <span className="font-accent text-terracotta text-base sm:text-lg md:text-xl select-none -rotate-1 inline-flex items-center gap-1.5">
            <span>good things happen here</span>
            <span className="text-lg sm:text-xl leading-none">↘</span>
          </span>
        </div>

        {/* 2. MAIN CENTER HERO COMPOSITION WITH FLANKING SERVICE BUTTONS */}
        <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-center mb-3 sm:mb-4">
          {/* LEFT FLANK: Randomly arranged service badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-1 gap-3.5 xl:gap-5 shrink-0 w-40 xl:w-52 select-none z-20">
            {leftServiceBadges.map((badge) => (
              <div
                key={badge.label}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <div className="relative inline-flex items-center gap-1 group">
                  <Link
                    href={badge.href}
                    className="inline-block transition-transform duration-200 group-hover:scale-105 group-hover:rotate-0 active:scale-95"
                  >
                    <PaperBadge
                      color={badge.color}
                      rotate={badge.rotate}
                      className="text-xs xl:text-xs px-2.5 py-1 tracking-wider"
                    >
                      {badge.label}
                    </PaperBadge>
                  </Link>
                  {badge.hasArrow === "up-right" && (
                    <span className="font-accent text-terracotta text-xs md:text-sm font-bold select-none opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER HEADLINE: Bold Condensed Display Typography */}
          <div className="flex-1 max-w-3xl xl:max-w-4xl px-2 sm:px-4 text-center">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[6.25rem] 2xl:text-[7.5rem] text-[#222126] leading-[0.88] sm:leading-[0.86] tracking-tight uppercase select-none">
              <span className="block whitespace-nowrap">GOOD IDEAS</span>
              <span className="relative inline-block text-terracotta mt-1 sm:mt-1.5 whitespace-nowrap">
                DON&apos;T SIT STILL.
                {/* Hand-drawn marker yellow underline stroke */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-[#FFD84D] pointer-events-none overflow-visible"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 10 Q 100 3, 200 8 T 396 7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* RIGHT FLANK: Randomly arranged service badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-1 gap-3.5 xl:gap-5 shrink-0 w-40 xl:w-52 select-none z-20">
            {rightServiceBadges.map((badge) => (
              <div
                key={badge.label}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <div className="relative inline-flex items-center gap-1 group">
                  {badge.hasArrow === "up-left" && (
                    <span className="font-accent text-terracotta text-xs md:text-sm font-bold select-none opacity-80 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↖
                    </span>
                  )}
                  <Link
                    href={badge.href}
                    className="inline-block transition-transform duration-200 group-hover:scale-105 group-hover:rotate-0 active:scale-95"
                  >
                    <PaperBadge
                      color={badge.color}
                      rotate={badge.rotate}
                      className="text-xs xl:text-xs px-2.5 py-1 tracking-wider"
                    >
                      {badge.label}
                    </PaperBadge>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SMALL EDITORIAL ANNOTATION BELOW HEADLINE */}
        <div className="mb-3 sm:mb-4">
          <span className="font-accent text-sm sm:text-base text-[#222126]/60 select-none inline-flex items-center gap-1.5">
            <span>a little different, on purpose</span>
            <span className="text-sm sm:text-base leading-none">→</span>
          </span>
        </div>

        {/* 4. DESCRIPTION: Centered, readable, comfortable line-height */}
        <p className="font-primary text-sm sm:text-base lg:text-[17px] text-[#222126]/85 max-w-xl mx-auto leading-relaxed font-normal mb-5 sm:mb-6 text-center">
          We&apos;re Oddlyyy. A creative studio building distinctive brands,
          digital experiences and clever little things that refuse to blend in.
        </p>

        {/* 5. CTA BUTTON: Perfectly center-aligned */}
        <div className="flex items-center justify-center w-full">
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-7 sm:px-9 bg-[#222126] text-[#F7F6F0] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-[#222126] shadow-[3.5px_3.5px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FFD84D] active:translate-y-0 transition-all select-none"
          >
            <span>SEE WHAT WE MAKE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

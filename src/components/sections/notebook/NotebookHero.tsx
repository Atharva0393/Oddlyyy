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
    <section className="relative pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-[#222126]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* MOBILE / TABLET: Randomly scattered service badge cluster above headline */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-5 sm:mb-7 max-w-[300px] sm:max-w-md mx-auto">
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
        <div className="mb-4 sm:mb-6">
          <span className="font-accent text-terracotta text-lg sm:text-xl md:text-2xl select-none -rotate-1 inline-flex items-center gap-1.5">
            <span>good things happen here</span>
            <span className="text-xl sm:text-2xl leading-none">↘</span>
          </span>
        </div>

        {/* 2. MAIN CENTER HERO COMPOSITION WITH FLANKING SERVICE BUTTONS */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center mb-6 sm:mb-8">
          {/* LEFT FLANK: Randomly arranged service badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-2 gap-6 xl:gap-8 shrink-0 w-48 xl:w-60 select-none z-20">
            {leftServiceBadges.map((badge) => (
              <div
                key={badge.label}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <div className="relative inline-flex items-center gap-1.5 group">
                  <Link
                    href={badge.href}
                    className="inline-block transition-transform duration-200 group-hover:scale-105 group-hover:rotate-0 active:scale-95"
                  >
                    <PaperBadge color={badge.color} rotate={badge.rotate}>
                      {badge.label}
                    </PaperBadge>
                  </Link>
                  {badge.hasArrow === "up-right" && (
                    <span className="font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CENTER HEADLINE: Bold Condensed Display Typography */}
          <div className="flex-1 max-w-4xl px-2 sm:px-4 text-center">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl text-[#222126] leading-[0.88] sm:leading-[0.86] tracking-tight uppercase select-none">
              <span className="block">GOOD IDEAS</span>
              <span className="relative inline-block text-terracotta mt-1 sm:mt-2">
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

          {/* RIGHT FLANK: Randomly arranged service badges on desktop */}
          <div className="hidden lg:flex flex-col justify-between py-2 gap-6 xl:gap-8 shrink-0 w-48 xl:w-60 select-none z-20">
            {rightServiceBadges.map((badge) => (
              <div
                key={badge.label}
                className={`transition-all duration-200 ${badge.desktopWrapperClass}`}
              >
                <div className="relative inline-flex items-center gap-1.5 group">
                  {badge.hasArrow === "up-left" && (
                    <span className="font-accent text-terracotta text-sm md:text-base font-bold select-none opacity-80 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↖
                    </span>
                  )}
                  <Link
                    href={badge.href}
                    className="inline-block transition-transform duration-200 group-hover:scale-105 group-hover:rotate-0 active:scale-95"
                  >
                    <PaperBadge color={badge.color} rotate={badge.rotate}>
                      {badge.label}
                    </PaperBadge>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SMALL EDITORIAL ANNOTATION BELOW HEADLINE */}
        <div className="mb-6 sm:mb-8">
          <span className="font-accent text-base sm:text-lg md:text-xl text-[#222126]/60 select-none inline-flex items-center gap-1.5">
            <span>a little different, on purpose</span>
            <span className="text-lg leading-none">→</span>
          </span>
        </div>

        {/* 4. DESCRIPTION: Centered, readable, max-w-2xl */}
        <p className="font-primary text-base sm:text-lg md:text-xl lg:text-[21px] text-[#222126]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10 text-center">
          We&apos;re Oddlyyy. A creative studio building distinctive brands,
          digital experiences and clever little things that refuse to blend in.
        </p>

        {/* 5. CTA BUTTONS & SIDE ANNOTATION */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-7 sm:px-8 bg-[#222126] text-[#F7F6F0] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-[#222126] shadow-[3.5px_3.5px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#FFD84D] active:translate-y-0 transition-all select-none w-full sm:w-auto"
            >
              <span>SEE WHAT WE MAKE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-7 sm:px-8 bg-[#FFD84D] text-[#222126] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-[#222126] shadow-[3.5px_3.5px_0px_#222126] hover:-translate-y-0.5 active:translate-y-0 transition-all select-none w-full sm:w-auto"
            >
              <span>LET&apos;S TALK</span>
              <span className="text-xs">✦</span>
            </Link>
          </div>

          {/* Side Handwritten Annotation */}
          <div className="pt-2 sm:pt-0 sm:pl-2 select-none">
            <span className="font-accent text-terracotta text-base sm:text-lg inline-flex items-center gap-1 -rotate-2">
              <span>no boring stuff</span>
              <span className="text-base leading-none">←</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

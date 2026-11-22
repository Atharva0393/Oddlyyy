"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PaperBadge } from "@/components/ui/notebook";

export const NotebookHero: React.FC = () => {
  return (
    <section className="relative pt-14 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-[#222126]/12">
      {/* Background ruled paper lines inherited from body; container maintains centered editorial canvas */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* 1. TOP CATEGORY LABELS: Horizontally centered as a group */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <PaperBadge color="mint" rotate={-1.5}>
            WEB &amp; DIGITAL
          </PaperBadge>
          <PaperBadge color="yellow" rotate={1.5}>
            BRAND SYSTEMS
          </PaperBadge>
          <PaperBadge color="pink" rotate={-1}>
            AI WORKFLOWS
          </PaperBadge>
        </div>

        {/* 2. HANDWRITTEN TOP ANNOTATION */}
        <div className="mb-4 sm:mb-6">
          <span className="font-accent text-terracotta text-lg sm:text-xl md:text-2xl select-none -rotate-1 inline-flex items-center gap-1.5">
            <span>good things happen here</span>
            <span className="text-xl sm:text-2xl leading-none">↘</span>
          </span>
        </div>

        {/* 3. MAIN HEADLINE: Bold Condensed Display Typography (Two-line structure) */}
        <div className="mb-5 sm:mb-7 max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] text-[#222126] leading-[0.88] sm:leading-[0.86] tracking-tight uppercase select-none">
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

        {/* 4. SMALL EDITORIAL ANNOTATION */}
        <div className="mb-6 sm:mb-8">
          <span className="font-accent text-base sm:text-lg md:text-xl text-[#222126]/60 select-none inline-flex items-center gap-1.5">
            <span>a little different, on purpose</span>
            <span className="text-lg leading-none">→</span>
          </span>
        </div>

        {/* 5. DESCRIPTION: Centered, readable, comfortable line-height, max-w-2xl */}
        <p className="font-primary text-base sm:text-lg md:text-xl lg:text-[21px] text-[#222126]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10 text-center">
          We&apos;re Oddlyyy. A creative studio building distinctive brands,
          digital experiences and clever little things that refuse to blend in.
        </p>

        {/* 6. CTA BUTTONS & SIDE ANNOTATION */}
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

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PaperBadge,
  HandAnnotation,
} from "@/components/ui/notebook";

export const NotebookHero: React.FC = () => {
  return (
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#222126]/12">
      {/* Background notebook lines are on body; container adds subtle notebook margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top stickers row */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-12">
          <PaperBadge color="mint" rotate={-2}>
            Web & Digital
          </PaperBadge>
          <PaperBadge color="yellow" rotate={2}>
            Brand Systems
          </PaperBadge>
          <PaperBadge color="pink" rotate={-1} className="hidden sm:inline-flex">
            AI Workflows
          </PaperBadge>
        </div>

        {/* Hero Main: Headline & Typography */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Handwritten Top Annotation */}
          <div className="flex items-center gap-3">
            <HandAnnotation arrow="down-right" rotate={-2}>
              good things happen here
            </HandAnnotation>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#222126] leading-[0.9] tracking-tight uppercase select-none">
            <span className="block">GOOD IDEAS</span>
            <span className="block text-terracotta relative inline-block">
              DON&apos;T SIT STILL.
              <span className="absolute left-0 bottom-1 w-full h-[6px] sm:h-[8px] bg-[#FFD84D] -z-10 -rotate-1 rounded" />
            </span>
          </h1>

          {/* Handwritten Side Annotation */}
          <div className="flex items-center gap-4 pt-1">
            <span className="w-12 h-0.5 bg-[#222126]/20" />
            <HandAnnotation arrow="right" color="text-[#222126]/70">
              a little different, on purpose
            </HandAnnotation>
          </div>

          {/* Lead Description */}
          <p className="font-primary text-lg sm:text-xl lg:text-2xl text-[#222126]/85 max-w-2xl leading-relaxed font-normal">
            We&apos;re Oddlyyy. A creative studio building distinctive brands,
            digital experiences and clever little things that refuse to blend in.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#222126] text-[#F7F6F0] font-bold text-sm sm:text-base uppercase tracking-wider rounded-md border border-[#222126] shadow-[4px_4px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FFD84D] active:translate-y-0 transition-all select-none"
            >
              <span>SEE WHAT WE MAKE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FFD84D] text-[#222126] font-bold text-sm sm:text-base uppercase tracking-wider rounded-md border border-[#222126] shadow-[4px_4px_0px_#222126] hover:-translate-y-0.5 active:translate-y-0 transition-all select-none"
            >
              <span>LET&apos;S TALK</span>
              <span className="text-xs">✦</span>
            </Link>

            <div className="hidden sm:inline-block ml-2">
              <HandAnnotation arrow="left" color="text-terracotta" rotate={3}>
                no boring stuff
              </HandAnnotation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  WashiTape,
  PaperBadge,
  HandAnnotation,
  PolaroidFrame,
} from "@/components/ui/notebook";

export const NotebookHero: React.FC = () => {
  return (
    <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#222126]/12">
      {/* Background notebook lines are on body; container adds subtle notebook margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top small label & stickers row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#222126]/60 bg-white/70 px-2.5 py-1 rounded border border-[#222126]/15 shadow-sm">
              ODDLYYY STUDIO / NOTEBOOK 01
            </span>
            <span className="hidden sm:inline-block w-8 border-t border-dashed border-[#222126]/30" />
            <span className="font-mono text-xs text-[#222126]/50">
              EST. 2024
            </span>
          </div>

          <div className="flex items-center gap-2">
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
        </div>

        {/* Hero Main Grid: Headline + Scrapbook Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Condensed Typography & Hand Notes */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
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
              We&apos;re Oddlyyy. A creative studio building distinctive
              brands, digital experiences and clever little things that refuse to
              blend in.
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

          {/* Right Column: Scrapbook Polaroid & Note Cluster */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Polaroid 1: Real project preview */}
              <PolaroidFrame
                src="/images/projects/the-chess-project-cover.png"
                alt="The Chess Project - Digital Education Platform"
                caption="The Chess Project / Full-Stack Platform"
                tapeColor="yellow"
                tapePosition="top"
                rotate={3}
                className="w-full"
              />

              {/* Overlapping small sticky tag */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-[#222126] p-3 rounded shadow-[3px_3px_0px_#222126] -rotate-3 z-30 max-w-[200px]">
                <WashiTape
                  color="mint"
                  className="absolute -top-2 left-4 !w-12 !h-3"
                  angle={-5}
                />
                <p className="font-accent text-sm text-[#222126] leading-tight font-bold">
                  Crafted for high performance &amp; zero templates.
                </p>
              </div>

              {/* Small color stamp */}
              <div className="absolute -top-5 -right-3 w-10 h-10 rounded-full bg-[#F3B5CB] border border-[#222126] flex items-center justify-center font-mono text-[10px] font-bold shadow-[2px_2px_0px_#222126] rotate-12">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  WashiTape,
  HandAnnotation,
  PolaroidFrame,
} from "@/components/ui/notebook";

export const NotebookAboutPreview: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 border-b border-[#222126]/12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#222126] rounded-xl p-8 sm:p-12 lg:p-16 shadow-[5px_6px_0px_#222126] relative">
          {/* Decorative washi tape on corners */}
          <WashiTape
            color="mint"
            className="absolute -top-3 left-10"
            angle={-3}
          />
          <WashiTape
            color="pink"
            className="absolute -top-3 right-10"
            angle={2}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Bold Headline with crossed-out NORMAL */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#222126] uppercase leading-[0.95] tracking-tight">
                WE WERE NEVER REALLY INTO{" "}
                <span className="relative inline-block px-3 py-1 bg-[#222126] text-[#F7F6F0] rounded mx-1 -rotate-1">
                  NORMAL
                  <span className="absolute left-0 top-1/2 w-full h-[3px] bg-terracotta -translate-y-1/2" />
                </span>
              </h2>

              <p className="font-primary text-base sm:text-lg text-[#222126]/85 leading-relaxed font-normal">
                Same old layouts. Same old corporate language. Same old ideas
                being passed around as something new. We started Oddlyyy because
                doing things the usual way sounded a little boring.
              </p>

              <p className="font-primary text-base sm:text-lg text-[#222126]/85 leading-relaxed font-normal">
                We are a small creative studio for people who would rather make
                something memorable than simply make something that looks familiar.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#222126] text-[#F7F6F0] font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-[#222126] shadow-[3px_3px_0px_#FFD84D] hover:-translate-y-0.5 transition-all select-none group"
                >
                  <span>READ OUR FULL STORY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
                </Link>

                <HandAnnotation arrow="left" color="text-terracotta" rotate={-2}>
                  curious by default ✦
                </HandAnnotation>
              </div>
            </div>

            {/* Right: Scrapbook Pinned Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-[#FAF7F2] border border-[#222126] p-6 rounded-lg shadow-[3px_3px_0px_#222126] rotate-2 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#222126]/15">
                    <span className="font-mono text-xs uppercase font-bold text-[#222126]">
                      STUDIO PRINCIPLES
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] border border-[#222126]" />
                  </div>

                  <div className="space-y-3 font-accent text-lg sm:text-xl text-[#222126] leading-snug">
                    <p className="border-b border-dashed border-[#222126]/20 pb-2">
                      ✦ 01. Curious by default. Ask better questions.
                    </p>
                    <p className="border-b border-dashed border-[#222126]/20 pb-2">
                      ✦ 02. A little unexpected. Connect unusual dots.
                    </p>
                    <p className="border-b border-dashed border-[#222126]/20 pb-2">
                      ✦ 03. Obsessed with the details. Execution matters.
                    </p>
                    <p>
                      ✦ 04. No fluff, no jargon, no corporate nonsense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


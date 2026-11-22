"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SmileyStamp,
  HandAnnotation,
} from "@/components/ui/notebook";

export const NotebookLetsTalk: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-notebook-ruled">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Yellow Smiley Face Stamp from reference */}
        <div className="flex justify-center mb-8">
          <SmileyStamp size="lg" className="hover:rotate-6 transition-transform" />
        </div>

        {/* Huge Display Heading */}
        <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#222126] tracking-tight uppercase leading-[0.88] select-none mb-6">
          LET&apos;S TALK.
        </h2>

        {/* Handwritten subtitle note */}
        <div className="mb-8 flex justify-center">
          <HandAnnotation arrow="none" color="text-terracotta" rotate={-1} className="text-xl sm:text-2xl font-bold">
            no pitch decks, just honest conversations ✦
          </HandAnnotation>
        </div>

        {/* Supporting description */}
        <p className="font-primary text-base sm:text-lg text-[#222126]/80 max-w-xl mx-auto leading-relaxed mb-10">
          Got a project, a hard problem, a half-formed idea, or just want to say
          hi? Tell us what you&apos;re thinking. We read and reply to every note.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#222126] text-[#F7F6F0] font-bold text-sm sm:text-base uppercase tracking-wider rounded-md border border-[#222126] shadow-[4px_4px_0px_#FFD84D] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FFD84D] transition-all select-none"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFD84D]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

export const AboutWhyWeStarted: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-why-we-started"
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 md:py-36 border-b border-ink/10"
    >
      <SectionContainer paddingY="none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 7): Typography-led Narrative */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {/* Small subtle label */}
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold block">
              OUR ORIGIN
            </span>

            {/* Large Editorial Headline */}
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
              We started because the usual felt{" "}
              <span className="font-recoleta italic font-normal text-terracotta block sm:inline">
                a little too usual.
              </span>
            </h2>

            {/* Generously Spaced Narrative */}
            <div className="space-y-6 text-lg sm:text-xl md:text-[22px] text-ink/80 leading-relaxed font-primary font-normal max-w-2xl">
              <p className="text-xl sm:text-2xl font-medium text-ink leading-snug">
                Same old layouts. Same old language. Same old ideas being passed around as something new.
              </p>

              <p>
                We thought there had to be a more interesting way to do things.
              </p>

              <p>
                So we started Oddlyyy. A small studio for people who&apos;d rather make something memorable than simply make something that looks familiar.
              </p>
            </div>

            {/* Subtle Handwritten Annotation */}
            <div className="pt-4 flex items-center gap-3">
              <HandwrittenNote direction="right" color="terracotta" className="text-lg sm:text-xl">
                there is always a more interesting way
              </HandwrittenNote>
            </div>
          </div>

          {/* Right Column (Span 5): Tactile Editorial Centerpiece Graphic */}
          <div className="lg:col-span-5 pt-4 lg:pt-12 flex justify-center lg:justify-end">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm rounded-[32px] p-8 sm:p-10 bg-[#FAF3EE] border border-ink/15 shadow-[0_12px_32px_rgba(32,32,40,0.06)] select-none"
            >
              {/* Corner Tape Detail */}
              <div
                className="absolute -top-3 left-8 w-20 h-6 bg-[#B596CA]/80 -rotate-6 rounded-[2px] shadow-sm pointer-events-none"
                style={{
                  clipPath:
                    "polygon(2% 0, 98% 0, 100% 20%, 98% 45%, 100% 70%, 98% 100%, 2% 100%, 0 75%, 2% 50%, 0 25%)",
                }}
              />

              {/* Studio Mark Centerpiece */}
              <div className="space-y-6 text-center pt-2">
                <div className="mx-auto w-16 h-16 rounded-full border-2 border-terracotta/40 flex items-center justify-center text-terracotta">
                  <span className="text-3xl font-serif leading-none italic font-normal">*</span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50 block font-semibold">
                    STUDIO PHILOSOPHY
                  </span>
                  <p className="font-serif italic text-2xl sm:text-3xl text-ink leading-tight">
                    &ldquo;Be the exception.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};


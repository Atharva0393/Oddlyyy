"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

interface PersonalityItem {
  number: string;
  statement: string;
  italicWord?: string;
  description: string;
  annotation?: string;
  sparkle?: boolean;
}

const PERSONALITY_ITEMS: PersonalityItem[] = [
  {
    number: "01",
    statement: "CURIOUS BY DEFAULT.",
    description:
      "We ask questions, challenge assumptions and look beyond the obvious. The first idea isn't always the interesting one.",
    annotation: "ask three questions deeper",
  },
  {
    number: "02",
    statement: "A LITTLE UNEXPECTED.",
    description:
      "We enjoy connecting things that don't usually belong together. That's often where the good stuff begins.",
    sparkle: true,
  },
  {
    number: "03",
    statement: "OBSESSED WITH THE DETAILS.",
    description:
      "We care about how things look, feel and work. Because a great idea deserves an equally great execution.",
    annotation: "the 1px difference matters",
  },
];

export const AboutPersonality: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-personality"
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 md:py-36 border-b border-ink/10"
    >
      <SectionContainer paddingY="none">
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 sm:mb-24">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink/60 font-semibold block">
            OUR PERSONALITY
          </span>
          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[70px] text-ink tracking-tight leading-[1.04]">
            Three things that shape{" "}
            <span className="font-recoleta italic font-normal text-terracotta">
              how we see the world.
            </span>
          </h2>
          <p className="font-primary text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed font-normal pt-2 max-w-3xl">
            No corporate values printed on a boardroom wall. Just the everyday instincts that guide our work.
          </p>
        </div>

        {/* Continuous Editorial Sequence (No conventional cards) */}
        <div className="space-y-0">
          {PERSONALITY_ITEMS.map((item, index) => {
            const isOffset = index === 1;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group py-12 sm:py-16 lg:py-20 border-t border-ink/10 transition-colors duration-300 ${
                  isOffset ? "lg:pl-16" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Number Indicator */}
                  <div className="lg:col-span-2 flex items-center gap-3 pt-1">
                    <span className="font-recoleta italic text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-terracotta leading-none">
                      {item.number}
                    </span>
                  </div>

                  {/* Large Statement Title */}
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="font-primary font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-ink tracking-tight leading-[1.05] group-hover:text-terracotta transition-colors duration-200">
                      {item.statement}
                    </h3>

                    {item.annotation && (
                      <div className="pt-2">
                        <HandwrittenNote direction="right" color="terracotta" className="text-xl sm:text-2xl md:text-[26px]">
                          {item.annotation}
                        </HandwrittenNote>
                      </div>
                    )}

                    {item.sparkle && (
                      <div className="pt-2 flex items-center gap-2 text-terracotta">
                        <span className="text-xl animate-pulse">✦</span>
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-ink/60 font-semibold">
                          unconventional connections
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Supporting Explanation */}
                  <div className="lg:col-span-4 pt-1 sm:pt-2">
                    <p className="font-primary text-lg sm:text-xl lg:text-2xl text-ink/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

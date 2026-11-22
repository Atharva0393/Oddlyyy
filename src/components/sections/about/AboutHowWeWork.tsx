"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "TALK IT OUT",
    description:
      "We get to know you, your idea and what you're trying to make happen.",
  },
  {
    number: "02",
    title: "FIND THE ANGLE",
    description:
      "We question the brief, explore possibilities and find a direction worth pursuing.",
  },
  {
    number: "03",
    title: "MAKE SOME MAGIC",
    description:
      "We design, build, experiment and turn the idea into something real.",
  },
  {
    number: "04",
    title: "MAKE IT MATTER",
    description:
      "We refine the details, test the experience and get the finished work ready for the world.",
  },
];

export const AboutHowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about-how-we-work"
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 md:py-36 border-b border-ink/10"
    >
      <SectionContainer paddingY="none">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold block">
            HOW WE WORK
          </span>
          <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
            Good work doesn&apos;t happen{" "}
            <span className="font-serif italic font-normal text-terracotta">
              by accident.
            </span>
          </h2>
          <p className="font-primary text-base sm:text-lg md:text-xl text-ink/75 leading-relaxed font-normal pt-2">
            There&apos;s a little curiosity, a lot of thinking and a fair amount of making involved.
          </p>
        </div>

        {/* DESKTOP: Clean Horizontal Process Timeline */}
        <div className="hidden lg:block relative pt-8 pb-12">
          {/* Continuous Timeline Track Line */}
          <div className="absolute top-[52px] left-0 right-0 h-[1.5px] bg-ink/15 z-0" />
          {/* Active progress indicator line */}
          <motion.div
            className="absolute top-[51px] left-0 h-[3px] bg-terracotta z-0 rounded-full"
            animate={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
          />

          {/* 4 Stage Milestones Along the Timeline */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="space-y-6 cursor-pointer group"
                >
                  {/* Step Milestone Marker on the line */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                        isActive
                          ? "bg-terracotta text-cream border-terracotta shadow-sm scale-110"
                          : "bg-cream text-ink/60 border-ink/20 group-hover:border-terracotta group-hover:text-terracotta"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div className="space-y-2.5 pt-2">
                    <h3
                      className={`font-primary font-bold text-lg xl:text-xl tracking-tight transition-colors duration-200 ${
                        isActive ? "text-terracotta" : "text-ink group-hover:text-ink"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="font-primary text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET: Clean Vertical Process Timeline */}
        <div className="lg:hidden relative pl-8 border-l-2 border-ink/15 space-y-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className="relative space-y-2 cursor-pointer"
              >
                {/* Node on Vertical Timeline */}
                <div
                  className={`absolute -left-[41px] top-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "bg-terracotta border-terracotta text-cream shadow-sm"
                      : "bg-cream border-ink/30 text-ink/50"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-terracotta font-bold">
                    {step.number}
                  </span>
                  <h3 className="font-primary font-bold text-xl text-ink tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="font-primary text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

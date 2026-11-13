"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  color: string;
}

export const AboutHowWeWork: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const stages: ProcessStage[] = [
    {
      number: "01",
      title: "Get curious.",
      subtitle: "Unpack the unconventional",
      description:
        "We start by understanding your business, your audience, your challenges and what you're trying to achieve.",
      deliverables: ["Audience immersion", "Category whitespace", "Problem mapping"],
      color: "border-terracotta bg-[#FFF9F4]",
    },
    {
      number: "02",
      title: "Find the angle.",
      subtitle: "Strategy into direction",
      description:
        "We turn the brief into a direction. The strategy, creative thinking and decisions that give the project its own identity.",
      deliverables: ["Visual moodboards", "Tone of voice", "System architecture"],
      color: "border-ink bg-lavender",
    },
    {
      number: "03",
      title: "Make it real.",
      subtitle: "Iterative physical craft",
      description:
        "We design, build, experiment, test and refine. You'll see the work taking shape, not just hear us talk about it.",
      deliverables: ["Interactive prototypes", "WebGL & code craft", "Component suites"],
      color: "border-mint-dark bg-mint",
    },
    {
      number: "04",
      title: "Make it matter.",
      subtitle: "Care through launch",
      description:
        "We polish, launch and hand over the finished work with the care it deserves.",
      deliverables: ["Multi-device QA", "Speed verification", "Effortless handover"],
      color: "border-ink bg-cream",
    },
  ];

  return (
    <SectionContainer
      id="about-how-we-work"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="space-y-16 sm:space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/15">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              05 / THE WAY WE MAKE THINGS
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
              Less agency theatre.{" "}
              <span className="text-terracotta font-normal italic">
                More actual making.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              Good collaboration shouldn&apos;t feel like navigating a maze. We keep things clear, collaborative and focused on getting good work out into the world.
            </p>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            transparent delivery flow
          </HandwrittenNote>
        </div>

        {/* Desktop Process Timeline Track */}
        <div className="hidden lg:block relative space-y-8">
          {/* Animated Connecting Track Line */}
          <div className="absolute top-[38px] left-[4%] right-[4%] h-[2px] bg-ink/15 z-0" />
          <motion.div
            className="absolute top-[37px] left-[4%] h-[4px] bg-terracotta z-0 transition-all duration-500 rounded-full"
            style={{ width: `${(activeStage / (stages.length - 1)) * 92}%` }}
          />

          {/* 4 Interactive Stage Cards Along the Track */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <div
                  key={stage.number}
                  onMouseEnter={() => setActiveStage(idx)}
                  className="space-y-6 cursor-pointer"
                >
                  {/* Stage Number Node */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                        isCurrent
                          ? "bg-terracotta text-cream border-ink shadow-ink-offset scale-110"
                          : "bg-cream text-ink border-ink/20 hover:border-ink hover:scale-105"
                      }`}
                    >
                      {stage.number}
                    </div>
                    <span className="font-mono text-xs uppercase text-ink/50 font-bold tracking-wider">
                      Stage {stage.number}
                    </span>
                  </div>

                  {/* Stage Detail Card */}
                  <div
                    className={`p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between space-y-4 min-h-[280px] ${
                      isCurrent
                        ? `${stage.color} shadow-ink-offset -translate-y-1`
                        : "bg-cream/70 border-ink/15 hover:border-ink/40"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase text-terracotta font-bold tracking-wider block">
                        {stage.subtitle}
                      </span>
                      <h3 className="font-primary font-bold text-2xl text-ink tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-ink/80 leading-relaxed font-primary pt-1">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-ink/10 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40 block">
                        Focus Highlights
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.deliverables.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-ink/5 text-ink/80"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Progressive Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-terracotta/40">
          {stages.map((stage, idx) => (
            <div
              key={stage.number}
              onClick={() => setActiveStage(idx)}
              className={`p-6 rounded-3xl border-2 transition-all duration-300 space-y-4 relative ${
                activeStage === idx
                  ? `${stage.color} shadow-ink-offset`
                  : "bg-cream border-ink/15"
              }`}
            >
              {/* Timeline Indicator Pin */}
              <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-terracotta border-2 border-cream" />

              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-ink text-cream">
                  STAGE {stage.number}
                </span>
                <span className="text-xs font-mono text-terracotta font-bold uppercase">
                  {stage.subtitle}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-primary font-bold text-2xl text-ink">
                  {stage.title}
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-3 border-t border-ink/10 flex flex-wrap gap-1.5">
                {stage.deliverables.map((d) => (
                  <span
                    key={d}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-ink/5 text-ink/75"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Studio Note */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-ink/60 border-t border-ink/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            <span>NO BUREAUCRATIC RED TAPE</span>
            <span>•</span>
            <span>WEEKLY LIVE LOOM WALKTHROUGHS</span>
            <span>•</span>
            <span>SLACK CHANNELS WITH MAKERS</span>
          </div>
          <span className="text-terracotta font-bold">ACCELERATED REALITY</span>
        </div>
      </div>
    </SectionContainer>
  );
};


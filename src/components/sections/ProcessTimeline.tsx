"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";
import { processStages } from "@/content/process";

export const ProcessTimeline: React.FC = () => {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="our-process"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[0.98]">
            From random thought to{" "}
            <span className="text-terracotta italic font-normal block sm:inline">
              ridiculously good result.
            </span>
          </h2>
        </div>

        <HandwrittenNote direction="right" color="terracotta">
          structured for sanity
        </HandwrittenNote>
      </div>

      {/* Visual Timeline Layout: 4 Connected Stage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
        {processStages.map((stage, idx) => {
          const cardColors = [
            "bg-cream/90 border-ink/15",
            "bg-mint/60 border-ink/15",
            "bg-lavender/60 border-ink/15",
            "bg-ink text-cream border-ink/30",
          ];
          const isDark = idx === 3;

          return (
            <motion.div
              key={stage.step}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1 ${cardColors[idx]}`}
            >
              <div>
                {/* Step Marker & Arrow to next */}
                <div className="flex items-center justify-between pb-4 border-b border-current/15 mb-6">
                  <span
                    className={`font-mono text-xs uppercase tracking-wider font-medium ${
                      isDark ? "text-lavender" : "text-terracotta"
                    }`}
                  >
                    Stage [{stage.step}]
                  </span>

                  {idx < 3 && (
                    <div className="hidden lg:flex items-center text-ink/40">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}

                  {isDark && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-terracotta text-cream font-medium">
                      Launch Ready
                    </span>
                  )}
                </div>

                {/* Stage Title & Tagline */}
                <h3 className="font-primary font-semibold text-2xl sm:text-3xl tracking-tight mb-2">
                  {stage.name}
                </h3>
                <p
                  className={`font-secondary text-xs sm:text-sm font-normal italic mb-3 ${
                    isDark ? "text-cream/70" : "text-ink/75"
                  }`}
                >
                  {stage.tagline}
                </p>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed font-primary mb-8 ${
                    isDark ? "text-cream/80" : "text-ink/80"
                  }`}
                >
                  {stage.description}
                </p>
              </div>

              {/* Deliverable Highlights */}
              <div className="pt-4 border-t border-current/15 space-y-2">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block ${
                    isDark ? "text-cream/50" : "text-ink/50"
                  }`}
                >
                  Key Milestones
                </span>
                <ul className="space-y-1.5">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-1.5 text-xs font-primary ${
                        isDark ? "text-cream/75" : "text-ink/75"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isDark ? "text-lavender" : "text-terracotta"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {stage.annotation && (
                  <div className="pt-2 text-right">
                    <span
                      className={`font-accent text-sm ${
                        isDark ? "text-lavender" : "text-terracotta"
                      }`}
                    >
                      * {stage.annotation}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};


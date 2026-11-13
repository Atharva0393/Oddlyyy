"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote } from "@/components/ui";

export const AboutCodePrinciples: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="about-code"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="space-y-14 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/15">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              03 / WHAT MAKES US TICK
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
              We have a few things we{" "}
              <span className="text-terracotta font-normal italic">
                don&apos;t compromise on.
              </span>
            </h2>
          </div>

          <HandwrittenNote direction="right" color="terracotta">
            four non-negotiables
          </HandwrittenNote>
        </div>

        {/* Dynamic Asymmetric Editorial Grid (7+5, 5+7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: CURIOSITY OVER CONVENTION (Span 7) — Soft Lavender */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-7 rounded-3xl p-8 sm:p-10 bg-lavender border-2 border-ink/15 flex flex-col justify-between space-y-6 hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-ink/15">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                  01 // CONVICTION
                </span>
                <span className="font-mono text-[11px] text-ink/60 uppercase tracking-widest">
                  [ INQUIRY FIRST ]
                </span>
              </div>

              <h3 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                Curiosity over convention.
              </h3>

              <p className="font-primary text-base sm:text-lg text-ink/80 leading-relaxed max-w-xl">
                We ask better questions before jumping to familiar answers. The first idea isn&apos;t always the best one. We dig deeper until we uncover the unexpected angle that gives a project its unfair advantage.
              </p>
            </div>

            <div className="pt-4 border-t border-ink/15 flex items-center justify-between">
              <HandwrittenNote direction="left" color="terracotta" className="text-sm sm:text-base">
                ask the uncomfortable question
              </HandwrittenNote>
              <span className="font-mono text-xs text-ink/50 uppercase">Principle 01</span>
            </div>
          </motion.div>

          {/* Card 2: DESIGN WITH A REASON (Span 5) — Warm Ivory with Terracotta Accents */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#FFF9F4] border-2 border-ink/15 flex flex-col justify-between space-y-6 hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-ink/15">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-cream">
                  02 // FUNCTION
                </span>
                <span className="font-mono text-[11px] text-terracotta font-bold uppercase tracking-widest">
                  [ PURPOSE-LED ]
                </span>
              </div>

              <h3 className="font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                Design with a reason.
              </h3>

              <p className="font-primary text-base text-ink/80 leading-relaxed">
                Every visual decision should have a purpose. We like beautiful things, but we like useful beautiful things even more. Decoration without intent is just noise.
              </p>
            </div>

            <div className="pt-4 border-t border-ink/15 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta font-medium">BEAUTY + INTENT</span>
              <span className="text-ink/40">Principle 02</span>
            </div>
          </motion.div>

          {/* Card 3: TECHNOLOGY WITH IMAGINATION (Span 5) — Soft Mint */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-5 rounded-3xl p-8 sm:p-10 bg-mint border-2 border-ink/15 flex flex-col justify-between space-y-6 hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-ink/15">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                  03 // CRAFT
                </span>
                <span className="font-mono text-[11px] text-ink/60 uppercase tracking-widest">
                  [ CODE AS MEDIUM ]
                </span>
              </div>

              <h3 className="font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                Technology with imagination.
              </h3>

              <p className="font-primary text-base text-ink/80 leading-relaxed">
                Code isn&apos;t just something that makes a design work. It can be part of what makes the experience memorable. Tactile physics, responsive speed, and kinetic joy.
              </p>
            </div>

            <div className="pt-4 border-t border-ink/15 flex items-center justify-between text-xs font-mono">
              <span className="text-mint-dark font-medium">[ REACT + WEBGL + SPEED ]</span>
              <span className="text-ink/40">Principle 03</span>
            </div>
          </motion.div>

          {/* Card 4: DETAILS ARE NEVER JUST DETAILS (Span 7) — Deep Odd Ink */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="md:col-span-7 rounded-3xl p-8 sm:p-10 bg-ink text-cream border-2 border-ink flex flex-col justify-between space-y-6 shadow-ink-offset hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-cream/15">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-cream">
                  04 // RIGOR
                </span>
                <span className="font-mono text-[11px] text-terracotta uppercase font-bold tracking-widest">
                  [ PRECISION OBSESSED ]
                </span>
              </div>

              <h3 className="font-primary font-bold text-2xl sm:text-4xl text-cream tracking-tight">
                Details are never just details.
              </h3>

              <p className="font-primary text-base sm:text-lg text-cream/80 leading-relaxed max-w-xl">
                From the smallest interaction to the overall experience, the little things are often what people remember. We obsess over the millimeter spacing, the kinetic spring physics, and the typographic hierarchy so your users don&apos;t have to.
              </p>
            </div>

            <div className="pt-4 border-t border-cream/15 flex items-center justify-between">
              <HandwrittenNote direction="right" color="terracotta" className="text-sm sm:text-base text-cream">
                the 1px difference matters
              </HandwrittenNote>
              <span className="font-mono text-xs text-cream/40 uppercase">Principle 04</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";

export const Hero: React.FC = () => {
  // Staggered entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-cream pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 border-b border-ink/10">
      {/* Subtle Background Tactile Grid */}
      <div
        className="absolute inset-0 bg-noise opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 lg:space-y-12"
        >
          {/* Main Asymmetrical Grid: Typography Hero Left + Abstract Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Oversized Expressive Headline & Copy */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* The Oversized Headline */}
              <motion.div variants={itemVariants} className="relative">
                <h1 className="font-primary font-bold text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] tracking-tight text-ink uppercase select-none">
                  <span className="block">WE MAKE</span>
                  <span className="block text-terracotta relative my-1 sm:my-2">
                    ODDLY GOOD
                    {/* Hand-drawn energetic underline flourish */}
                    <svg
                      className="absolute -bottom-2 sm:-bottom-3 left-0 w-44 sm:w-72 md:w-96 text-terracotta h-3 sm:h-4 overflow-visible"
                      viewBox="0 0 320 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13C52.5 5.5 142.5 2.5 317 14.5"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 16C95 9 198 8 280 15"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                    </svg>
                  </span>
                  <span className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span>THINGS</span>
                    <span className="text-terracotta font-serif font-normal">.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Copy */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal"
              >
                We build digital experiences, brands and clever little systems for businesses that refuse to blend in.
              </motion.p>

              {/* Prominent CTA Button Group */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
              >
                <PrimaryButton
                  href="/contact"
                  size="lg"
                  className="shadow-md hover:shadow-ink-offset text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
                >
                  <span>Let&apos;s talk</span>
                </PrimaryButton>

                <SecondaryButton
                  href="/services"
                  variant="outline"
                  size="lg"
                  showArrow
                  className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
                >
                  <span>See what we do</span>
                </SecondaryButton>
              </motion.div>
            </div>

            {/* Right Column: Abstract Brand Graphic & Rotating Seal */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[380px] aspect-square">
                {/* Rotating Circular Seal / Irregular Brand Stamp */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  className="absolute -top-5 -right-2 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 z-30 pointer-events-none select-none"
                >
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full fill-current text-ink overflow-visible"
                    aria-hidden="true"
                  >
                    <path
                      id="textPath-hero-seal"
                      d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                      fill="none"
                    />
                    <text className="text-[10px] font-mono tracking-[0.24em] font-bold">
                      <textPath href="#textPath-hero-seal" startOffset="0%">
                        • BE THE EXCEPTION • Oddlyyy Studio •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-terracotta flex items-center justify-center text-cream font-mono font-bold text-xs shadow-sm">
                    *
                  </div>
                </motion.div>

                {/* Abstract Visual Device: Layered Editorial Glassmorphic Structure */}
                <div className="relative w-full h-full rounded-3xl bg-mint/70 border-2 border-ink p-5 sm:p-6 flex flex-col justify-between shadow-ink-offset transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1">
                  {/* Top Bar of Graphic */}
                  <div className="flex items-center justify-between pb-4 border-b border-ink/15">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-terracotta border border-ink" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cream border border-ink" />
                      <span className="w-2.5 h-2.5 rounded-full bg-lavender border border-ink" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 font-semibold">
                      ODD-SPEC_01
                    </span>
                  </div>

                  {/* Middle Content: Tactile Layered Graphic Pill */}
                  <div className="space-y-3 py-4">
                    <div className="p-4 rounded-2xl bg-lavender border border-ink/20 shadow-sm space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-ink/60 font-medium block">
                        Core Philosophy
                      </span>
                      <p className="font-secondary text-xl text-ink leading-tight">
                        &ldquo;Normal is the only risk.&rdquo;
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-cream border border-ink/15 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-terracotta font-medium uppercase block">
                          Output Metric
                        </span>
                        <span className="font-primary font-medium text-sm text-ink">
                          Zero boring templates
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-mint border border-ink/15 text-ink font-medium">
                        100% Custom
                      </span>
                    </div>
                  </div>

                  {/* Bottom Interactive Trigger Pill */}
                  <div className="pt-3 border-t border-ink/15 flex items-center justify-between">
                    <span className="font-accent text-terracotta text-lg font-medium">
                      clever little systems →
                    </span>
                    <Link
                      href="/work"
                      className="w-8 h-8 rounded-full bg-ink text-cream flex items-center justify-center hover:bg-terracotta transition-colors shadow-sm"
                      aria-label="View our recent work"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Floating Decorative Geometric Pill Accent */}
                <div className="absolute -bottom-4 -left-2 sm:-left-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cream border-2 border-ink shadow-ink-offset z-20 flex items-center gap-2 max-w-[280px] sm:max-w-none">
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse shrink-0" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-ink uppercase tracking-wider truncate sm:overflow-visible">
                    Next.js 15 &bull; Motion &bull; Brand
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

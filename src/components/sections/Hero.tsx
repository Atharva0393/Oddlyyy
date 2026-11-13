"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Restrained, subtle parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 12; // max ±6px
    const y = ((clientY - top) / height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-[86vh] lg:min-h-[90vh] flex items-center border-b border-ink/10 bg-[#F7EAE0]"
    >
      {/* ---------------------------------------------------- */}
      {/* 01. TACTILE TORN-PAPER BACKGROUND LAYER              */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Master high-resolution tactile composition: Cream paper + Torn edge + Terracotta + Debossed Asterisk */}
        <Image
          src="/images/hero/hero-torn-terracotta-bg.webp"
          alt="Oddlyyy Tactile Torn Paper Editorial Art Direction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-center transition-transform duration-1000 ease-out"
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `scale(1.015) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          }}
        />

        {/* Subtle mobile readability mask to ensure text always has contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F7EAE0]/95 via-[#F7EAE0]/70 to-transparent lg:hidden"
          aria-hidden="true"
        />

        {/* Fine paper noise overlay */}
        <div
          className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 02. INTERACTIVE 3D PUSH PIN LAYER                    */}
      {/* ---------------------------------------------------- */}
      {/* Positioned at the top-right torn edge coordinate: ~74% X, ~26% Y on desktop */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden hidden md:block">
        <motion.div
          className="absolute left-[72%] lg:left-[74.2%] top-[23%] lg:top-[26%]"
          animate={{
            x: shouldReduceMotion ? 0 : mousePos.x * -1.2,
            y: shouldReduceMotion ? 0 : mousePos.y * -1.2,
            rotate: shouldReduceMotion ? 0 : mousePos.x * 0.35,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          {/* Transparent 3D push pin overlay asset with realistic metallic needle and contact shadow */}
          <div className="relative w-14 h-24 lg:w-16 lg:h-28 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/hero/tactile-push-pin.png"
              alt="Tactile Terracotta Push Pin"
              fill
              sizes="64px"
              className="object-contain drop-shadow-md"
            />
          </div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 03. FOREGROUND HERO CONTENT OVER CREAM PAPER          */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 relative z-20 py-16 sm:py-20 lg:py-24 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-[56%] space-y-6 sm:space-y-8"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-terracotta font-bold block">
              CREATIVE &bull; TECHNOLOGY &bull; GROWTH
            </span>
          </motion.div>

          {/* The Oversized Oddlyyy Headline */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="font-primary font-bold text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.94] tracking-tight text-ink uppercase select-none">
              <span className="block">WE MAKE</span>
              <span className="block text-terracotta relative my-1 sm:my-2">
                ODDLY GOOD
                {/* Hand-drawn energetic underline flourish */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-44 sm:w-64 md:w-80 text-terracotta h-3 sm:h-4 overflow-visible"
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
            className="text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed font-primary max-w-xl font-normal"
          >
            We build digital experiences, brands and clever little systems for
            businesses that refuse to blend in.
          </motion.p>

          {/* Prominent CTA Button Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <PrimaryButton
              href="/contact"
              size="lg"
              className="shadow-md hover:shadow-ink-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
            >
              <span>Let&apos;s talk</span>
            </PrimaryButton>

            <SecondaryButton
              href="/services"
              variant="outline"
              size="lg"
              showArrow
              className="text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center bg-[#F7EAE0]/60 hover:bg-[#F7EAE0]"
            >
              <span>See what we do</span>
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

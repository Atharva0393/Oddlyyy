"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Staggered entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Subtle restrained parallax on mouse move for responsive tactile depth
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 10;
    const y = ((clientY - top) / height - 0.5) * 10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-[92svh] lg:min-h-screen flex items-center -mt-[76px] lg:-mt-[84px] pt-[76px] lg:pt-[84px] bg-[#F4E4DC]"
    >
      {/* ---------------------------------------------------- */}
      {/* 01. FULL-BLEED TACTILE TORN-PAPER BACKGROUND LAYER   */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Full-bleed custom oddlyyy bg artwork: Cream Paper + Push Pin + Torn Edge + Terracotta + Asterisk */}
        <Image
          src="/images/oddlyyybg.webp"
          alt="Oddlyyy Creative Studio Torn Paper Editorial Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[82%_center] sm:object-[72%_center] lg:object-center transition-transform duration-1000 ease-out"
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `scale(1.015) translate3d(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px, 0)`,
          }}
        />

        {/* Subtle mobile readability mask to ensure text always has high contrast on small screens */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F4E4DC] via-[#F4E4DC]/85 to-transparent/10 lg:hidden pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 02. FOREGROUND EDITORIAL CONTENT OVER CREAM PAPER     */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 relative z-20 py-8 sm:py-10 lg:py-14 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-[54%] xl:max-w-[50%] space-y-4 sm:space-y-5 lg:space-y-6"
        >
          {/* Editorial Display Headline */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="tracking-tight text-ink select-none">
              <span className="block font-primary font-bold text-[clamp(2.5rem,5.8vw,5.5rem)] leading-[0.92]">
                Beyond the
              </span>

              <span className="relative inline-block mt-0.5 sm:mt-1.5">
                <span className="block font-serif italic font-normal text-terracotta text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] tracking-normal">
                  Expected.
                </span>

                {/* Handcrafted dynamic underline flourish under "Expected." matching editorial reference */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full min-w-[190px] max-w-[320px] text-terracotta h-3 sm:h-3.5 overflow-visible pointer-events-none"
                  viewBox="0 0 280 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 11C48 4 135 2 276 13"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26 15C85 8.5 175 7.5 248 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed font-primary max-w-lg lg:max-w-xl font-normal"
          >
            A creative &amp; digital studio building brands, websites and digital
            experiences that don&apos;t feel copy-pasted.
          </motion.p>

          {/* Prominent Editorial Pill CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            {/* Primary Pill Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-terracotta hover:bg-terracotta-hover text-cream font-primary font-medium text-base sm:text-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary Pill Button */}
            <Link
              href="/work"
              className="group inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-transparent hover:bg-ink/5 border border-ink/80 hover:border-ink text-ink font-primary font-medium text-base sm:text-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Work</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

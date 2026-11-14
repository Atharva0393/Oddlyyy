"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { OddlyyyLogo } from "@/components/ui/OddlyyyLogo";
import { brandInformation } from "@/content/brand";

/* -------------------------------------------------------------------------- */
/* STICKER COMPONENTS (Reusable vector assets for mobile & desktop layouts)   */
/* -------------------------------------------------------------------------- */

const TicketSticker: React.FC<{ className?: string }> = ({ className = "" }) => (
  <motion.div
    whileHover={{ rotate: -5, scale: 1.06 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className={`-rotate-8 hover:-rotate-5 transition-transform duration-200 cursor-pointer select-none filter drop-shadow-[2.5px_3.5px_0px_#202028] shrink-0 ${className}`}
  >
    <svg
      width="144"
      height="82"
      viewBox="0 0 144 82"
      className="w-[118px] h-[67px] sm:w-[132px] sm:h-[75px] lg:w-[144px] lg:h-[82px]"
      aria-label="Good Ideas Inside Ticket"
    >
      {/* Notched ticket silhouette */}
      <path
        d="M 10,0 L 134,0 Q 144,0 144,10 L 144,31 A 10,10 0 0,0 144,51 L 144,72 Q 144,82 134,82 L 10,82 Q 0,82 0,72 L 0,51 A 10,10 0 0,0 0,31 L 0,10 Q 0,0 10,0 Z"
        fill="#8BD98D"
        stroke="#202028"
        strokeWidth="3"
      />
      {/* Perforation line */}
      <line
        x1="42"
        y1="6"
        x2="42"
        y2="76"
        stroke="#202028"
        strokeWidth="1.8"
        strokeDasharray="3.5 3.5"
        opacity="0.38"
      />
      {/* ODD pill badge */}
      <rect x="12" y="16" width="22" height="13" rx="6.5" fill="#202028" />
      <text
        x="23"
        y="25.5"
        fill="#FFF7EA"
        fontSize="7.5"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
      >
        ODD
      </text>
      {/* Main Ticket Text */}
      <text
        x="92"
        y="34"
        fill="#202028"
        fontSize="12.5"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.5"
      >
        GOOD IDEAS
      </text>
      <text
        x="92"
        y="58"
        fill="#202028"
        fontSize="22"
        fontFamily="'Yellowtail', cursive"
        textAnchor="middle"
      >
        Inside
      </text>
    </svg>
  </motion.div>
);

const StarburstSticker: React.FC<{ className?: string }> = ({ className = "" }) => (
  <motion.div
    whileHover={{ rotate: 14, scale: 1.06 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className={`rotate-10 hover:rotate-14 transition-transform duration-200 cursor-pointer select-none filter drop-shadow-[2.5px_3.5px_0px_#202028] shrink-0 ${className}`}
  >
    <svg
      width="114"
      height="114"
      viewBox="0 0 100 100"
      className="w-[90px] h-[90px] sm:w-[102px] sm:h-[102px] lg:w-[114px] lg:h-[114px]"
      aria-label="Make it ODD Starburst"
    >
      {/* 16-point sharp starburst */}
      <polygon
        points="50.0,4.0 56.8,13.6 67.0,7.3 69.4,18.8 80.9,16.7 78.8,28.2 90.3,30.6 84.0,40.8 93.6,47.6 84.0,54.4 90.3,64.6 78.8,67.0 80.9,78.5 69.4,76.4 67.0,87.9 56.8,81.6 50.0,91.2 43.2,81.6 33.0,87.9 30.6,76.4 19.1,78.5 21.2,67.0 9.7,64.6 16.0,54.4 6.4,47.6 16.0,40.8 9.7,30.6 21.2,28.2 19.1,16.7 30.6,18.8 33.0,7.3 43.2,13.6"
        fill="#3154BD"
        stroke="#202028"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="42"
        fill="#FFF7EA"
        fontSize="16"
        fontFamily="'Yellowtail', cursive"
        textAnchor="middle"
        transform="rotate(-5, 50, 50)"
      >
        Make it
      </text>
      <text
        x="50"
        y="64"
        fill="#FFF7EA"
        fontSize="16"
        fontFamily="Inter, sans-serif"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="1"
        transform="rotate(-5, 50, 50)"
      >
        ODD!
      </text>
    </svg>
  </motion.div>
);

const CtaButton: React.FC = () => (
  <Link
    href="/contact"
    className="group relative inline-flex items-center justify-center rounded-full bg-[#FFBB19] border-[3px] sm:border-[3.5px] border-ink shadow-[0_8px_0_0_#202028] hover:shadow-[0_12px_0_0_#202028] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_3px_0_0_#202028] px-10 sm:px-14 lg:px-20 py-4 sm:py-5 lg:py-6 transition-all duration-200 select-none cursor-pointer"
  >
    <span className="font-retro text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-ink leading-none relative inline-block border-b-[3px] sm:border-b-[3.5px] border-ink pb-0.5 sm:pb-1 tracking-wide">
      Book a Call
    </span>
  </Link>
);

/* -------------------------------------------------------------------------- */
/* MAIN FINAL CTA SECTION                                                     */
/* -------------------------------------------------------------------------- */

export const FinalCta: React.FC = () => {
  return (
    <SectionContainer
      id="final-cta"
      paddingY="lg"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Retro Promotional Poster Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] border-[3px] sm:border-[3.5px] border-ink bg-[#FFF7EA] overflow-hidden shadow-[0_12px_0_0_#202028] sm:shadow-[0_16px_0_0_#202028]"
      >
        {/* =========================================================================
            TOP ZONE — TERRACOTTA PROMOTIONAL PANEL (~50% height)
            ========================================================================= */}
        <div className="relative bg-[#F04B32] pt-12 pb-16 sm:pt-18 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-8 overflow-hidden">
          {/* Subtle Tactile Noise Grain */}
          <div
            className="absolute inset-0 bg-noise opacity-15 pointer-events-none"
            aria-hidden="true"
          />

          {/* Dark Architectural / Storefront Grid Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-90"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(32, 32, 40, 0.22) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(32, 32, 40, 0.22) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />

          {/* DESKTOP / TABLET LAYOUT (>= md): Horizontal Triad */}
          <div className="relative z-10 hidden md:flex items-center justify-center gap-6 lg:gap-10">
            <TicketSticker />
            <CtaButton />
            <StarburstSticker />
          </div>

          {/* MOBILE LAYOUT (< md): Stacked with Side-by-Side Stickers */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:hidden">
            <CtaButton />
            <div className="flex items-center justify-center gap-5 pt-1">
              <TicketSticker />
              <StarburstSticker />
            </div>
          </div>

          {/* TRANSITION: Scalloped Wavy Paper Edge Dividing Top and Bottom */}
          <div className="absolute -bottom-[1px] left-0 w-full h-6 sm:h-7 lg:h-8 overflow-hidden pointer-events-none z-20">
            <svg className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <pattern
                  id="cta-scallop-pattern"
                  width="48"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 32 L 0 18 Q 12 0 24 0 Q 36 0 48 18 L 48 32 Z"
                    fill="#FFF7EA"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-scallop-pattern)" />
            </svg>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ZONE — CREAM EDITORIAL FOOTER
            ========================================================================= */}
        <div className="relative bg-[#FFF7EA] p-6 sm:p-10 lg:p-14 z-30">
          {/* Subtle Paper Grain */}
          <div
            className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Supporting Headline Message (Right-aligned, editorial layout) */}
          <div className="relative z-10 flex justify-end">
            <p className="font-primary font-bold text-base sm:text-lg lg:text-xl text-ink leading-snug max-w-xl text-left sm:text-right">
              From ambitious ideas to things that make people look twice &mdash; we&apos;d love to hear what you&apos;re dreaming up.
            </p>
          </div>

          {/* Bottom Brand & Socials Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mt-10 sm:mt-14 lg:mt-16 pt-6 border-t border-ink/10">
            {/* Left: Oddlyyy Logo + Cute Studio Mascot Doodle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <OddlyyyLogo
                size="lg"
                variant="ink"
                asLink
                href="/"
                className="h-9 sm:h-11 w-auto"
              />

              {/* Playful Studio Mascot Doodle */}
              <div
                className="shrink-0 -mt-1"
                title="Be the exception."
                aria-hidden="true"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-10 h-10 sm:w-12 sm:h-12">
                  {/* Asterisk Arms */}
                  <path
                    d="M24 6V42M6 24H42M11 11L37 37M37 11L11 37"
                    stroke="#202028"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Center Character Face */}
                  <circle
                    cx="24"
                    cy="24"
                    r="10.5"
                    fill="#FFF7EA"
                    stroke="#202028"
                    strokeWidth="2.5"
                  />
                  {/* Eyes */}
                  <circle cx="21" cy="22" r="1.5" fill="#202028" />
                  <circle cx="27" cy="22" r="1.5" fill="#202028" />
                  {/* Smile */}
                  <path
                    d="M21 25.5 Q24 29 27 25.5"
                    stroke="#202028"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Terracotta Studio Spark Pin */}
                  <circle cx="33" cy="16" r="3.2" fill="#A04C34" />
                </svg>
              </div>
            </div>

            {/* Right: Clean Dark Ink Social Media Icons */}
            <div className="flex items-center gap-5 sm:gap-6 self-start sm:self-auto">
              {/* X / Twitter */}
              <a
                href={brandInformation.socials.find(s => s.platform.includes("Twitter") || s.platform.includes("X"))?.href || "https://twitter.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                aria-label="X (Twitter)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={brandInformation.socials.find(s => s.platform.includes("Instagram"))?.href || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={brandInformation.socials.find(s => s.platform.includes("LinkedIn"))?.href || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

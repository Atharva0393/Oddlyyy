"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { OddlyyyLogo } from "@/components/ui/OddlyyyLogo";
import { brandInformation } from "@/content/brand";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* STICKER COMPONENTS (Oddlyyy Brand Palette: Sage Mint & Soft Lavender)      */
/* -------------------------------------------------------------------------- */

const TicketSticker: React.FC<{
  badgeText?: string;
  titleText?: string;
  subtext?: string;
  className?: string;
}> = ({
  badgeText = "ODD",
  titleText = "GOOD IDEAS",
  subtext = "Inside",
  className = "",
}) => (
  <motion.div
    whileHover={{ rotate: -8, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className={`-rotate-12 hover:-rotate-8 transition-transform duration-200 cursor-pointer select-none filter drop-shadow-[2px_2.5px_0px_#202028] shrink-0 ${className}`}
  >
    <svg
      width="114"
      height="65"
      viewBox="0 0 144 82"
      className="w-[96px] h-[55px] sm:w-[106px] sm:h-[60px] lg:w-[114px] lg:h-[65px]"
      aria-label={`${titleText} ${subtext} Ticket`}
    >
      {/* Notched ticket silhouette in Muted Sage / Soft Mint */}
      <path
        d="M 10,0 L 134,0 Q 144,0 144,10 L 144,31 A 10,10 0 0,0 144,51 L 144,72 Q 144,82 134,82 L 10,82 Q 0,82 0,72 L 0,51 A 10,10 0 0,0 0,31 L 0,10 Q 0,0 10,0 Z"
        fill="#D4E5DC"
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
      {/* Badge pill */}
      <rect x="12" y="16" width="22" height="13" rx="6.5" fill="#202028" />
      <text
        x="23"
        y="25.5"
        fill="#FFF8EF"
        fontSize="7.5"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
      >
        {badgeText}
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
        {titleText}
      </text>
      <text
        x="92"
        y="58"
        fill="#202028"
        fontSize="22"
        fontFamily="'Yellowtail', cursive"
        textAnchor="middle"
      >
        {subtext}
      </text>
    </svg>
  </motion.div>
);

const StarburstSticker: React.FC<{
  topText?: string;
  bottomText?: string;
  className?: string;
}> = ({
  topText = "Make it",
  bottomText = "ODD!",
  className = "",
}) => (
  <motion.div
    whileHover={{ rotate: 18, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className={`rotate-14 hover:rotate-18 transition-transform duration-200 cursor-pointer select-none filter drop-shadow-[2px_2.5px_0px_#202028] shrink-0 ${className}`}
  >
    <svg
      width="86"
      height="86"
      viewBox="0 0 100 100"
      className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[86px] lg:h-[86px]"
      aria-label={`${topText} ${bottomText} Starburst`}
    >
      {/* 16-point sharp starburst in Soft Lavender */}
      <polygon
        points="50.0,4.0 56.8,13.6 67.0,7.3 69.4,18.8 80.9,16.7 78.8,28.2 90.3,30.6 84.0,40.8 93.6,47.6 84.0,54.4 90.3,64.6 78.8,67.0 80.9,78.5 69.4,76.4 67.0,87.9 56.8,81.6 50.0,91.2 43.2,81.6 33.0,87.9 30.6,76.4 19.1,78.5 21.2,67.0 9.7,64.6 16.0,54.4 6.4,47.6 16.0,40.8 9.7,30.6 21.2,28.2 19.1,16.7 30.6,18.8 33.0,7.3 43.2,13.6"
        fill="#E4E0FC"
        stroke="#202028"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="42"
        fill="#202028"
        fontSize="16"
        fontFamily="'Yellowtail', cursive"
        textAnchor="middle"
        transform="rotate(-5, 50, 50)"
      >
        {topText}
      </text>
      <text
        x="50"
        y="64"
        fill="#202028"
        fontSize="16"
        fontFamily="Inter, sans-serif"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="1"
        transform="rotate(-5, 50, 50)"
      >
        {bottomText}
      </text>
    </svg>
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/* HELPER: SCRIPT FORMATTER FOR ALL-CAPS LABELS                              */
/* -------------------------------------------------------------------------- */

function formatButtonLabel(label: string): string {
  if (!label) return "";
  const letters = label.replace(/[^a-zA-Z]/g, "");
  // If text is fully UPPERCASE and long, convert to Title Case for script readability
  if (letters.length > 3 && letters === letters.toUpperCase()) {
    return label
      .toLowerCase()
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      .replace(/\b(A|An|And|Or|The|In|On|At|To|For|Of|With)\b/g, (m) => m.toLowerCase())
      .replace(/^(.)/, (m) => m.toUpperCase());
  }
  return label;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT PROPS INTERFACE                                                  */
/* -------------------------------------------------------------------------- */

export interface CtaSectionProps {
  id?: string;
  eyebrow?: React.ReactNode;
  annotation?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  ticketBadgeText?: string;
  ticketTitleText?: string;
  ticketSubtext?: string;
  starburstTopText?: string;
  starburstBottomText?: string;
  showSocials?: boolean;
  showLogo?: boolean;
  footerNote?: React.ReactNode;
  className?: string;
  containerPaddingY?: "none" | "sm" | "md" | "lg" | "xl";
  /** Kept for backwards compatibility */
  variant?: "ink" | "terracotta" | "lavender" | "mint";
}

/* -------------------------------------------------------------------------- */
/* SHARED EDITORIAL PLAYFUL CTA SECTION                                       */
/* -------------------------------------------------------------------------- */

export const CtaSection: React.FC<CtaSectionProps> = ({
  id = "cta",
  eyebrow,
  annotation,
  title = "Got an idea that refuses to be ordinary?",
  description = "Tell us what you're imagining. We'll bring the creativity, the strategy and the skills to make it happen.",
  primaryButtonLabel = "Let's Connect",
  primaryButtonHref = "/contact",
  secondaryButtonLabel,
  secondaryButtonHref = "/work",
  ticketBadgeText = "ODD",
  ticketTitleText = "GOOD IDEAS",
  ticketSubtext = "Inside",
  starburstTopText = "Make it",
  starburstBottomText = "ODD!",
  showSocials = true,
  showLogo = true,
  footerNote,
  className,
  containerPaddingY = "md",
}) => {
  const reactId = React.useId();
  const patternId = `scallop-pattern-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const displayButtonLabel = formatButtonLabel(primaryButtonLabel);

  return (
    <SectionContainer
      id={id}
      paddingY={containerPaddingY}
      className={cn("relative overflow-hidden py-10 sm:py-14 lg:py-16", className)}
    >
      {/* Resized, Proportional Poster Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] border-[2.5px] sm:border-[3px] border-ink bg-[#FFF8EF] overflow-hidden shadow-[0_8px_0_0_#202028] sm:shadow-[0_10px_0_0_#202028]"
      >
        {/* =========================================================================
            TOP SECTION — CREAM MESSAGE / INVITATION SECTION
            ========================================================================= */}
        <div className="relative bg-[#FFF8EF] px-5 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-5 lg:px-10 lg:pt-9 lg:pb-6 z-20">
          {/* Subtle Paper Grain */}
          <div
            className="absolute inset-0 bg-noise opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Optional Eyebrow & Annotation Row */}
          {(eyebrow || annotation) && (
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 pb-2">
              {eyebrow && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-[#FFF8EF] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider select-none shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                  <span>{eyebrow}</span>
                </div>
              )}
              {annotation && (
                <span className="font-accent text-sm sm:text-base text-terracotta italic font-semibold">
                  {annotation}
                </span>
              )}
            </div>
          )}

          {/* Invitation Headline & Supporting Copy (Center-aligned) */}
          <div className="relative z-10 text-center mx-auto space-y-1 sm:space-y-1.5 max-w-2xl">
            {typeof title === "string" ? (
              <h3 className="font-primary font-bold text-lg sm:text-xl lg:text-2xl text-ink tracking-tight leading-snug">
                {title}
              </h3>
            ) : (
              <div className="font-primary font-bold text-lg sm:text-xl lg:text-2xl text-ink tracking-tight leading-snug">
                {title}
              </div>
            )}

            {description && (
              <p className="font-primary font-normal text-xs sm:text-sm lg:text-[15px] text-ink/75 leading-relaxed mx-auto max-w-xl">
                {description}
              </p>
            )}
          </div>

          {/* Divider Line Separating Supporting Statement from Footer Row */}
          <div className="relative z-10 border-t border-ink/10 my-4 sm:my-5" />

          {/* Footer Row: Oddlyyy Logo on Left, Optional Note Center, Social Icons on Right */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            {/* Left: Oddlyyy Logo */}
            {showLogo ? (
              <div>
                <OddlyyyLogo
                  size="md"
                  variant="ink"
                  asLink
                  href="/"
                  className="h-7 sm:h-8 w-auto"
                />
              </div>
            ) : (
              <div />
            )}

            {/* Center: Optional Footer Note (e.g. Studio Stamp) */}
            {footerNote && (
              <div className="text-center sm:text-left font-mono text-[11px] sm:text-xs text-ink/60 uppercase tracking-wider">
                {footerNote}
              </div>
            )}

            {/* Right: Clean Dark Ink Social Media Icons */}
            {showSocials ? (
              <div className="flex items-center gap-4 sm:gap-5 self-start sm:self-auto">
                {/* X / Twitter */}
                <a
                  href={
                    brandInformation.socials.find(
                      (s) => s.platform.includes("Twitter") || s.platform.includes("X")
                    )?.href || "https://twitter.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                  aria-label="X (Twitter)"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={
                    brandInformation.socials.find((s) => s.platform.includes("Instagram"))?.href ||
                    "https://instagram.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                  aria-label="Instagram"
                >
                  <svg
                    width="21"
                    height="21"
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
                  href={
                    brandInformation.socials.find((s) => s.platform.includes("LinkedIn"))?.href ||
                    "https://linkedin.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-terracotta hover:scale-110 transition-all duration-150"
                  aria-label="LinkedIn"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* =========================================================================
            TRANSITION: Scalloped Wavy Paper Edge (Cream scallops pointing downward)
            ========================================================================= */}
        <div className="w-full h-5 sm:h-5.5 lg:h-6 overflow-hidden pointer-events-none relative z-15 -mt-[1px] bg-[#A04C34]">
          <svg className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <pattern
                id={patternId}
                width="36"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 0 L 0 8 Q 9 24 18 24 Q 27 24 36 8 L 36 0 Z"
                  fill="#FFF8EF"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        </div>

        {/* =========================================================================
            BOTTOM SECTION — ODDLYYY TERRACOTTA INTERACTIVE CTA SECTION
            ========================================================================= */}
        <div className="relative bg-[#A04C34] pt-6 pb-9 sm:pt-8 sm:pb-11 lg:pt-10 lg:pb-13 px-4 sm:px-6 overflow-hidden z-10">
          {/* Subtle Tactile Noise Grain */}
          <div
            className="absolute inset-0 bg-noise opacity-15 pointer-events-none"
            aria-hidden="true"
          />

          {/* Charcoal Grid Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(32, 32, 40, 0.18) 1.2px, transparent 1.2px),
                linear-gradient(to bottom, rgba(32, 32, 40, 0.18) 1.2px, transparent 1.2px)
              `,
              backgroundSize: "46px 46px",
            }}
            aria-hidden="true"
          />

          {/* DESKTOP / TABLET LAYOUT (>= md): Full-width Triad with Left & Right Stickers */}
          <div className="relative z-10 hidden md:flex items-center justify-between w-full px-2 sm:px-4 lg:px-6">
            <TicketSticker
              badgeText={ticketBadgeText}
              titleText={ticketTitleText}
              subtext={ticketSubtext}
            />

            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-2">
              <Link
                href={primaryButtonHref}
                className="group relative inline-flex items-center justify-center rounded-full bg-[#FFF8EF] border-[2.5px] sm:border-[3px] border-ink shadow-[0_5px_0_0_#202028] hover:shadow-[0_8px_0_0_#202028] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_2px_0_0_#202028] px-7 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 transition-all duration-200 select-none cursor-pointer text-center max-w-full"
              >
                <span className="font-retro text-xl sm:text-2xl lg:text-[32px] text-ink leading-none relative inline-block border-b-[2px] sm:border-b-[2.5px] border-ink pb-0.5 tracking-wide">
                  {displayButtonLabel}
                </span>
              </Link>

              {secondaryButtonLabel && (
                <Link
                  href={secondaryButtonHref}
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-primary font-semibold text-[#FFF8EF]/85 hover:text-[#FFF8EF] transition-colors underline underline-offset-4 decoration-[#FFF8EF]/40 hover:decoration-[#FFF8EF] select-none pt-1"
                >
                  <span>{secondaryButtonLabel}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </Link>
              )}
            </div>

            <StarburstSticker
              topText={starburstTopText}
              bottomText={starburstBottomText}
            />
          </div>

          {/* MOBILE LAYOUT (< md): Stacked with Left and Right Stickers */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-3.5 md:hidden w-full">
            <Link
              href={primaryButtonHref}
              className="group relative inline-flex items-center justify-center rounded-full bg-[#FFF8EF] border-[2.5px] border-ink shadow-[0_5px_0_0_#202028] hover:shadow-[0_7px_0_0_#202028] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_#202028] px-6 py-3 transition-all duration-200 select-none cursor-pointer text-center max-w-[92vw]"
            >
              <span className="font-retro text-xl sm:text-2xl text-ink leading-none relative inline-block border-b-[2px] border-ink pb-0.5 tracking-wide">
                {displayButtonLabel}
              </span>
            </Link>

            {secondaryButtonLabel && (
              <Link
                href={secondaryButtonHref}
                className="group inline-flex items-center gap-1 text-xs font-primary font-semibold text-[#FFF8EF]/85 hover:text-[#FFF8EF] underline underline-offset-4 decoration-[#FFF8EF]/40 select-none"
              >
                <span>{secondaryButtonLabel}</span>
                <span>&rarr;</span>
              </Link>
            )}

            <div className="flex items-center justify-between w-full px-2 pt-2">
              <TicketSticker
                badgeText={ticketBadgeText}
                titleText={ticketTitleText}
                subtext={ticketSubtext}
              />
              <StarburstSticker
                topText={starburstTopText}
                bottomText={starburstBottomText}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

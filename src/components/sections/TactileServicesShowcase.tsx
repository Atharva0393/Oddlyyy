"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Custom 3D & Tactile Illustrations matching reference ---

// Card 01: 3D Laptop with Terracotta Screen & Oddlyyy Asterisk
const LaptopIllustration = () => (
  <svg
    viewBox="0 0 170 145"
    className="w-32 h-28 sm:w-36 sm:h-32 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Screen outer frame / lid */}
    <rect
      x="28"
      y="18"
      width="104"
      height="68"
      rx="6"
      fill="#D9D0C7"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Inner screen bezel */}
    <rect x="33" y="23" width="94" height="58" rx="3" fill="#202028" />
    {/* Active screen - Terracotta */}
    <rect x="35" y="25" width="90" height="54" rx="2" fill="#B34E34" />
    {/* Screen glare reflection */}
    <path d="M35 25 L105 25 L35 70 Z" fill="white" opacity="0.08" />
    {/* Oddlyyy Asterisk centered on screen */}
    <g transform="translate(80, 52)" fill="#FAF3EE">
      {[0, 45, 90, 135].map((angle, i) => (
        <rect
          key={i}
          x="-2.2"
          y="-13"
          width="4.4"
          height="26"
          rx="2.2"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="4.8" fill="#FAF3EE" />
    </g>
    {/* Laptop base / keyboard plate */}
    <path
      d="M16 94 L28 86 L132 86 L144 94 C146 95.5 144 98 141 98 L19 98 C16 98 14 95.5 16 94 Z"
      fill="#E5DDD3"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Keyboard inset */}
    <path d="M32 88 L38 93 L122 93 L128 88 Z" fill="#C8BEB3" />
    {/* Trackpad notch */}
    <path d="M72 95 H88" stroke="#202028" strokeWidth="1.5" strokeLinecap="round" />
    {/* Laptop soft shadow */}
    <ellipse cx="80" cy="106" rx="66" ry="7" fill="#202028" opacity="0.12" />
  </svg>
);

// Card 02: Cute Robot Mascot Head (Positioned overlapping the top edge)
const RobotMascot = () => (
  <div className="absolute -top-11 right-7 z-30 select-none pointer-events-none">
    {/* Starburst sparkles matching reference image */}
    <svg className="absolute -top-3 -left-5 w-6 h-6 text-terracotta animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>
    <svg className="absolute top-2 -right-4 w-5 h-5 text-terracotta animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>

    <svg viewBox="0 0 96 80" className="w-22 h-18 sm:w-24 sm:h-20 drop-shadow-xl overflow-visible" fill="none">
      {/* Antenna */}
      <path d="M48 24 V10" stroke="#D18770" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="48" cy="8" r="5.5" fill="#FAF3EE" stroke="#D18770" strokeWidth="2.5" />
      {/* Side ears */}
      <rect x="5" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      <rect x="83" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      {/* Main head body (sand/terracotta plastic casing) */}
      <rect
        x="10"
        y="18"
        width="76"
        height="54"
        rx="22"
        fill="#E4C8B5"
        stroke="#A04C34"
        strokeWidth="2.5"
      />
      {/* Dark visor face */}
      <rect x="18" y="26" width="60" height="38" rx="16" fill="#202028" />
      {/* Smiling eyes */}
      <path
        d="M30 46 C30 38 39 38 39 46"
        stroke="#FAF3EE"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M57 46 C57 38 66 38 66 46"
        stroke="#FAF3EE"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cute blush cheeks */}
      <circle cx="26" cy="52" r="3" fill="#D18770" opacity="0.9" />
      <circle cx="70" cy="52" r="3" fill="#D18770" opacity="0.9" />
    </svg>
  </div>
);

// Card 02: Realistic Curled Page Peel Corner Effect
const PagePeelCorner = () => (
  <div className="absolute -bottom-[2px] -right-[2px] w-28 h-28 pointer-events-none select-none z-20 overflow-visible">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible" fill="none">
      {/* Terracotta revealed underneath when cream card peels up */}
      <path
        d="M16 100 L100 16 L100 100 Z"
        fill="#B34E34"
      />
      {/* Underlying shadow cast by curled paper */}
      <path
        d="M16 100 Q 52 82 100 16 L 100 100 Z"
        fill="#1A1513"
        opacity="0.35"
      />
      {/* Curled flap revealing cream underside */}
      <path
        d="M16 100 C 46 95 78 78 100 16 C 82 58 58 82 16 100 Z"
        fill="url(#curl-grad)"
        stroke="rgba(32,32,40,0.14)"
        strokeWidth="0.8"
      />
      {/* Curled cylindrical roll highlight */}
      <path
        d="M18 100 C 58 70 70 58 100 18 Q 94 94 18 100 Z"
        fill="url(#curl-back)"
      />
      <defs>
        <linearGradient id="curl-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FAF3EE" />
          <stop offset="100%" stopColor="#DEC2B0" />
        </linearGradient>
        <linearGradient id="curl-back" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F5E4DA" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DFC3B0" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Card 01: Purple Washi Tape (Floating unclipped over top-left edge)
const WashiTape = () => (
  <div
    className="absolute -top-3.5 left-6 w-24 h-7 bg-[#B596CA]/90 backdrop-blur-[1px] -rotate-8 rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.18)] border-t border-b border-white/40 pointer-events-none z-30"
    style={{
      clipPath:
        "polygon(2% 0, 98% 0, 100% 20%, 98% 45%, 100% 70%, 98% 100%, 2% 100%, 0 75%, 2% 50%, 0 25%)",
    }}
  />
);

// Card 03: Golden Metallic Paperclip (Floating unclipped over top-right edge)
const GoldenPaperclip = () => (
  <svg
    className="absolute -top-5 right-7 w-8 h-15 z-30 drop-shadow-md pointer-events-none select-none overflow-visible"
    viewBox="0 0 28 56"
    fill="none"
  >
    <path
      d="M10 50 V14 C10 8 18 8 18 14 V42 C18 46 14 46 14 42 V20 C14 17 21 17 21 20 V46 C21 52 7 52 7 46 V10 C7 2 24 2 24 10 V40"
      stroke="#B88E3E"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 50 V14 C10 8 18 8 18 14 V42 C18 46 14 46 14 42 V20 C14 17 21 17 21 20 V46 C21 52 7 52 7 46 V10 C7 2 24 2 24 10 V40"
      stroke="#FFDF85"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

// Card 03: Tactile Swatch Cards
const SwatchCardsIllustration = () => (
  <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none pointer-events-none">
    {/* Back terracotta card */}
    <div className="absolute right-1 bottom-1 w-20 h-22 sm:w-22 sm:h-24 rounded-2xl bg-[#B34E34] shadow-[0_8px_18px_rgba(0,0,0,0.18)] border border-[#9A3E26] rotate-14 flex items-center justify-center" />
    {/* Front cream card with asterisk */}
    <div className="absolute right-4 bottom-2 w-20 h-22 sm:w-22 sm:h-24 rounded-2xl bg-[#FAF3EE] shadow-[0_12px_24px_rgba(32,32,40,0.12)] border border-ink/10 -rotate-3 flex items-center justify-center p-3">
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-terracotta" fill="currentColor">
        {[0, 45, 90, 135].map((angle, i) => (
          <rect
            key={i}
            x="18"
            y="4"
            width="4"
            height="32"
            rx="2"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="5" />
      </svg>
    </div>
  </div>
);

// Card 04: Megaphone with Sound Burst (Mouth facing left matching reference)
const MegaphoneIllustration = () => (
  <svg
    viewBox="0 0 160 140"
    className="w-32 h-28 sm:w-36 sm:h-32 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Radiating sound lines around opening */}
    <path d="M42 28 L32 18" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 40 L18 36" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 56 L12 56" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 72 L18 78" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 86 L32 98" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />

    {/* Megaphone handle */}
    <path
      d="M102 78 L110 104 C111 107 108 110 105 109 L96 105 C94 104 93 102 93 100 L90 76 Z"
      fill="#D18770"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Handle trigger */}
    <path d="M102 86 C104 88 104 91 102 93" stroke="#202028" strokeWidth="2" strokeLinecap="round" />
    {/* Megaphone body cone (terracotta) */}
    <path
      d="M126 50 L52 26 C48 25 44 28 44 32 L44 80 C44 84 48 87 52 86 L126 62 Z"
      fill="#B34E34"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Megaphone bell rim (cream) */}
    <ellipse
      cx="44"
      cy="56"
      rx="8"
      ry="28"
      fill="#F4DDD2"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Megaphone inner horn opening */}
    <ellipse cx="44" cy="56" rx="4" ry="22" fill="#883520" />
    {/* Back canister cap (cream) */}
    <rect
      x="124"
      y="48"
      width="14"
      height="16"
      rx="5"
      fill="#FAF3EE"
      stroke="#202028"
      strokeWidth="1.5"
    />
    <ellipse cx="138" cy="56" rx="3" ry="8" fill="#E5DDD3" stroke="#202028" strokeWidth="1.5" />
    {/* Drop shadow */}
    <ellipse cx="82" cy="116" rx="42" ry="6" fill="#202028" opacity="0.1" />
  </svg>
);

// Card 05: Interlocking 3D Puzzle Pieces
const PuzzleIllustration = () => (
  <svg
    viewBox="0 0 160 140"
    className="w-32 h-28 sm:w-36 sm:h-32 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Back Terracotta Puzzle Piece */}
    <g transform="translate(62, 28) rotate(14)">
      <path
        d="M10 10 H35 C35 18 45 18 45 10 H70 V35 C62 35 62 45 70 45 V70 H45 C45 62 35 62 35 70 H10 V45 C18 45 18 35 10 35 Z"
        fill="#B34E34"
        stroke="#202028"
        strokeWidth="1.5"
      />
      {/* 3D bevel edge */}
      <path
        d="M10 70 H35 C35 62 45 62 45 70 H70 V75 H45 C45 67 35 67 35 75 H10 Z"
        fill="#8E3922"
      />
    </g>
    {/* Foreground Cream Puzzle Piece */}
    <g transform="translate(26, 46) rotate(-4)">
      {/* Drop shadow */}
      <path
        d="M14 74 H39 C39 66 49 66 49 74 H74 V79 H49 C49 71 39 71 39 79 H14 Z"
        fill="#202028"
        opacity="0.18"
      />
      <path
        d="M10 10 H35 C35 18 45 18 45 10 H70 V35 C78 35 78 45 70 45 V70 H45 C45 62 35 62 35 70 H10 V45 C2 45 2 35 10 35 Z"
        fill="#FAF3EE"
        stroke="#202028"
        strokeWidth="1.5"
      />
      {/* 3D edge */}
      <path
        d="M10 70 H45 C45 62 35 62 35 70 H70 V76 H45 C45 68 35 68 35 76 H10 Z"
        fill="#E2D5CA"
      />
      {/* Inner tactile dot */}
      <circle cx="40" cy="40" r="3" fill="#D18770" opacity="0.6" />
    </g>
  </svg>
);

// Card 06: Smartphone with App Screen & Asterisk
const SmartphoneIllustration = () => (
  <svg
    viewBox="0 0 160 140"
    className="w-32 h-28 sm:w-36 sm:h-32 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    <g transform="translate(50, 14) rotate(8)">
      {/* Phone chassis */}
      <rect
        x="0"
        y="0"
        width="68"
        height="114"
        rx="14"
        fill="#202028"
        stroke="#101016"
        strokeWidth="2"
      />
      {/* Screen area */}
      <rect x="4" y="4" width="60" height="106" rx="10" fill="#FAF3EE" />
      {/* Dynamic Notch / speaker */}
      <rect x="22" y="7" width="24" height="4" rx="2" fill="#202028" />
      {/* Screen gradient waves / organic terracotta backdrop */}
      <defs>
        <clipPath id="phoneScreen">
          <rect x="4" y="4" width="60" height="106" rx="10" />
        </clipPath>
        <linearGradient id="phoneBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9ECE3" />
          <stop offset="60%" stopColor="#F0D5C7" />
          <stop offset="100%" stopColor="#D57A5F" />
        </linearGradient>
      </defs>
      <g clipPath="url(#phoneScreen)">
        <rect x="4" y="4" width="60" height="106" fill="url(#phoneBg)" />
        {/* Soft fluid terracotta wave */}
        <path d="M4 75 Q 34 60, 64 78 L64 110 L4 110 Z" fill="#B34E34" />
        <path d="M4 88 Q 30 72, 64 92 L64 110 L4 110 Z" fill="#9A3E26" opacity="0.6" />
        {/* Asterisk centered on screen */}
        <g transform="translate(34, 48)" fill="#B34E34">
          {[0, 45, 90, 135].map((angle, i) => (
            <rect
              key={i}
              x="-1.5"
              y="-10"
              width="3"
              height="20"
              rx="1.5"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="3.5" fill="#B34E34" />
        </g>
      </g>
      {/* Glossy screen glass reflection */}
      <path d="M4 4 L64 4 L4 70 Z" fill="white" opacity="0.15" clipPath="url(#phoneScreen)" />
    </g>
  </svg>
);

// --- The Six Services Data ---
interface ShowcaseService {
  index: string;
  title: string;
  description?: string;
  href: string;
  isTerracotta?: boolean;
  hasTape?: boolean;
  hasPaperclip?: boolean;
  hasRobot?: boolean;
  illustration: React.ReactNode;
}

const SHOWCASE_SERVICES: ShowcaseService[] = [
  {
    index: "01 /",
    title: "Web Development & Digital Products",
    href: "/services/digital-platforms",
    hasTape: true,
    illustration: <LaptopIllustration />,
  },
  {
    index: "02 /",
    title: "AI & Business Automation",
    description: "Smart automation and AI solutions that save time and scale your business.",
    href: "/services/ai-automation",
    isTerracotta: false,
    hasRobot: true,
    illustration: <PagePeelCorner />,
  },
  {
    index: "03 /",
    title: "Branding & Creative Studio",
    href: "/services/brand-identity",
    hasPaperclip: true,
    illustration: <SwatchCardsIllustration />,
  },
  {
    index: "04 /",
    title: "Marketing & Content",
    href: "/services/content-campaigns",
    illustration: <MegaphoneIllustration />,
  },
  {
    index: "05 /",
    title: "Business Systems & Integrations",
    href: "/services/business-systems",
    illustration: <PuzzleIllustration />,
  },
  {
    index: "06 /",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    illustration: <SmartphoneIllustration />,
  },
];

export const TactileServicesShowcase: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF3EE] text-ink pt-10 pb-20 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Torn Paper Edge Background Reveal on Right & Bottom */}
      <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none hidden xl:block opacity-60">
        <svg viewBox="0 0 40 1000" preserveAspectRatio="none" className="w-full h-full fill-[#A04C34]">
          <path d="M40 0 L15 80 L35 160 L10 240 L38 340 L18 450 L35 560 L12 680 L32 800 L8 920 L40 1000 Z" />
        </svg>
      </div>

      <div className="max-w-agency mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT COLUMN: Headline & Invitation */}
          <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:sticky lg:top-28">
            <div>
              {/* Main Display Headline */}
              <h1 className="font-primary font-bold text-5xl sm:text-6xl lg:text-[72px] leading-[0.95] tracking-tight text-ink">
                Six<br />
                ways to<br />
                build<br />
                what&apos;s<br />
                <span className="relative inline-block font-secondary text-terracotta text-6xl sm:text-7xl lg:text-[86px] font-normal not-italic -mt-1 pb-1">
                  next.
                  {/* Hand-drawn sketch underline scribble */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-terracotta overflow-visible"
                    viewBox="0 0 160 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 14 Q 45 4, 80 14 T 156 12" />
                    <path d="M12 17 Q 50 8, 90 16 T 148 15" opacity="0.6" />
                  </svg>
                </span>
              </h1>

              {/* Supporting Statement with vertical terracotta bar */}
              <div className="mt-8 flex items-start gap-3.5 max-w-sm">
                <div className="w-[3px] self-stretch bg-terracotta rounded-full shrink-0" />
                <p className="font-primary text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                  Design, technology and strategy working together to turn ideas into real impact.
                </p>
              </div>

              {/* Terracotta curved sketch arrow */}
              <div className="mt-6 ml-8 text-terracotta hidden sm:block">
                <svg
                  className="w-16 h-12"
                  viewBox="0 0 70 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 12 Q 35 15, 52 38" />
                  <path d="M40 38 L 52 38 L 52 26" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3x2 Grid of Tactile Sticky Note Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {SHOWCASE_SERVICES.map((service) => {
                const isTerracotta = service.isTerracotta;

                return (
                  <motion.div
                    key={service.index}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className={cn(
                      "relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between overflow-visible transition-all duration-300 min-h-[250px] sm:min-h-[270px] group",
                      isTerracotta
                        ? "bg-[#B24E34] text-cream shadow-[0_14px_32px_rgba(178,78,52,0.28),0_2px_8px_rgba(178,78,52,0.15)]"
                        : "bg-[#FBF6F0] text-ink border border-ink/10 shadow-[0_12px_28px_rgba(32,32,40,0.06),0_2px_6px_rgba(32,32,40,0.03)] hover:shadow-[0_18px_36px_rgba(32,32,40,0.1),0_4px_10px_rgba(32,32,40,0.05)]"
                    )}
                  >
                    {/* Top tactile embellishments (Overflow visible) */}
                    {service.hasTape && <WashiTape />}
                    {service.hasRobot && <RobotMascot />}
                    {service.hasPaperclip && <GoldenPaperclip />}

                    {/* Card Content Header: Index & Title */}
                    <div className="relative z-10">
                      <span
                        className={cn(
                          "block font-primary font-bold text-xs sm:text-sm tracking-wide mb-2.5",
                          isTerracotta ? "text-[#F8D2C4]" : "text-terracotta"
                        )}
                      >
                        {service.index}
                      </span>

                      <h3
                        className={cn(
                          "font-primary font-bold text-xl sm:text-[22px] leading-snug tracking-tight transition-colors duration-200",
                          isTerracotta
                            ? "text-white"
                            : "text-ink group-hover:text-terracotta"
                        )}
                      >
                        {service.title}
                      </h3>

                      {service.description && (
                        <p
                          className={cn(
                            "mt-2 text-xs sm:text-sm font-primary leading-relaxed font-normal max-w-[210px]",
                            isTerracotta ? "text-cream/90" : "text-ink/70"
                          )}
                        >
                          {service.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Action Row & Illustration */}
                    <div className="relative z-10 mt-auto pt-6 flex items-end justify-between">
                      {/* Circle Arrow Action Button */}
                      <Link
                        href={service.href}
                        aria-label={`Explore ${service.title}`}
                        className={cn(
                          "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
                          isTerracotta
                            ? "border-cream/40 text-cream group-hover:bg-cream group-hover:text-terracotta group-hover:border-cream"
                            : "border-ink/20 text-ink group-hover:bg-ink group-hover:text-cream group-hover:border-ink"
                        )}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>

                      {/* 3D Decorative Illustration */}
                      <div className="absolute -right-3 -bottom-3 pointer-events-none transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                        {service.illustration}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TactileServicesShowcase;

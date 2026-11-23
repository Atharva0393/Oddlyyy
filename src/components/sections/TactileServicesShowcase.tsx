"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BinderClip } from "@/components/ui/notebook/BinderClip";
import { WashiTape } from "@/components/ui/notebook/WashiTape";

// --- Torn Perforated Paper Top Edge Component ---
const PerforatedTopEdge: React.FC<{
  bgColor?: string;
  className?: string;
}> = ({ bgColor = "#5A1A18", className = "" }) => {
  return (
    <div className={cn("w-full overflow-hidden select-none pointer-events-none -mt-1", className)}>
      <svg
        viewBox="0 0 320 22"
        preserveAspectRatio="none"
        className="w-full h-5 sm:h-6"
        fill="none"
      >
        {/* Torn / deckled micro-edge along top */}
        <path
          d="M 0 0 Q 15 2 30 0.5 T 60 1.8 T 90 0.5 T 120 2 T 150 0.8 T 180 1.8 T 210 0.5 T 240 2 T 270 0.8 T 300 1.8 L 320 0.5 L 320 22 L 0 22 Z"
          fill="#FAF7F2"
        />
        {/* Row of notebook punch holes revealing back paper */}
        {[14, 38, 62, 86, 110, 134, 158, 182, 206, 230, 254, 278, 302].map((x, i) => (
          <g key={i}>
            <rect
              x={x}
              y={5}
              width={9}
              height={10}
              rx={1.5}
              fill={bgColor}
            />
            {/* Inner top shadow inside hole */}
            <rect
              x={x}
              y={5}
              width={9}
              height={2.5}
              rx={1}
              fill="#000000"
              opacity={0.35}
            />
          </g>
        ))}
        {/* Faint perforation dashed guideline */}
        <line
          x1={0}
          y1={18}
          x2={320}
          y2={18}
          stroke="#211F25"
          strokeWidth={0.8}
          strokeDasharray="3 3"
          opacity={0.16}
        />
      </svg>
    </div>
  );
};

// --- Custom Tactile Illustrations ---

// Card 01: 3D Laptop with Terracotta Screen & Oddlyyy Asterisk
const LaptopIllustration = () => (
  <svg
    viewBox="0 0 170 135"
    className="w-32 h-26 sm:w-36 sm:h-28 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Screen outer frame / lid */}
    <rect
      x="28"
      y="14"
      width="104"
      height="68"
      rx="6"
      fill="#D9D0C7"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Inner screen bezel */}
    <rect x="33" y="19" width="94" height="58" rx="3" fill="#202028" />
    {/* Active screen: Terracotta */}
    <rect x="35" y="21" width="90" height="54" rx="2" fill="#B34E34" />
    {/* Screen glare reflection */}
    <path d="M35 21 L105 21 L35 66 Z" fill="white" opacity="0.08" />
    {/* Oddlyyy Asterisk centered on screen */}
    <g transform="translate(80, 48)" fill="#FAF3EE">
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
      d="M16 90 L28 82 L132 82 L144 90 C146 91.5 144 94 141 94 L19 94 C16 94 14 91.5 16 90 Z"
      fill="#E5DDD3"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Keyboard inset */}
    <path d="M32 84 L38 89 L122 89 L128 84 Z" fill="#C8BEB3" />
    {/* Trackpad notch */}
    <path d="M72 91 H88" stroke="#202028" strokeWidth="1.5" strokeLinecap="round" />
    {/* Laptop soft shadow */}
    <ellipse cx="80" cy="102" rx="64" ry="6.5" fill="#202028" opacity="0.16" />
  </svg>
);

// Card 02: Cute Robot Mascot Head
const RobotIllustration = () => (
  <div className="relative select-none pointer-events-none flex items-center justify-center">
    {/* Starburst sparkles */}
    <svg
      className="absolute -top-3 -left-4 w-5 h-5 text-terracotta animate-pulse"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>
    <svg
      className="absolute -top-1 -right-3 w-4 h-4 text-terracotta animate-pulse"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>

    <svg
      viewBox="0 0 96 82"
      className="w-24 h-20 sm:w-28 sm:h-24 drop-shadow-md overflow-visible"
      fill="none"
    >
      {/* Antenna */}
      <path d="M48 24 V10" stroke="#D18770" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="48" cy="8" r="5.5" fill="#FAF3EE" stroke="#D18770" strokeWidth="2.5" />
      {/* Side ears */}
      <rect x="5" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      <rect x="83" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      {/* Main head body */}
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
      {/* Drop shadow */}
      <ellipse cx="48" cy="78" rx="34" ry="4" fill="#202028" opacity="0.14" />
    </svg>
  </div>
);

// Card 03: Tactile Swatch Cards & Palette
const SwatchCardsIllustration = () => (
  <div className="relative w-32 h-26 sm:w-36 sm:h-28 select-none pointer-events-none flex items-center justify-center">
    {/* Mini color swatches bar */}
    <div className="absolute left-2 bottom-1 flex gap-1 z-10 p-1 bg-white/90 rounded border border-[#211F25]/20 shadow-sm -rotate-6">
      <div className="w-3.5 h-3.5 rounded-sm bg-[#A94F35]" title="Terracotta" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FFD84D]" title="Yellow" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#A9DCC4]" title="Mint" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#211F25]" title="Ink" />
    </div>

    {/* Back terracotta card */}
    <div className="absolute right-3 bottom-2 w-18 h-20 sm:w-20 sm:h-22 rounded-xl bg-[#B34E34] shadow-[0_6px_14px_rgba(0,0,0,0.18)] border border-[#9A3E26] rotate-12 flex items-center justify-center" />
    {/* Front cream card with asterisk */}
    <div className="absolute right-6 bottom-3 w-18 h-20 sm:w-20 sm:h-22 rounded-xl bg-[#FAF3EE] shadow-[0_8px_18px_rgba(32,32,40,0.14)] border border-[#211F25]/15 -rotate-3 flex items-center justify-center p-3">
      <svg viewBox="0 0 40 40" className="w-9 h-9 text-terracotta" fill="currentColor">
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

// Card 04: Megaphone with Sound Burst
const MegaphoneIllustration = () => (
  <svg
    viewBox="0 0 160 130"
    className="w-32 h-26 sm:w-36 sm:h-28 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Radiating sound lines */}
    <path d="M42 24 L32 14" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 36 L18 32" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 52 L12 52" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 68 L18 74" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 82 L32 94" stroke="#B34E34" strokeWidth="2.5" strokeLinecap="round" />

    {/* Megaphone handle */}
    <path
      d="M102 74 L110 100 C111 103 108 106 105 105 L96 101 C94 100 93 98 93 96 L90 72 Z"
      fill="#D18770"
      stroke="#202028"
      strokeWidth="1.5"
    />
    <path d="M102 82 C104 84 104 87 102 89" stroke="#202028" strokeWidth="2" strokeLinecap="round" />
    {/* Megaphone body cone */}
    <path
      d="M126 46 L52 22 C48 21 44 24 44 28 L44 76 C44 80 48 83 52 82 L126 58 Z"
      fill="#B34E34"
      stroke="#202028"
      strokeWidth="1.5"
    />
    {/* Megaphone bell rim */}
    <ellipse
      cx="44"
      cy="52"
      rx="8"
      ry="27"
      fill="#F4DDD2"
      stroke="#202028"
      strokeWidth="1.5"
    />
    <ellipse cx="44" cy="52" rx="4" ry="21" fill="#883520" />
    {/* Back canister cap */}
    <rect
      x="124"
      y="44"
      width="14"
      height="16"
      rx="5"
      fill="#FAF3EE"
      stroke="#202028"
      strokeWidth="1.5"
    />
    <ellipse cx="138" cy="52" rx="3" ry="8" fill="#E5DDD3" stroke="#202028" strokeWidth="1.5" />
    {/* Drop shadow */}
    <ellipse cx="82" cy="110" rx="42" ry="5.5" fill="#202028" opacity="0.14" />
  </svg>
);

// Card 05: Interlocking 3D Puzzle Pieces
const PuzzleIllustration = () => (
  <svg
    viewBox="0 0 160 130"
    className="w-32 h-26 sm:w-36 sm:h-28 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    {/* Back Terracotta Puzzle Piece */}
    <g transform="translate(62, 22) rotate(14)">
      <path
        d="M10 10 H35 C35 18 45 18 45 10 H70 V35 C62 35 62 45 70 45 V70 H45 C45 62 35 62 35 70 H10 V45 C18 45 18 35 10 35 Z"
        fill="#B34E34"
        stroke="#202028"
        strokeWidth="1.5"
      />
      <path
        d="M10 70 H35 C35 62 45 62 45 70 H70 V75 H45 C45 67 35 67 35 75 H10 Z"
        fill="#8E3922"
      />
    </g>
    {/* Foreground Cream Puzzle Piece */}
    <g transform="translate(26, 40) rotate(-4)">
      <path
        d="M14 74 H39 C39 66 49 66 49 74 H74 V79 H49 C49 71 39 71 39 79 H14 Z"
        fill="#202028"
        opacity="0.16"
      />
      <path
        d="M10 10 H35 C35 18 45 18 45 10 H70 V35 C78 35 78 45 70 45 V70 H45 C45 62 35 62 35 70 H10 V45 C2 45 2 35 10 35 Z"
        fill="#FAF3EE"
        stroke="#202028"
        strokeWidth="1.5"
      />
      <path
        d="M10 70 H45 C45 62 35 62 35 70 H70 V76 H45 C45 68 35 68 35 76 H10 Z"
        fill="#E2D5CA"
      />
      <circle cx="40" cy="40" r="3" fill="#D18770" opacity="0.7" />
    </g>
  </svg>
);

// Card 06: Smartphone Mockup Prototype
const SmartphoneIllustration = () => (
  <svg
    viewBox="0 0 160 130"
    className="w-32 h-26 sm:w-36 sm:h-28 object-contain select-none pointer-events-none drop-shadow-md"
    fill="none"
  >
    <g transform="translate(52, 10) rotate(8)">
      {/* Phone chassis */}
      <rect
        x="0"
        y="0"
        width="66"
        height="110"
        rx="14"
        fill="#202028"
        stroke="#101016"
        strokeWidth="2"
      />
      {/* Screen area */}
      <rect x="4" y="4" width="58" height="102" rx="10" fill="#FAF3EE" />
      {/* Dynamic Notch */}
      <rect x="21" y="7" width="24" height="4" rx="2" fill="#202028" />
      {/* Screen gradient waves */}
      <defs>
        <clipPath id="phoneScreenClip">
          <rect x="4" y="4" width="58" height="102" rx="10" />
        </clipPath>
        <linearGradient id="phoneBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9ECE3" />
          <stop offset="60%" stopColor="#F0D5C7" />
          <stop offset="100%" stopColor="#D57A5F" />
        </linearGradient>
      </defs>
      <g clipPath="url(#phoneScreenClip)">
        <rect x="4" y="4" width="58" height="102" fill="url(#phoneBgGrad)" />
        <path d="M4 72 Q 32 58, 62 75 L62 106 L4 106 Z" fill="#B34E34" />
        <path d="M4 85 Q 28 70, 62 89 L62 106 L4 106 Z" fill="#9A3E26" opacity="0.6" />
        {/* Asterisk centered on screen */}
        <g transform="translate(33, 46)" fill="#B34E34">
          {[0, 45, 90, 135].map((angle, i) => (
            <rect
              key={i}
              x="-1.5"
              y="-9.5"
              width="3"
              height="19"
              rx="1.5"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="3.2" fill="#B34E34" />
        </g>
      </g>
      <path d="M4 4 L62 4 L4 68 Z" fill="white" opacity="0.15" clipPath="url(#phoneScreenClip)" />
      {/* Drop shadow */}
      <ellipse cx="33" cy="116" rx="30" ry="4" fill="#202028" opacity="0.16" />
    </g>
  </svg>
);

// --- The Six Services Configuration ---
interface PaperService {
  index: string;
  title: string;
  description: string;
  href: string;
  backSheetColor: string;
  backSheetRotation: number;
  clipAngle: number;
  annotation: string;
  badge?: {
    text: string;
    bgColor: string;
    textColor: string;
    rotation?: number;
  };
  hasTape?: boolean;
  tapeColor?: "mint" | "yellow" | "pink" | "blue" | "lavender" | "white";
  illustration: React.ReactNode;
}

const SERVICES_CONFIG: PaperService[] = [
  {
    index: "01",
    title: "Web Development & Digital Products",
    description:
      "Bespoke business websites, e-commerce stores, and digital platforms built to elevate your brand and grow your revenue.",
    href: "/services/digital-platforms",
    backSheetColor: "#9B3F27", // Rich Terracotta
    backSheetRotation: -6,
    clipAngle: 6,
    annotation: "built to work ↘",
    hasTape: true,
    tapeColor: "mint",
    illustration: <LaptopIllustration />,
  },
  {
    index: "02",
    title: "AI & Business Automation",
    description:
      "Smart automation and AI solutions that save time, eliminate manual bottlenecks, and scale your business operations.",
    href: "/services/ai-automation",
    backSheetColor: "#4A2E44", // Deep Lavender-Wine
    backSheetRotation: 5,
    clipAngle: -4,
    annotation: "less busywork ✦",
    badge: {
      text: "less busywork ✦",
      bgColor: "#DCD5EF",
      textColor: "#3A223E",
      rotation: -3,
    },
    illustration: <RobotIllustration />,
  },
  {
    index: "03",
    title: "Branding & Creative Studio",
    description:
      "Distinctive brand identities, logos, and comprehensive design systems built for businesses that dare to stand out.",
    href: "/services/brand-identity",
    backSheetColor: "#4B1918", // Deep Wine Burgundy
    backSheetRotation: -5,
    clipAngle: 5,
    annotation: "make it memorable ✦",
    hasTape: true,
    tapeColor: "yellow",
    illustration: <SwatchCardsIllustration />,
  },
  {
    index: "04",
    title: "Marketing & Content",
    description:
      "Impactful marketing campaigns, storytelling, and high-converting content designed to grow your audience and revenue.",
    href: "/services/content-campaigns",
    backSheetColor: "#8E3722", // Terracotta
    backSheetRotation: 6,
    clipAngle: -5,
    annotation: "editorial & loud ↗",
    badge: {
      text: "editorial & loud ↗",
      bgColor: "#FFD84D",
      textColor: "#211F25",
      rotation: 2,
    },
    illustration: <MegaphoneIllustration />,
  },
  {
    index: "05",
    title: "Business Systems & Integrations",
    description:
      "Custom workflow integrations, internal tools, and connected software systems that make your business run effortlessly.",
    href: "/services/business-systems",
    backSheetColor: "#28252F", // Deep Charcoal Ink
    backSheetRotation: -4,
    clipAngle: 4,
    annotation: "everything connects ✦",
    illustration: <PuzzleIllustration />,
  },
  {
    index: "06",
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android applications engineered for fluid user experiences and reliable performance.",
    href: "/services/mobile-app-development",
    backSheetColor: "#7D2B1C", // Terracotta Rust
    backSheetRotation: 5,
    clipAngle: -6,
    annotation: "tilted prototype ✦",
    hasTape: true,
    tapeColor: "pink",
    illustration: <SmartphoneIllustration />,
  },
];

export const TactileServicesShowcase: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent text-ink pt-10 pb-20 md:pt-14 md:pb-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Subtle Right Side Paper Grain Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none hidden xl:block opacity-40">
        <svg viewBox="0 0 40 1000" preserveAspectRatio="none" className="w-full h-full fill-[#A04C34]">
          <path d="M40 0 L15 80 L35 160 L10 240 L38 340 L18 450 L35 560 L12 680 L32 800 L8 920 L40 1000 Z" />
        </svg>
      </div>

      <div className="max-w-agency mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT COLUMN: Editorial Headline & Overview */}
          <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:sticky lg:top-28">
            <div>
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

              {/* Hand-drawn curved sketch arrow */}
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

          {/* RIGHT COLUMN: 3x2 Grid of Tactile Paper Service Compositions */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7 lg:gap-8 pt-4">
              {SERVICES_CONFIG.map((service) => {
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    aria-label={`Explore ${service.title}`}
                    className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded"
                  >
                    {/* Outer Card Wrapper with negative space for top clip */}
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      className="relative pt-7 pb-2 px-1 h-full cursor-pointer overflow-visible"
                    >
                      {/* 1. Background Rotated Paper Sheet */}
                      <motion.div
                        variants={{
                          rest: {
                            rotate: service.backSheetRotation,
                            scale: 1,
                            y: 0,
                          },
                          hover: {
                            rotate:
                              service.backSheetRotation > 0
                                ? service.backSheetRotation + 1.5
                                : service.backSheetRotation - 1.5,
                            scale: 1.015,
                            y: -2,
                          },
                        }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="absolute inset-x-2.5 top-9 bottom-3 rounded-[3px] shadow-[0_12px_28px_rgba(25,10,10,0.18),0_2px_8px_rgba(0,0,0,0.08)] border border-[#211F25]/20"
                        style={{ backgroundColor: service.backSheetColor }}
                        aria-hidden="true"
                      />

                      {/* 2. Top Binder Clip (Clamping the sheets together) */}
                      <motion.div
                        variants={{
                          rest: { y: 0, rotate: service.clipAngle },
                          hover: { y: -3, rotate: service.clipAngle - 1 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute -top-1.5 right-6 sm:right-8 z-30"
                      >
                        <BinderClip angle={0} size="md" />
                      </motion.div>

                      {/* 3. Optional Top Washi Tape Detail */}
                      {service.hasTape && (
                        <WashiTape
                          color={service.tapeColor || "mint"}
                          className="absolute top-5 left-5 z-20"
                          angle={-3}
                        />
                      )}

                      {/* 4. Foreground Main Paper Sheet */}
                      <motion.div
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -6 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative z-10 bg-[#FAF7F2] text-[#211F25] border border-[#211F25]/18 rounded-[3px] shadow-[0_10px_24px_rgba(33,31,37,0.12),0_2px_6px_rgba(33,31,37,0.06)] group-hover:shadow-[0_18px_36px_rgba(33,31,37,0.18),0_4px_12px_rgba(33,31,37,0.08)] transition-shadow duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[460px] h-full overflow-hidden"
                      >
                        {/* Perforated spiral/notepad top edge */}
                        <PerforatedTopEdge bgColor={service.backSheetColor} />

                        {/* Card Content Area */}
                        <div className="p-5 sm:p-6 pt-3 flex flex-col flex-1">
                          {/* Top Meta Bar: Service Number & Annotation */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-xs font-bold tracking-widest text-[#211F25]/60">
                              {service.index} //
                            </span>

                            {service.annotation && (
                              <span className="font-accent text-sm text-terracotta font-bold tracking-wide">
                                {service.annotation}
                              </span>
                            )}
                          </div>

                          {/* Service Title */}
                          <h3 className="font-display text-2xl sm:text-[25px] uppercase leading-[1.08] tracking-tight text-[#211F25] group-hover:text-terracotta transition-colors duration-200 mb-2.5">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="font-primary text-xs sm:text-[13px] text-[#211F25]/75 leading-relaxed font-normal">
                            {service.description}
                          </p>

                          {/* Middle: Distinctive Physical Object / Illustration */}
                          <div className="relative flex items-center justify-center my-auto py-4 min-h-[135px]">
                            {/* Optional sticky note / sticker badge */}
                            {service.badge && (
                              <div
                                className="absolute -top-1 left-1 z-20 px-2 py-0.5 rounded text-[11px] font-bold font-mono uppercase tracking-wider shadow-sm border border-[#211F25]/20"
                                style={{
                                  backgroundColor: service.badge.bgColor,
                                  color: service.badge.textColor,
                                  transform: `rotate(${service.badge.rotation || 0}deg)`,
                                }}
                              >
                                {service.badge.text}
                              </div>
                            )}

                            <div className="transition-transform duration-300 group-hover:scale-105">
                              {service.illustration}
                            </div>
                          </div>

                          {/* Bottom Row Affordance */}
                          <div className="pt-3.5 border-t border-[#211F25]/12 flex items-center justify-between mt-auto">
                            <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#211F25] group-hover:text-terracotta transition-colors">
                              Explore Service
                            </span>

                            <div className="w-8 h-8 rounded-full border border-[#211F25]/20 bg-white/70 flex items-center justify-center transition-all duration-200 group-hover:bg-[#211F25] group-hover:text-white group-hover:border-[#211F25] shrink-0">
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </Link>
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

"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Custom 3D & Tactile SVG Illustrations matching the main Services cards ---

// 01: 3D Laptop with Terracotta Screen & Oddlyyy Asterisk
export const LaptopIllustration: React.FC<{ className?: string }> = ({
  className = "w-36 h-32 sm:w-44 sm:h-38",
}) => (
  <svg
    viewBox="0 0 170 145"
    className={`${className} object-contain select-none pointer-events-none drop-shadow-md`}
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
    {/* Soft shadow */}
    <ellipse cx="80" cy="106" rx="66" ry="7" fill="#202028" opacity="0.12" />
  </svg>
);

// 01 Accessory: Purple Washi Tape
export const WashiTape: React.FC<{ className?: string }> = ({
  className = "absolute -top-3.5 left-6 w-24 h-7",
}) => (
  <div
    className={`${className} bg-[#B596CA]/90 backdrop-blur-[1px] -rotate-8 rounded-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.18)] border-t border-b border-white/40 pointer-events-none z-30`}
    style={{
      clipPath:
        "polygon(2% 0, 98% 0, 100% 20%, 98% 45%, 100% 70%, 98% 100%, 2% 100%, 0 75%, 2% 50%, 0 25%)",
    }}
  />
);

// 02: Cute Robot Mascot Head
export const RobotMascot: React.FC<{ className?: string }> = ({
  className = "absolute -top-10 right-7 z-30",
}) => (
  <div className={`${className} select-none pointer-events-none`}>
    {/* Starburst sparkles */}
    <svg
      className="absolute -top-3 -left-5 w-6 h-6 text-terracotta animate-pulse"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>
    <svg
      className="absolute top-2 -right-4 w-5 h-5 text-terracotta animate-pulse"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 2 L13.5 8.5 L20 12 L13.5 15.5 L12 22 L10.5 15.5 L4 12 L10.5 8.5 Z" />
    </svg>

    <svg
      viewBox="0 0 96 80"
      className="w-22 h-18 sm:w-26 sm:h-22 drop-shadow-xl overflow-visible"
      fill="none"
    >
      {/* Antenna */}
      <path d="M48 24 V10" stroke="#D18770" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="48" cy="8" r="5.5" fill="#FAF3EE" stroke="#D18770" strokeWidth="2.5" />
      {/* Side ears */}
      <rect x="5" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      <rect x="83" y="30" width="8" height="17" rx="4" fill="#D18770" stroke="#A04C34" strokeWidth="1" />
      {/* Head body */}
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
      {/* Visor face */}
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

// 02 Accessory: Curled Page Peel Corner Effect
export const PagePeelCorner: React.FC<{ className?: string }> = ({
  className = "absolute -bottom-[2px] -right-[2px] w-28 h-28 pointer-events-none select-none z-20 overflow-visible",
}) => (
  <div className={className}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible" fill="none">
      {/* Terracotta revealed underneath */}
      <path d="M16 100 L100 16 L100 100 Z" fill="#B34E34" />
      {/* Underlying shadow */}
      <path d="M16 100 Q 52 82 100 16 L 100 100 Z" fill="#1A1513" opacity="0.35" />
      {/* Curled flap */}
      <path
        d="M16 100 C 46 95 78 78 100 16 C 82 58 58 82 16 100 Z"
        fill="url(#curl-grad-detail)"
        stroke="rgba(32,32,40,0.14)"
        strokeWidth="0.8"
      />
      {/* Cylindrical roll highlight */}
      <path
        d="M18 100 C 58 70 70 58 100 18 Q 94 94 18 100 Z"
        fill="url(#curl-back-detail)"
      />
      <defs>
        <linearGradient id="curl-grad-detail" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FAF3EE" />
          <stop offset="100%" stopColor="#DEC2B0" />
        </linearGradient>
        <linearGradient id="curl-back-detail" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F5E4DA" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DFC3B0" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// 03 Accessory: Golden Metallic Paperclip
export const GoldenPaperclip: React.FC<{ className?: string }> = ({
  className = "absolute -top-5 right-7 w-8 h-15 z-30",
}) => (
  <svg
    className={`${className} drop-shadow-md pointer-events-none select-none overflow-visible`}
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

// 03: Tactile Swatch Cards
export const SwatchCardsIllustration: React.FC<{ className?: string }> = ({
  className = "relative w-36 h-36 select-none pointer-events-none",
}) => (
  <div className={className}>
    {/* Back terracotta card */}
    <div className="absolute right-2 bottom-2 w-24 h-26 rounded-2xl bg-[#B34E34] shadow-[0_8px_18px_rgba(0,0,0,0.18)] border border-[#9A3E26] rotate-14 flex items-center justify-center" />
    {/* Front cream card with asterisk */}
    <div className="absolute right-6 bottom-3 w-24 h-26 rounded-2xl bg-[#FAF3EE] shadow-[0_12px_24px_rgba(32,32,40,0.12)] border border-ink/10 -rotate-3 flex items-center justify-center p-3">
      <svg viewBox="0 0 40 40" className="w-12 h-12 text-terracotta" fill="currentColor">
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

// 04: Megaphone with Sound Burst
export const MegaphoneIllustration: React.FC<{ className?: string }> = ({
  className = "w-36 h-32 sm:w-44 sm:h-38",
}) => (
  <svg
    viewBox="0 0 160 140"
    className={`${className} object-contain select-none pointer-events-none drop-shadow-md`}
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

// 05: Interlocking 3D Puzzle Pieces
export const PuzzleIllustration: React.FC<{ className?: string }> = ({
  className = "w-36 h-32 sm:w-44 sm:h-38",
}) => (
  <svg
    viewBox="0 0 160 140"
    className={`${className} object-contain select-none pointer-events-none drop-shadow-md`}
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

// 06: Smartphone with App Screen & Asterisk
export const SmartphoneIllustration: React.FC<{ className?: string }> = ({
  className = "w-36 h-32 sm:w-44 sm:h-38",
}) => (
  <svg
    viewBox="0 0 160 140"
    className={`${className} object-contain select-none pointer-events-none drop-shadow-md`}
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
      {/* Screen gradient waves */}
      <defs>
        <clipPath id="phoneScreenDetail">
          <rect x="4" y="4" width="60" height="106" rx="10" />
        </clipPath>
        <linearGradient id="phoneBgDetail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9ECE3" />
          <stop offset="60%" stopColor="#F0D5C7" />
          <stop offset="100%" stopColor="#D57A5F" />
        </linearGradient>
      </defs>
      <g clipPath="url(#phoneScreenDetail)">
        <rect x="4" y="4" width="60" height="106" fill="url(#phoneBgDetail)" />
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
      {/* Glossy reflection */}
      <path d="M4 4 L64 4 L4 70 Z" fill="white" opacity="0.15" clipPath="url(#phoneScreenDetail)" />
    </g>
  </svg>
);

// 07 / Fallback: The Odd Jobs Ticket & Asterisk Badge
export const OddJobsBadgeIllustration: React.FC<{ className?: string }> = ({
  className = "w-36 h-32 sm:w-44 sm:h-38",
}) => (
  <svg
    viewBox="0 0 160 140"
    className={`${className} object-contain select-none pointer-events-none drop-shadow-md`}
    fill="none"
  >
    <g transform="translate(24, 28) rotate(-6)">
      {/* Outer scalloped badge */}
      <circle cx="56" cy="42" r="38" fill="#B34E34" stroke="#202028" strokeWidth="2" />
      <circle cx="56" cy="42" r="32" fill="#FAF3EE" />
      {/* Asterisk mark */}
      <g transform="translate(56, 42)" fill="#B34E34">
        {[0, 45, 90, 135].map((angle, i) => (
          <rect
            key={i}
            x="-2"
            y="-14"
            width="4"
            height="28"
            rx="2"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="4.5" fill="#B34E34" />
      </g>
    </g>
  </svg>
);

// --- Expanded Service Showcase Card for Section A Hero ---
interface ServiceTactileCardProps {
  slug: string;
  index: string;
  title: string;
  badge?: string;
  className?: string;
}

export const ServiceTactileCard: React.FC<ServiceTactileCardProps> = ({
  slug,
  index,
  title,
  badge = "Custom Craft",
  className = "",
}) => {
  // Select illustration and accessories based on slug
  let mainIllustration = <LaptopIllustration />;
  let topAccessory: React.ReactNode = null;
  let bottomAccessory: React.ReactNode = null;

  switch (slug) {
    case "digital-platforms":
      mainIllustration = <LaptopIllustration />;
      topAccessory = <WashiTape />;
      break;
    case "ai-automation":
      mainIllustration = (
        <div className="w-full h-full flex items-center justify-center pt-4">
          <svg viewBox="0 0 60 60" className="w-16 h-16 text-terracotta/30" fill="none">
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>
      );
      topAccessory = <RobotMascot />;
      bottomAccessory = <PagePeelCorner />;
      break;
    case "brand-identity":
      mainIllustration = <SwatchCardsIllustration />;
      topAccessory = <GoldenPaperclip />;
      break;
    case "content-campaigns":
      mainIllustration = <MegaphoneIllustration />;
      break;
    case "business-systems":
      mainIllustration = <PuzzleIllustration />;
      break;
    case "mobile-app-development":
      mainIllustration = <SmartphoneIllustration />;
      break;
    case "the-odd-jobs":
    default:
      mainIllustration = <OddJobsBadgeIllustration />;
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3.4] sm:aspect-[4/3.3] rounded-3xl bg-[#FAF3EE] border-2 border-ink/15 shadow-[0_16px_36px_rgba(32,32,40,0.08)] p-6 sm:p-7 flex flex-col justify-between overflow-visible group ${className}`}
    >
      {/* Top Accessory (e.g. Washi Tape, Robot Mascot, Paperclip) */}
      {topAccessory}

      {/* Top Card Row */}
      <div className="flex items-start justify-between relative z-10">
        <div>
          <span className="font-mono text-xs font-bold text-terracotta tracking-wider uppercase block">
            {index}
          </span>
          <h2 className="font-primary font-bold text-lg sm:text-xl text-ink tracking-tight mt-0.5 max-w-[220px] leading-tight">
            {title}
          </h2>
        </div>
        <span className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-cream border border-ink/10 text-ink/70 uppercase shrink-0">
          {badge}
        </span>
      </div>

      {/* Center Illustration Area */}
      <div className="relative flex-1 flex items-center justify-center my-2 select-none">
        {mainIllustration}
      </div>

      {/* Bottom Card Row */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-ink/10 text-xs font-mono text-ink/60">
        <span className="flex items-center gap-1.5 text-terracotta font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-ping" />
          Oddlyyy Studio Spec
        </span>
        <span className="text-[11px] uppercase tracking-wider text-ink/40">
          Expanded Card
        </span>
      </div>

      {/* Bottom Accessory (e.g. Page Peel Corner) */}
      {bottomAccessory}
    </motion.div>
  );
};

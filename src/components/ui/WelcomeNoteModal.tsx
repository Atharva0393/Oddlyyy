"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Cute Animated Pencil Character with kawaii blinking eyes, rosy blush, and waving arm
 */
const CutePencilCharacter: React.FC<{ isExiting?: boolean }> = ({ isExiting }) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -20, y: 40 }}
      animate={{
        scale: isExiting ? 0.8 : 1,
        rotate: isExiting ? 15 : 0,
        y: isExiting ? -30 : [0, -10, 0],
      }}
      transition={
        isExiting
          ? { duration: 0.35, ease: "easeInOut" }
          : {
              scale: { type: "spring", damping: 14, stiffness: 180, delay: 0.15 },
              rotate: { type: "spring", damping: 14, stiffness: 180, delay: 0.15 },
              y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
            }
      }
      className="relative w-28 sm:w-32 h-44 sm:h-52 shrink-0 select-none pointer-events-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Subtle 3D gradient for pencil body */}
          <linearGradient id="pencilYellowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="50%" stopColor="#FFD84D" />
            <stop offset="100%" stopColor="#E6B82E" />
          </linearGradient>
          <linearGradient id="pencilWoodGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBF4EA" />
            <stop offset="100%" stopColor="#ECD5B8" />
          </linearGradient>
          <linearGradient id="eraserGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F9A8D4" />
            <stop offset="50%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
          <linearGradient id="ferruleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F3F4F6" />
            <stop offset="50%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
        </defs>

        {/* Dynamic Cast Shadow below pencil */}
        <ellipse cx="60" cy="192" rx="30" ry="6" fill="rgba(34,33,38,0.22)" />

        {/* 1. Pink Eraser Top */}
        <path
          d="M 36 30 C 36 12, 84 12, 84 30 L 84 40 L 36 40 Z"
          fill="url(#eraserGrad)"
          stroke="#222126"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* 2. Metal Ferrule Collar with Ridges */}
        <rect
          x="34"
          y="38"
          width="52"
          height="16"
          rx="2"
          fill="url(#ferruleGrad)"
          stroke="#222126"
          strokeWidth="3"
        />
        <line x1="38" y1="44" x2="82" y2="44" stroke="#6B7280" strokeWidth="1.5" />
        <line x1="38" y1="49" x2="82" y2="49" stroke="#6B7280" strokeWidth="1.5" />

        {/* 3. Main Yellow Pencil Body */}
        <rect
          x="35"
          y="54"
          width="50"
          height="80"
          fill="url(#pencilYellowGrad)"
          stroke="#222126"
          strokeWidth="3"
        />
        {/* Subtle facet lines */}
        <line x1="51" y1="54" x2="51" y2="134" stroke="#E6B82E" strokeWidth="2" />
        <line x1="69" y1="54" x2="69" y2="134" stroke="#FFE98A" strokeWidth="2" />

        {/* 4. Sharpened Wood Cone */}
        <path
          d="M 35 134 L 85 134 L 60 178 Z"
          fill="url(#woodGrad)"
          stroke="#222126"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Wood grain scallops */}
        <path
          d="M 35 134 Q 43 140 51 134 Q 60 140 69 134 Q 77 140 85 134"
          fill="none"
          stroke="#ECD5B8"
          strokeWidth="2"
        />

        {/* 5. Dark Graphite Point */}
        <path
          d="M 52 163 L 68 163 L 60 178 Z"
          fill="#222126"
          stroke="#222126"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Graphite highlight */}
        <circle cx="58" cy="167" r="1.2" fill="#FFFFFF" opacity="0.8" />

        {/* 6. Kawaii Rosy Cheeks */}
        <ellipse cx="45" cy="98" rx="5" ry="3.5" fill="#FB7185" opacity="0.65" />
        <ellipse cx="75" cy="98" rx="5" ry="3.5" fill="#FB7185" opacity="0.65" />

        {/* 7. Cute Kawaii Blinking Eyes */}
        <g className="animate-pencil-blink" style={{ transformOrigin: "60px 88px" }}>
          {/* Left Eye */}
          <circle cx="48" cy="88" r="5" fill="#222126" />
          <circle cx="46.5" cy="86.5" r="1.8" fill="#FFFFFF" />
          <circle cx="50" cy="89.5" r="0.8" fill="#FFFFFF" />

          {/* Right Eye */}
          <circle cx="72" cy="88" r="5" fill="#222126" />
          <circle cx="70.5" cy="86.5" r="1.8" fill="#FFFFFF" />
          <circle cx="74" cy="89.5" r="0.8" fill="#FFFFFF" />
        </g>

        {/* 8. Happy Kawaii Smile */}
        <path
          d="M 55 98 Q 60 104 65 98"
          fill="none"
          stroke="#222126"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 9. Left Arm (Cute hand resting on side) */}
        <path
          d="M 35 90 Q 22 98 28 108"
          fill="none"
          stroke="#222126"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="28" cy="108" r="4.5" fill="#FFD84D" stroke="#222126" strokeWidth="2.5" />

        {/* 10. Right Waving Arm */}
        <g className="animate-pencil-wave" style={{ transformOrigin: "85px 86px" }}>
          <path
            d="M 85 86 Q 102 75 106 62"
            fill="none"
            stroke="#222126"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Waving Hand Mitten */}
          <circle cx="107" cy="59" r="6" fill="#FFD84D" stroke="#222126" strokeWidth="2.5" />
          {/* Wave sparkles */}
          <path d="M 112 50 L 115 47 M 117 56 L 121 56 M 115 63 L 119 66" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  );
};

/**
 * Notice Board Pin Mascot perched atop the note with its own little blinking eyes
 */
const PerchedPinBuddy: React.FC = () => {
  return (
    <div
      className="absolute -top-5 sm:-top-6 right-8 sm:right-12 z-20 select-none pointer-events-none drop-shadow-[0_6px_8px_rgba(0,0,0,0.24)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 46 46" fill="none" className="w-10 h-10 sm:w-11 sm:h-11 overflow-visible">
        {/* Cast shadow */}
        <ellipse cx="23" cy="32" rx="13" ry="5" fill="rgba(34,33,38,0.28)" />

        {/* Pin base collar / rim */}
        <circle cx="23" cy="22" r="16" fill="#7C2D12" />
        <circle cx="23" cy="21.5" r="15" fill="#9A3412" />

        {/* Pin main domed body */}
        <circle cx="23" cy="20" r="13" fill="#C2410C" />

        {/* Pin top bevel layer */}
        <circle cx="23" cy="18" r="10" fill="#EA580C" />

        {/* Specular gloss reflection highlight */}
        <ellipse
          cx="19.5"
          cy="15"
          rx="5.5"
          ry="2.8"
          transform="rotate(-28 19.5 15)"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />

        {/* Kawaii Tiny Eyes on Pin Dome */}
        <circle cx="19" cy="19.5" r="1.6" fill="#222126" />
        <circle cx="18.5" cy="18.8" r="0.6" fill="#FFFFFF" />

        <circle cx="26" cy="19.5" r="1.6" fill="#222126" />
        <circle cx="25.5" cy="18.8" r="0.6" fill="#FFFFFF" />

        {/* Sweet tiny smile */}
        <path
          d="M 21.5 22.5 Q 22.5 24 23.5 22.5"
          fill="none"
          stroke="#222126"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const WelcomeNoteModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the note in this session
    try {
      const hasDismissed = sessionStorage.getItem("oddlyyy_welcome_dismissed");
      if (!hasDismissed) {
        // Appears smoothly within the first 1-2 seconds of opening
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case storage is unavailable, default to showing once
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissing(true);
    try {
      sessionStorage.setItem("oddlyyy_welcome_dismissed", "true");
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsOpen(false);
      setIsDismissing(false);
    }, 450);
  };

  // Allow Esc key to smoothly dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
          {/* 1. Frosted Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isDismissing ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-[#161519]/75 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* 2. Modal Content Container: Centered strictly with respect to the card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{
              opacity: isDismissing ? 0 : 1,
              scale: isDismissing ? 0.9 : 1,
              y: isDismissing ? -20 : 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              type: "spring",
              damping: 22,
              stiffness: 240,
              duration: 0.45,
            }}
            className="relative z-10 w-full max-w-[420px] md:max-w-md my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-note-title"
          >
            {/* Cute Animated Character: Positioned to the left of the card without pushing the card off-center */}
            <div className="absolute z-20 pointer-events-none -top-28 left-2 sm:top-auto sm:left-auto sm:right-full sm:mr-3 md:mr-4 sm:bottom-0">
              <CutePencilCharacter isExiting={isDismissing} />
            </div>

            {/* The Yellow Welcome Note Card */}
            <div className="w-full bg-[#FFF3BD] text-[#222126] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border-2 border-[#222126] shadow-[8px_8px_0px_#222126] relative overflow-visible">
              {/* Notice Board Pin Buddy pinning the note */}
              <PerchedPinBuddy />

              {/* Top Sub-Header Row */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#222126]/15">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A9DCC4]/50 border border-[#1D4A38]/20 text-[#143B2B] text-xs font-mono font-bold tracking-tight">
                  <span className="text-sm leading-none">✳️</span>
                  <span>a tiny note from us</span>
                </div>

                <span className="text-xl select-none" aria-hidden="true">
                  ✏️
                </span>
              </div>

              {/* Main Headline */}
              <div className="pt-4 pb-2">
                <h3
                  id="welcome-note-title"
                  className="font-primary font-bold text-2xl sm:text-[28px] text-[#222126] tracking-tight leading-snug flex items-center gap-2"
                >
                  <span>oh, hi there!</span>
                  <span className="inline-block origin-bottom-right animate-wave select-none">👋</span>
                </h3>
              </div>

              {/* Primary Narrative Message */}
              <div className="space-y-3.5 pt-1 text-sm sm:text-base text-[#222126]/85 font-primary leading-relaxed font-normal">
                <p>
                  We&apos;re Oddlyyy: two young devs with too many ideas, too many tabs open, and a slightly unreasonable love for making cool things.
                </p>

                <p className="font-recoleta italic text-base sm:text-lg text-[#222126] font-normal leading-relaxed pt-1">
                  Glad you found our little corner of the internet. ♡
                </p>
              </div>

              {/* Sign-Off Line */}
              <div className="pt-4 flex items-center justify-between border-t border-[#222126]/12 mt-4 text-xs font-mono text-[#222126]/65 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-terracotta text-sm">•</span>
                  <span>the oddlyyy duo</span>
                  <span className="text-xs">✳️</span>
                </div>
              </div>

              {/* "Let's See" Action Button */}
              <div className="pt-6 sm:pt-7 flex justify-end">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#222126] hover:bg-terracotta text-[#FAF7F2] font-primary font-bold text-sm sm:text-base shadow-[3px_3px_0px_#A04C34] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta active:scale-95 group"
                >
                  <span>Let&apos;s See</span>
                  <span className="text-base font-normal group-hover:translate-x-0.5 transition-transform duration-150">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BinderClipProps {
  color?: string; // Enamel clamp color
  className?: string;
  angle?: number;
  size?: "sm" | "md" | "lg";
}

export const BinderClip: React.FC<BinderClipProps> = ({
  color = "#4E1716",
  className = "",
  angle = 6,
  size = "md",
}) => {
  const sizeMap = {
    sm: "w-10 h-14",
    md: "w-12 h-16 sm:w-14 sm:h-20",
    lg: "w-16 h-22",
  };

  return (
    <div
      className={cn(
        "pointer-events-none select-none z-30 overflow-visible transition-transform duration-300",
        sizeMap[size],
        className
      )}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 76 96"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
      >
        <defs>
          {/* Clamp body 3D metallic enamel gradient */}
          <linearGradient id="binderClampGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7E2824" />
            <stop offset="25%" stopColor="#5E1C19" />
            <stop offset="65%" stopColor="#451312" />
            <stop offset="100%" stopColor="#250908" />
          </linearGradient>

          {/* Wire metallic highlight gradient */}
          <linearGradient id="wireMetalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2B2930" />
            <stop offset="40%" stopColor="#6C6975" />
            <stop offset="60%" stopColor="#E2DFEB" />
            <stop offset="85%" stopColor="#4E4B56" />
            <stop offset="100%" stopColor="#1E1C22" />
          </linearGradient>

          {/* Soft shadow under clamp */}
          <radialGradient id="binderShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1A1412" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#1A1412" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1A1412" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Cast shadow onto paper underneath clamp */}
        <ellipse cx="40" cy="74" rx="26" ry="7" fill="url(#binderShadow)" />

        {/* 2. Rear wire handle (giving 3D dual-handle depth) */}
        <path
          d="M 28 42 C 28 24 31 14 34 8 C 36.5 4 41.5 4 44 8 C 47 14 50 24 50 42"
          stroke="#1F1D24"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* 3. Front wire handle */}
        {/* Dark base stroke */}
        <path
          d="M 26 44 C 26 26 29 16 33 9 C 35.5 4.5 40.5 4.5 43 9 C 47 16 50 26 50 44"
          stroke="url(#wireMetalGrad)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        {/* Specular bright hairline highlight */}
        <path
          d="M 27 44 C 27 27 30 17 33.5 10 C 35.8 6 40.2 6 42.5 10 C 46 17 49 27 49 44"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* 4. Triangular Clamp Body */}
        {/* Main trapezoid metal face */}
        <path
          d="M 15 40 L 61 40 C 63 40 64 41.5 63.2 43.5 L 59 67 C 58.5 69.5 56 71 53.5 71 L 22.5 71 C 20 71 17.5 69.5 17 67 L 12.8 43.5 C 12 41.5 13 40 15 40 Z"
          fill="url(#binderClampGrad)"
          stroke="#250908"
          strokeWidth="1.2"
        />

        {/* Top edge light bevel */}
        <path
          d="M 15 40.5 L 61 40.5"
          stroke="#A8433E"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Diagonal metallic light sheen across clamp body */}
        <path
          d="M 24 41 L 34 41 L 28 70 L 22 70 Z"
          fill="#FFFFFF"
          opacity="0.12"
        />
        <path
          d="M 46 41 L 52 41 L 46 70 L 42 70 Z"
          fill="#FFFFFF"
          opacity="0.08"
        />

        {/* Left rolled bottom hinge cylinder */}
        <rect
          x="14"
          y="65"
          width="12"
          height="8.5"
          rx="4.25"
          fill="#401210"
          stroke="#1F0808"
          strokeWidth="1"
        />
        <ellipse cx="20" cy="69.2" rx="4.5" ry="2.2" fill="#6A221E" />
        <circle cx="20" cy="69.2" r="1.8" fill="#140404" />

        {/* Right rolled bottom hinge cylinder */}
        <rect
          x="50"
          y="65"
          width="12"
          height="8.5"
          rx="4.25"
          fill="#401210"
          stroke="#1F0808"
          strokeWidth="1"
        />
        <ellipse cx="56" cy="69.2" rx="4.5" ry="2.2" fill="#6A221E" />
        <circle cx="56" cy="69.2" r="1.8" fill="#140404" />
      </svg>
    </div>
  );
};


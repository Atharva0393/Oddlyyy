import React from "react";
import { cn } from "@/lib/utils";

export type PinColor = "terracotta" | "yellow" | "blue" | "mint" | "lavender" | "crimson";

interface NoticeBoardPinProps {
  color?: PinColor;
  className?: string;
  angle?: number;
  size?: "sm" | "md" | "lg";
}

export const NoticeBoardPin: React.FC<NoticeBoardPinProps> = ({
  color = "terracotta",
  className = "",
  angle = 0,
  size = "md",
}) => {
  const colorMap: Record<
    PinColor,
    { lo: string; mid: string; hi: string; deep: string }
  > = {
    terracotta: {
      lo: "#9A3412",
      mid: "#C2410C",
      hi: "#FED7AA",
      deep: "#431407",
    },
    yellow: {
      lo: "#92400E",
      mid: "#D97706",
      hi: "#FEF3C7",
      deep: "#451A03",
    },
    blue: {
      lo: "#1D4ED8",
      mid: "#2563EB",
      hi: "#DBEAFE",
      deep: "#1E3A8A",
    },
    mint: {
      lo: "#047857",
      mid: "#059669",
      hi: "#D1FAE5",
      deep: "#064E3B",
    },
    lavender: {
      lo: "#6D28D9",
      mid: "#7C3AED",
      hi: "#EDE9FE",
      deep: "#4C1D95",
    },
    crimson: {
      lo: "#9F1239",
      mid: "#BE123C",
      hi: "#FFE4E6",
      deep: "#4C0519",
    },
  };

  const scheme = colorMap[color] || colorMap.terracotta;

  const sizeClasses = {
    sm: "w-5 h-9",
    md: "w-6 h-11 sm:w-7 sm:h-12",
    lg: "w-8 h-14 sm:w-9 sm:h-16",
  };

  return (
    <div
      className={cn(
        "relative select-none pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.18)]",
        sizeClasses[size],
        className
      )}
      style={angle ? { transform: `rotate(${angle}deg)` } : undefined}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 200" fill="none" className="w-full h-full overflow-visible">
        <defs>
          {/* Shaded Plastic Body Gradient */}
          <linearGradient id={`nbp-side-${color}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={scheme.lo} />
            <stop offset="24%" stopColor={scheme.mid} />
            <stop offset="42%" stopColor={scheme.hi} />
            <stop offset="60%" stopColor={scheme.mid} />
            <stop offset="100%" stopColor={scheme.deep} />
          </linearGradient>

          {/* Domed Cap Radial Highlight */}
          <radialGradient id={`nbp-top-${color}`} cx="38%" cy="30%" r="80%">
            <stop offset="0%" stopColor={scheme.hi} />
            <stop offset="55%" stopColor={scheme.mid} />
            <stop offset="100%" stopColor={scheme.lo} />
          </radialGradient>

          {/* Polished Chrome Needle Gradient */}
          <linearGradient id="nbp-needle" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="38%" stopColor="#F9FAFB" />
            <stop offset="70%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>

        {/* 1. Cast shadow of pin and needle on the paper */}
        <ellipse cx="58" cy="191" rx="14" ry="4.5" fill="rgba(34,33,38,0.20)" />
        <ellipse cx="50" cy="191.5" rx="4.5" ry="1.6" fill="rgba(34,33,38,0.38)" />

        {/* 2. Steel Needle */}
        <path d="M48.3 112h3.4l-.7 76-1 4-1-4z" fill="url(#nbp-needle)" />
        {/* Needle specular highlight */}
        <line x1="49.8" y1="112" x2="49.8" y2="188" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.75" />

        {/* 3. Base Flange: lower cylinder and top ellipse */}
        <path d="M28 103v6.5a22 7 0 0 0 44 0V103z" fill={`url(#nbp-side-${color})`} />
        <ellipse cx="50" cy="103" rx="22" ry="7" fill={`url(#nbp-top-${color})`} />
        <ellipse cx="50" cy="103" rx="21.2" ry="6.4" fill="none" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />

        {/* 4. Waisted Ergonomic Neck */}
        <path
          d="M41.5 38c1.6 16 4.6 26 3 36-1.8 10-13 19-14.6 29h40.2c-1.6-10-12.8-19-14.6-29-1.6-10 1.4-20 3-36z"
          fill={`url(#nbp-side-${color})`}
        />

        {/* 5. Domed Cap: cylinder and top curved cap */}
        <path d="M16 22v14a34 13 0 0 0 68 0V22z" fill={`url(#nbp-side-${color})`} />
        <ellipse cx="50" cy="22" rx="34" ry="13" fill={`url(#nbp-top-${color})`} />
        <ellipse cx="50" cy="22" rx="33" ry="12.3" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />

        {/* 6. Specular Gloss Highlights */}
        {/* Top cap dome highlight */}
        <ellipse cx="37" cy="17.5" rx="12" ry="4.2" fill="#FFFFFF" opacity="0.75" />
        <circle cx="33" cy="15.5" r="2.2" fill="#FFFFFF" opacity="0.95" />

        {/* Neck vertical gloss streak */}
        <path d="M45 50c.8 8 1.6 14 .8 22" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* Flange curved highlight */}
        <path d="M34 104c4 2 9 2.8 14 2" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

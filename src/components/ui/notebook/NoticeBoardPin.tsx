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
    { base: string; body: string; top: string; highlight: string; rim: string }
  > = {
    terracotta: {
      base: "#7C2D12",
      body: "#C2410C",
      top: "#EA580C",
      highlight: "#FFEDD5",
      rim: "#9A3412",
    },
    yellow: {
      base: "#854D0E",
      body: "#D97706",
      top: "#F59E0B",
      highlight: "#FEF3C7",
      rim: "#A16207",
    },
    blue: {
      base: "#1E3A8A",
      body: "#2563EB",
      top: "#3B82F6",
      highlight: "#DBEAFE",
      rim: "#1D4ED8",
    },
    mint: {
      base: "#064E3B",
      body: "#059669",
      top: "#10B981",
      highlight: "#D1FAE5",
      rim: "#047857",
    },
    lavender: {
      base: "#4C1D95",
      body: "#7C3AED",
      top: "#8B5CF6",
      highlight: "#EDE9FE",
      rim: "#6D28D9",
    },
    crimson: {
      base: "#831843",
      body: "#BE123C",
      top: "#E11D48",
      highlight: "#FFE4E6",
      rim: "#9F1239",
    },
  };

  const scheme = colorMap[color] || colorMap.terracotta;

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-7 h-7 sm:w-8 sm:h-8",
    lg: "w-9 h-9 sm:w-10 sm:h-10",
  };

  return (
    <div
      className={cn(
        "relative select-none pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.22)]",
        sizeClasses[size],
        className
      )}
      style={angle ? { transform: `rotate(${angle}deg)` } : undefined}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full overflow-visible">
        {/* Cast shadow onto paper */}
        <ellipse cx="20" cy="27" rx="11" ry="4.5" fill="rgba(34,33,38,0.24)" />
        <ellipse cx="20" cy="26" rx="8" ry="3" fill="rgba(34,33,38,0.18)" />

        {/* Pin base collar / rim */}
        <circle cx="20" cy="19" r="14" fill={scheme.base} />
        <circle cx="20" cy="18.5" r="13" fill={scheme.rim} />

        {/* Pin main domed body */}
        <circle cx="20" cy="17" r="11" fill={scheme.body} />

        {/* Pin top bevel layer */}
        <circle cx="20" cy="15.5" r="8.5" fill={scheme.top} />

        {/* Specular gloss reflection highlight */}
        <ellipse
          cx="17"
          cy="13"
          rx="4.8"
          ry="2.4"
          transform="rotate(-28 17 13)"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />
        <circle cx="15.2" cy="11.8" r="1.3" fill="#FFFFFF" fillOpacity="0.95" />
      </svg>
    </div>
  );
};


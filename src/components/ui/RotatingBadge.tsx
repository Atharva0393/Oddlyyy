"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RotatingBadgeProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  variant?: "cream" | "ink" | "terracotta" | "lavender" | "mint";
  className?: string;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  text = "BE THE EXCEPTION • Oddlyyy • EST. 2024 • ",
  size = "md",
  variant = "cream",
  className,
}) => {
  const sizeClasses = {
    sm: "w-20 h-20 text-[9px]",
    md: "w-28 h-28 text-[11px]",
    lg: "w-36 h-36 text-[13px]",
  };

  const variantClasses = {
    cream: "bg-cream text-ink border-ink/20",
    ink: "bg-ink text-cream border-cream/20",
    terracotta: "bg-terracotta text-cream border-cream/30",
    lavender: "bg-lavender text-ink border-ink/20",
    mint: "bg-mint text-ink border-ink/20",
  };

  return (
    <div
      className={cn(
        "relative rounded-full border flex items-center justify-center select-none shadow-sm group hover:scale-105 transition-transform duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Rotating Circular Text SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow group-hover:[animation-duration:12s]"
        aria-hidden="true"
      >
        <path
          id="badgePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="font-mono uppercase font-bold tracking-[0.2em] fill-current">
          <textPath href="#badgePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
      </div>
    </div>
  );
};


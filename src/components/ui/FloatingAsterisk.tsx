"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingAsteriskProps {
  size?: "xs" | "sm" | "md" | "lg";
  color?: "terracotta" | "ink" | "lavender" | "mint";
  spin?: boolean;
  float?: boolean;
  className?: string;
}

export const FloatingAsterisk: React.FC<FloatingAsteriskProps> = ({
  size = "md",
  color = "terracotta",
  spin = true,
  float = false,
  className,
}) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorClasses = {
    terracotta: "text-terracotta",
    ink: "text-ink",
    lavender: "text-lavender-dark",
    mint: "text-mint-dark",
  };

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center pointer-events-none select-none",
        spin && "animate-spin-slow",
        float && "animate-float-gentle",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
      >
        {/* 8-point expressive asterisk */}
        <path d="M10.5 0h3v8.5l6-6 2.1 2.1-6 6H24v3h-8.4l6 6-2.1 2.1-6-6V24h-3v-8.4l-6 6L2.4 19.5l6-6H0v-3h8.4l-6-6L4.5 2.4l6 6V0z" />
      </svg>
    </span>
  );
};


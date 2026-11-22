import React from "react";
import { cn } from "@/lib/utils";

interface HandAnnotationProps {
  children: React.ReactNode;
  arrow?:
    | "down"
    | "down-left"
    | "down-right"
    | "up-left"
    | "up-right"
    | "right"
    | "left"
    | "none";
  color?: string;
  className?: string;
  rotate?: number;
}

export const HandAnnotation: React.FC<HandAnnotationProps> = ({
  children,
  arrow = "none",
  color = "text-terracotta",
  className,
  rotate = 0,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-accent text-base sm:text-lg select-none pointer-events-none",
        color,
        className
      )}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <span>{children}</span>
      {arrow === "down" && (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M9 1V17M9 17L3 11M9 17L15 11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "down-right" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M4 6C8 6 17 8 18 18M18 18L11 15M18 18L17 11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "down-left" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M20 6C16 6 7 8 6 18M6 18L13 15M6 18L7 11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "up-right" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M5 19C10 19 18 16 19 6M19 6L12 9M19 6L18 13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "right" && (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M1 7H17M17 7L11 1M17 7L11 13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "left" && (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          className="stroke-current stroke-2 shrink-0"
        >
          <path
            d="M19 7H3M3 7L9 1M3 7L9 13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

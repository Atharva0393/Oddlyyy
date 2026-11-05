import React from "react";
import { cn } from "@/lib/utils";

export interface HandwrittenNoteProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  color?: "terracotta" | "ink";
  rotate?: "left" | "right" | "none";
  className?: string;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  direction = "left",
  color = "terracotta",
  rotate = "left",
  className,
}) => {
  const rotationClasses = {
    left: "-rotate-2",
    right: "rotate-2",
    none: "rotate-0",
  };

  const colorClasses = {
    terracotta: "text-terracotta",
    ink: "text-ink",
  };

  const arrowDoodles = {
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
    none: "",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-accent text-lg md:text-xl font-medium select-none leading-none tracking-normal",
        rotationClasses[rotate],
        colorClasses[color],
        className
      )}
    >
      {(direction === "left" || direction === "up") && (
        <span className="text-xl inline-block -translate-y-0.5">
          {arrowDoodles[direction]}
        </span>
      )}
      <span>{children}</span>
      {(direction === "right" || direction === "down") && (
        <span className="text-xl inline-block -translate-y-0.5">
          {arrowDoodles[direction]}
        </span>
      )}
    </span>
  );
};


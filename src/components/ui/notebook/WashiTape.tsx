import React from "react";
import { cn } from "@/lib/utils";

interface WashiTapeProps {
  color?: "mint" | "yellow" | "pink" | "blue" | "lavender" | "white";
  className?: string;
  angle?: number;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = "mint",
  className,
  angle = -3,
}) => {
  const colorStyles = {
    mint: "bg-[#A9DCC4]/85 border-t border-b border-[#8ACAB0]/40",
    yellow: "bg-[#FFD84D]/85 border-t border-b border-[#E5C235]/40",
    pink: "bg-[#F3B5CB]/85 border-t border-b border-[#DB9DB3]/40",
    blue: "bg-[#8299E8]/85 border-t border-b border-[#6B83D4]/40",
    lavender: "bg-[#D6D0F9]/85 border-t border-b border-[#BEB7EA]/40",
    white: "bg-white/85 border-t border-b border-black/10",
  };

  return (
    <div
      className={cn(
        "h-4 w-16 sm:w-20 shadow-sm pointer-events-none backdrop-blur-[0.5px] z-20",
        colorStyles[color],
        className
      )}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      aria-hidden="true"
    />
  );
};

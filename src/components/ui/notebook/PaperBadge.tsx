import React from "react";
import { cn } from "@/lib/utils";

interface PaperBadgeProps {
  children: React.ReactNode;
  color?: "yellow" | "mint" | "pink" | "blue" | "lavender" | "ink" | "paper";
  className?: string;
  icon?: React.ReactNode;
  rotate?: number;
}

export const PaperBadge: React.FC<PaperBadgeProps> = ({
  children,
  color = "yellow",
  className,
  icon,
  rotate = 0,
}) => {
  const colorMap = {
    yellow: "bg-[#FFD84D] text-[#222126] border-[#222126]",
    mint: "bg-[#A9DCC4] text-[#222126] border-[#222126]",
    pink: "bg-[#F3B5CB] text-[#222126] border-[#222126]",
    blue: "bg-[#8299E8] text-white border-[#222126]",
    lavender: "bg-[#D6D0F9] text-[#222126] border-[#222126]",
    ink: "bg-[#222126] text-[#F7F6F0] border-[#222126]",
    paper: "bg-[#FAF7F2] text-[#222126] border-[#222126]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider border rounded-full shadow-[2px_2px_0px_#222126] transition-transform hover:-translate-y-0.5",
        colorMap[color],
        className
      )}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

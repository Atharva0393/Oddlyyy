import React from "react";
import { cn } from "@/lib/utils";

interface SmileyStampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SmileyStamp: React.FC<SmileyStampProps> = ({
  className,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-[#FFD84D] border-2 border-[#222126] flex items-center justify-center shadow-[3px_3px_0px_#222126] select-none shrink-0 transition-transform hover:scale-105",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-3/4 h-3/4 text-[#222126] stroke-current"
      >
        <circle cx="17" cy="19" r="2.5" fill="#222126" stroke="none" />
        <circle cx="31" cy="19" r="2.5" fill="#222126" stroke="none" />
        <path
          d="M16 28C18 33 30 33 32 28"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

import React from "react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

interface YellowNoteProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  rotate?: number;
  hasTape?: boolean;
  tapeColor?: "mint" | "pink" | "blue" | "lavender" | "white";
}

export const YellowNote: React.FC<YellowNoteProps> = ({
  children,
  title,
  className,
  rotate = -1,
  hasTape = true,
  tapeColor = "mint",
}) => {
  return (
    <div
      className={cn(
        "relative p-5 sm:p-6 bg-[#FFD84D] text-[#222126] border border-[#222126] shadow-[4px_4px_0px_#222126] transition-transform hover:rotate-0 duration-200",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {hasTape && (
        <WashiTape
          color={tapeColor}
          className="absolute -top-2.5 left-6"
          angle={-2}
        />
      )}
      {title && (
        <h4 className="font-display text-xl sm:text-2xl tracking-wide uppercase mb-2 border-b border-[#222126]/20 pb-1">
          {title}
        </h4>
      )}
      <div className="font-accent text-lg sm:text-xl leading-relaxed">
        {children}
      </div>
    </div>
  );
};


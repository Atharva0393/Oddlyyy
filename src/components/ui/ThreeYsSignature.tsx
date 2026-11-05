"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { threeYsMotif } from "@/content/brand";

export interface ThreeYsSignatureProps {
  variant?: "horizontal" | "stacked" | "compact";
  isDark?: boolean;
  className?: string;
}

export const ThreeYsSignature: React.FC<ThreeYsSignatureProps> = ({
  variant = "horizontal",
  isDark = false,
  className,
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 p-1 rounded-full border text-xs font-mono select-none",
          isDark
            ? "bg-ink/80 border-cream/20 text-cream"
            : "bg-cream/90 border-ink/20 text-ink",
          className
        )}
      >
        <span className="px-2 py-0.5 rounded-full bg-terracotta text-cream font-bold text-[10px]">
          THE 3 Y&apos;S
        </span>
        <span className="font-primary font-bold tracking-widest px-1">
          <span className="text-terracotta hover:scale-125 inline-block transition-transform cursor-pointer" title="WHY. (Curiosity)">
            Y
          </span>
          <span className="text-ink/40 dark:text-cream/40 mx-0.5">&bull;</span>
          <span className="hover:text-terracotta hover:scale-125 inline-block transition-transform cursor-pointer" title="WHY NOT. (Unconventional Thinking)">
            Y
          </span>
          <span className="text-ink/40 dark:text-cream/40 mx-0.5">&bull;</span>
          <span className="hover:text-terracotta hover:scale-125 inline-block transition-transform cursor-pointer" title="WHY SETTLE. (High Standards)">
            Y
          </span>
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 sm:p-5 transition-all duration-300",
        isDark
          ? "bg-cream/5 border-cream/15 text-cream"
          : "bg-cream/80 border-ink/15 text-ink shadow-sm",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-current/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold">
            The Three Y&apos;s Motif
          </span>
        </div>
        <span className="text-[11px] font-mono opacity-60">
          Secondary Brand Storytelling Engine
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
        {threeYsMotif.map((item, idx) => (
          <div
            key={item.letter}
            onMouseEnter={() => setActiveIdx(idx)}
            onMouseLeave={() => setActiveIdx(null)}
            className={cn(
              "p-3 rounded-xl border transition-all duration-200 cursor-default",
              activeIdx === idx
                ? "border-terracotta bg-terracotta/10 -translate-y-0.5 shadow-sm"
                : isDark
                ? "border-cream/10 bg-cream/[0.02]"
                : "border-ink/10 bg-cream"
            )}
          >
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-primary font-bold text-xl sm:text-2xl text-terracotta tracking-tight">
                {item.question}
              </span>
              <span className="font-mono text-[10px] uppercase font-bold opacity-60">
                {item.letter}
              </span>
            </div>
            <span className="font-mono text-xs block font-semibold opacity-90 mb-1">
              {item.pillar}
            </span>
            <p className="text-xs opacity-75 font-primary leading-relaxed">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


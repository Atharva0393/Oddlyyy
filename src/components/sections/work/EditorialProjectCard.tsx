"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EditorialProjectCardProps {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  ctaColor?: string;
  borderColor?: string;
  index: number;
  className?: string;
}

export const EditorialProjectCard: React.FC<EditorialProjectCardProps> = ({
  slug,
  title,
  category,
  description,
  image,
  bgColor,
  textColor,
  accentColor,
  ctaColor,
  borderColor = "border-ink/10",
  index,
  className,
}) => {
  const isChessProject = slug === "the-chess-project";

  return (
    <article
      className={cn(
        "group relative w-full rounded-3xl lg:rounded-[36px] border transition-all duration-300",
        bgColor,
        textColor,
        borderColor,
        // Internal padding: 64–76px on desktop, proportional on tablet/mobile
        "p-6 sm:p-10 md:p-12 lg:px-[clamp(64px,5vw,76px)] lg:py-[clamp(64px,5.5vh,76px)]",
        // Substantial editorial height: 76–80vh, min 680px, max 820px on desktop
        "min-h-[520px] sm:min-h-[600px] lg:h-[clamp(680px,78vh,820px)]",
        "flex flex-col justify-center",
        "shadow-xl",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full my-auto">
        {/* Left Column: Text (~42-45% width on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 max-w-xl">
          {/* 1. Small Category Label */}
          <span
            className={cn(
              "font-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]",
              accentColor
            )}
          >
            {category}
          </span>

          {/* 2. Bold Project Title */}
          <h2 className="font-primary font-bold text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl tracking-tight leading-[1.06]">
            <Link
              href={`/work/${slug}`}
              className="hover:opacity-85 transition-opacity inline-block"
            >
              {title}
            </Link>
          </h2>

          {/* 3. Short Supporting Description */}
          <p className="font-primary font-normal text-sm sm:text-base lg:text-[1.06rem] leading-relaxed opacity-85 max-w-lg">
            {description}
          </p>

          {/* 4. Minimal Project Link / Arrow */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={`/work/${slug}`}
              className={cn(
                "inline-flex items-center gap-2 font-primary font-semibold text-sm sm:text-base group/cta transition-colors",
                ctaColor || "hover:text-terracotta"
              )}
            >
              <span className="underline underline-offset-4 decoration-current/35 group-hover/cta:decoration-current transition-colors">
                View project
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dominant Project Visual (~55-58% width on desktop, 480–540px high) */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <Link
            href={`/work/${slug}`}
            className="group/img block relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[clamp(460px,52vh,540px)] rounded-2xl lg:rounded-3xl overflow-hidden bg-cream/20 border border-current/10 shadow-sm"
          >
            {isChessProject ? (
              <div className="relative w-full h-full bg-[#FFFFFF] rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between text-[#111113] select-none transition-transform duration-700 ease-out group-hover/img:scale-[1.02]">
                {/* Brand Header Bar: User SVG Logo + 'thechessproject' title matching first image */}
                <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-4 sm:pb-5">
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    {/* User-supplied SVG brand logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0 shadow-sm rounded-lg"
                      aria-label="The Chess Project Brand Logo"
                    >
                      <rect x="0" y="0" width="100" height="100" rx="22" fill="#FF4D4D" />
                      <rect x="33" y="24" width="12" height="36" rx="6" fill="#111113" />
                      <rect x="55" y="24" width="12" height="36" rx="6" fill="#111113" />
                      <rect x="33" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                      <rect x="55" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                    </svg>
                    {/* User-specified title matching first image: 'thechessproject' */}
                    <span className="font-primary font-bold text-lg sm:text-xl md:text-2xl text-[#111113] tracking-tight">
                      thechessproject
                    </span>
                  </div>

                  <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[9px] sm:text-xs font-mono font-medium text-[#111113]/70 tracking-wider uppercase">
                    PREMIUM CHESS TRAINING
                  </span>
                </div>

                {/* Central Headline Content */}
                <div className="my-auto py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-xl">
                  <h3 className="font-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem] text-[#111113] tracking-tight leading-[1.12]">
                    Every move has a reason. We teach you to see it.
                  </h3>
                  <p className="font-primary text-xs sm:text-sm md:text-base lg:text-[1.05rem] text-[#111113]/70 leading-relaxed max-w-lg font-normal">
                    Masterclass chess courses and 1-on-1 personalized coaching from FIDE-titled masters.
                  </p>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#111113]/50 border-t border-black/[0.06] pt-3.5 sm:pt-4">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    thechessproject.com
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-1 bg-[#FF4D4D] rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src={image}
                alt={`${title} project showcase`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority={index < 2}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.025]"
              />
            )}
          </Link>
        </div>
      </div>
    </article>
  );
};

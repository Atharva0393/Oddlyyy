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
        "group relative w-full rounded-2xl lg:rounded-[28px] border transition-all duration-300",
        bgColor,
        textColor,
        borderColor,
        // Internal padding reduced by ~25%
        "p-5 sm:p-7 md:p-8 lg:px-[clamp(44px,3.8vw,56px)] lg:py-[clamp(44px,4vh,54px)]",
        // Editorial height reduced by ~25%
        "min-h-[390px] sm:min-h-[450px] lg:h-[clamp(510px,58vh,615px)]",
        "flex flex-col justify-center",
        "shadow-xl",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center w-full my-auto">
        {/* Left Column: Text (~42-45% width on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-4 max-w-lg">
          {/* 1. Small Category Label */}
          <span
            className={cn(
              "font-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]",
              accentColor
            )}
          >
            {category}
          </span>

          {/* 2. Bold Project Title */}
          <h2 className="font-primary font-bold text-xl sm:text-3xl lg:text-[2.1rem] xl:text-4xl tracking-tight leading-[1.08]">
            <Link
              href={`/work/${slug}`}
              className="hover:opacity-85 transition-opacity inline-block"
            >
              {title}
            </Link>
          </h2>

          {/* 3. Short Supporting Description */}
          <p className="font-primary font-normal text-xs sm:text-sm lg:text-[0.94rem] leading-relaxed opacity-85 max-w-md">
            {description}
          </p>

          {/* 4. Minimal Project Link / Arrow */}
          <div className="pt-1.5 sm:pt-2.5">
            <Link
              href={`/work/${slug}`}
              className={cn(
                "inline-flex items-center gap-1.5 font-primary font-semibold text-xs sm:text-sm group/cta transition-colors",
                ctaColor || "hover:text-terracotta"
              )}
            >
              <span className="underline underline-offset-4 decoration-current/35 group-hover/cta:decoration-current transition-colors">
                View project
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Dominant Project Visual (~55-58% width on desktop) */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <Link
            href={`/work/${slug}`}
            className="group/img block relative w-full h-[210px] sm:h-[270px] md:h-[315px] lg:h-[clamp(345px,39vh,405px)] rounded-xl lg:rounded-2xl overflow-hidden bg-cream/20 border border-current/10 shadow-sm"
          >
            {isChessProject ? (
              <div className="relative w-full h-full bg-[#FFFFFF] rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-7 lg:p-8 flex flex-col justify-between text-[#111113] select-none transition-transform duration-700 ease-out group-hover/img:scale-[1.02]">
                {/* Brand Header Bar: User SVG Logo + 'thechessproject' title matching first image */}
                <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-3 sm:pb-3.5">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {/* User-supplied SVG brand logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0 shadow-sm rounded-lg"
                      aria-label="The Chess Project Brand Logo"
                    >
                      <rect x="0" y="0" width="100" height="100" rx="22" fill="#FF4D4D" />
                      <rect x="33" y="24" width="12" height="36" rx="6" fill="#111113" />
                      <rect x="55" y="24" width="12" height="36" rx="6" fill="#111113" />
                      <rect x="33" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                      <rect x="55" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                    </svg>
                    {/* User-specified title matching first image: 'thechessproject' */}
                    <span className="font-primary font-bold text-base sm:text-lg md:text-xl text-[#111113] tracking-tight">
                      thechessproject
                    </span>
                  </div>
                </div>

                {/* Central Headline Content */}
                <div className="my-auto py-2 sm:py-3 space-y-2 sm:space-y-3 max-w-lg">
                  <h3 className="font-primary font-bold text-base sm:text-xl md:text-2xl lg:text-[1.45rem] xl:text-[1.6rem] text-[#111113] tracking-tight leading-[1.14]">
                    Every move has a reason. We teach you to see it.
                  </h3>
                  <p className="font-primary text-xs sm:text-[13px] md:text-sm lg:text-[0.9rem] text-[#111113]/70 leading-relaxed max-w-md font-normal">
                    Masterclass chess courses and 1-on-1 personalized coaching from FIDE-titled masters.
                  </p>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#111113]/50 border-t border-black/[0.06] pt-2.5 sm:pt-3">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    thechessproject.com
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-1 bg-[#FF4D4D] rounded-full" />
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

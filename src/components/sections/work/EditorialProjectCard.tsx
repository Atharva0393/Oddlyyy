"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  borderColor?: string;
  ctaColor?: string;
  badgeNote?: string;
}

export interface EditorialProjectCardProps {
  project: ProjectCardData;
  index: number;
  className?: string;
}

export const EditorialProjectCard: React.FC<EditorialProjectCardProps> = ({
  project,
  index,
  className,
}) => {
  const {
    slug,
    number,
    title,
    category,
    description,
    image,
    bgColor,
    textColor,
    accentColor,
    borderColor = "border-ink/15",
    ctaColor,
    badgeNote,
  } = project;

  const isChess = slug === "the-chess-project";
  const isYachts = slug === "chicago-yachts";
  const isMeraki = slug === "meraki-designs";
  const isPayzero = slug === "payzero";

  const visualBg = isChess
    ? "bg-white"
    : isYachts
    ? "bg-[#0D121D]"
    : isMeraki
    ? "bg-[#E2EBE5]"
    : "bg-[#FFF8EF]";

  return (
    <article
      className={cn(
        "group relative w-full rounded-2xl lg:rounded-[28px] border transition-all duration-300",
        bgColor,
        textColor,
        borderColor,
        "p-6 sm:p-8 lg:p-9",
        "min-h-[460px] sm:min-h-[500px] lg:h-[530px] xl:h-[550px]",
        "flex flex-col justify-between",
        "shadow-[0_12px_36px_rgba(32,32,40,0.08),0_2px_8px_rgba(32,32,40,0.04)]",
        className
      )}
    >
      {/* 1. Header Row: Number + Category Label + Explore Link */}
      <div className="flex items-center justify-between gap-4 border-b border-current/10 pb-4 mb-4 sm:mb-5">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span
            className={cn(
              "font-mono text-xs font-bold tracking-wider px-2.5 py-0.5 rounded-full",
              isYachts ? "bg-white/10 text-white/90" : "bg-black/5 text-ink/80"
            )}
          >
            {number}
          </span>
          <span
            className={cn(
              "font-primary text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]",
              accentColor
            )}
          >
            {category}
          </span>
        </div>

        <Link
          href={`/work/${slug}`}
          className={cn(
            "inline-flex items-center gap-1.5 font-primary text-xs sm:text-sm font-semibold group/link transition-colors shrink-0",
            ctaColor || "hover:text-terracotta"
          )}
          aria-label={`Explore ${title} project`}
        >
          <span className="underline underline-offset-4 decoration-current/35 group-hover/link:decoration-current transition-colors">
            Explore Project
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>

      {/* 2. Project Title and Concise Description */}
      <div className="space-y-2 mb-4 sm:mb-6">
        <h2 className="font-primary font-bold text-2xl sm:text-3xl lg:text-[1.85rem] xl:text-[2.1rem] tracking-tight leading-[1.08]">
          <Link
            href={`/work/${slug}`}
            className="hover:opacity-85 transition-opacity inline-block"
          >
            {title}
          </Link>
        </h2>
        <p className="font-primary text-xs sm:text-sm lg:text-[0.92rem] leading-relaxed opacity-85 max-w-2xl font-normal">
          {description}
        </p>
      </div>

      {/* 3. Large Visually Dominant Project Showcase Canvas */}
      <div
        className={cn(
          "relative w-full h-[220px] sm:h-[270px] lg:h-[300px] xl:h-[315px] rounded-xl lg:rounded-2xl overflow-hidden border border-current/10 shadow-sm mt-auto",
          visualBg
        )}
      >
        <Link
          href={`/work/${slug}`}
          className="group/img block relative w-full h-full"
          tabIndex={-1}
          aria-hidden="true"
        >
          {isChess ? (
            /* Bespoke The Chess Project Digital Platform Experience */
            <div className="relative w-full h-full bg-[#FFFFFF] p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between text-[#111113] select-none transition-transform duration-500 ease-out group-hover/img:scale-[1.015]">
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-2.5 sm:pb-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 shadow-sm rounded-lg"
                    aria-label="The Chess Project Brand Logo"
                  >
                    <rect x="0" y="0" width="100" height="100" rx="22" fill="#FF4D4D" />
                    <rect x="33" y="24" width="12" height="36" rx="6" fill="#111113" />
                    <rect x="55" y="24" width="12" height="36" rx="6" fill="#111113" />
                    <rect x="33" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                    <rect x="55" y="66" width="12" height="12" rx="3" fill="#FFFFFF" />
                  </svg>
                  <span className="font-primary font-bold text-base sm:text-lg text-[#111113] tracking-tight">
                    thechessproject
                  </span>
                </div>
              </div>

              {/* Central Statement */}
              <div className="my-auto py-2 space-y-2 max-w-lg">
                <h3 className="font-primary font-bold text-base sm:text-xl lg:text-[1.35rem] text-[#111113] tracking-tight leading-[1.16]">
                  Every move has a reason. We teach you to see it.
                </h3>
                <p className="font-primary text-xs sm:text-[13px] text-[#111113]/70 leading-relaxed font-normal">
                  Masterclass chess courses and 1-on-1 personalized coaching from FIDE-titled masters.
                </p>
              </div>

              {/* Live Domain Footer */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#111113]/55 border-t border-black/[0.06] pt-2">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  thechessproject.com
                </span>
                <span className="w-5 h-1 bg-[#FF4D4D] rounded-full" />
              </div>
            </div>
          ) : isPayzero ? (
            /* Payzero Solar Engineering Clean Presentation */
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 transition-transform duration-700 ease-out group-hover/img:scale-[1.02]">
              <Image
                src={image}
                alt={`${title} solar engineering showcase`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-3 sm:p-5"
              />
              {badgeNote && (
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider bg-white/90 text-ink/90 border border-ink/15 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>{badgeNote}</span>
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Photographic Cover Showcases for Meraki & Chicago Yachts */
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image}
                alt={`${title} project showcase`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={index < 2}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
              />

              {/* Contextual Badge Overlay */}
              {badgeNote && (
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider backdrop-blur-md border shadow-sm",
                      isYachts
                        ? "bg-black/60 text-white/90 border-white/20"
                        : "bg-white/80 text-ink/90 border-ink/15"
                    )}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>{badgeNote}</span>
                  </span>
                </div>
              )}
            </div>
          )}
        </Link>
      </div>
    </article>
  );
};

"use client";

import React from "react";
import {
  EditorialProjectCard,
  type ProjectCardData,
} from "@/components/sections/work/EditorialProjectCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { cn } from "@/lib/utils";

const editorialProjects: ProjectCardData[] = [
  {
    id: "the-chess-project",
    slug: "the-chess-project",
    title: "The Chess Project",
    category: "EDTECH / DIGITAL PLATFORM",
    description:
      "A premium chess education platform connecting ambitious players with expert coaches, structured courses and personalized training.",
    image: "/images/projects/the-chess-project-cover.png",
    bgColor: "bg-lavender",
    textColor: "text-ink",
    accentColor: "text-terracotta",
    borderColor: "border-ink/15",
    ctaColor: "text-ink hover:text-terracotta",
    badgeNote: "Interactive Learning Ecosystem",
  },
  {
    id: "meraki-designs",
    slug: "meraki-designs",
    title: "Meraki Designs",
    category: "ARCHITECTURE / DIGITAL EXPERIENCE",
    description:
      "An elegant digital presence for an architecture and design studio, built to showcase spaces, ideas and thoughtful craftsmanship.",
    image: "/images/projects/meraki-designs-cover.webp",
    bgColor: "bg-mint",
    textColor: "text-ink",
    accentColor: "text-terracotta",
    borderColor: "border-ink/15",
    ctaColor: "text-ink hover:text-terracotta",
    badgeNote: "UK Architecture & Interior Studio",
  },
  {
    id: "chicago-yachts",
    slug: "chicago-yachts",
    title: "Chicago Yachts",
    category: "LUXURY HOSPITALITY / BOOKING PLATFORM",
    description:
      "A luxury yacht charter experience combining immersive presentation with a custom booking platform.",
    image: "/images/projects/chicago-yachts-cover.png",
    bgColor: "bg-[#161B26]",
    textColor: "text-[#F5F2EB]",
    accentColor: "text-lavender",
    borderColor: "border-white/10",
    ctaColor: "text-[#F5F2EB] hover:text-lavender",
    badgeNote: "Direct Fleet Booking Platform",
  },
  {
    id: "payzero",
    slug: "payzero",
    title: "Payzero",
    category: "RENEWABLE ENERGY / CORPORATE WEBSITE",
    description:
      "A modern digital experience helping a solar EPC company communicate its solutions and generate enquiries.",
    image: "/images/projects/payzero-cover.png",
    bgColor: "bg-[#FFF9F3]",
    textColor: "text-ink",
    accentColor: "text-terracotta",
    borderColor: "border-ink/15",
    ctaColor: "text-ink hover:text-terracotta",
    badgeNote: "Full-Service Solar EPC Platform",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-paper bg-notebook-ruled text-ink">
      {/* =========================================================================
          TWO-COLUMN SCROLL-DRIVEN SHOWCASE
          Left Column: Fixed / Sticky Editorial Introduction (36% width on lg+)
          Right Column: 4 Stacking Project Cards (64% width on lg+)
          ========================================================================= */}
      <section className="relative w-full border-b border-ink/10 pt-8 sm:pt-12 lg:pt-14 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 xl:gap-20">
            {/* -------------------------------------------------------------------
                LEFT COLUMN : STICKY EDITORIAL INTRODUCTION
                ------------------------------------------------------------------- */}
            <aside className="w-full lg:w-[38%] xl:w-[35%] shrink-0 lg:sticky lg:top-28 xl:top-32 self-start lg:h-[530px] xl:h-[550px] flex flex-col justify-center space-y-6 lg:space-y-7">
              {/* Main Heading */}
              <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-ink leading-[1.04]">
                Work that does{" "}
                <span className="font-recoleta italic text-terracotta font-normal block mt-1">
                  the talking.
                </span>
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg lg:text-[1.15rem] text-ink/75 leading-relaxed font-primary font-normal max-w-md pt-1">
                Different industries. Different challenges. One stubborn belief:
                there is always a more interesting way.
              </p>

              {/* Decorative Handwritten Annotation with Arrow */}
              <div className="pt-2 sm:pt-4 flex items-center gap-3 text-terracotta select-none">
                <svg
                  width="42"
                  height="30"
                  viewBox="0 0 48 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 -rotate-12 opacity-85"
                  aria-hidden="true"
                >
                  <path d="M 6 6 C 14 18, 28 26, 40 28" />
                  <path d="M 32 20 L 40 28 L 34 34" />
                </svg>
                <span className="font-caveat text-xl sm:text-2xl font-medium tracking-wide">
                  scroll to reveal projects
                </span>
              </div>
            </aside>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN : 4 STACKING PROJECT CARDS
                ------------------------------------------------------------------- */}
            <div className="w-full lg:w-[62%] xl:w-[65%] relative lg:pb-[22vh]">
              <div className="space-y-8 sm:space-y-12 lg:space-y-0">
                {editorialProjects.map((project, index) => {
                  // Controlled vertical stacking offsets on desktop:
                  // Each successive card sticks slightly lower (10px increment),
                  // allowing a tactile layered index-card stack without clipping any headers
                  const topOffsetClass =
                    index === 0
                      ? "lg:top-28 xl:top-32"
                      : index === 1
                      ? "lg:top-[calc(7rem+10px)] xl:top-[calc(8rem+10px)]"
                      : index === 2
                      ? "lg:top-[calc(7rem+20px)] xl:top-[calc(8rem+20px)]"
                      : "lg:top-[calc(7rem+30px)] xl:top-[calc(8rem+30px)]";

                  // Scroll pacing between cards:
                  // 32vh of comfortable scroll margin gives ample time to appreciate each project
                  const spacingClass =
                    index < 3
                      ? "lg:mb-[32vh]"
                      : "lg:mb-0";

                  return (
                    <div
                      key={project.id}
                      className={cn(
                        "relative lg:sticky transition-all duration-300",
                        topOffsetClass,
                        spacingClass
                      )}
                      style={{
                        zIndex: index + 10,
                      }}
                    >
                      <EditorialProjectCard
                        project={project}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CALL TO ACTION
          ========================================================================= */}
      <CtaSection
        id="work-enquiry-cta"
        title={
          <>
            Have a project that demands{" "}
            <span className="font-recoleta italic text-terracotta font-normal block sm:inline">
              unconventional craft?
            </span>
          </>
        }
        primaryButtonLabel="Start an engagement →"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Review studio disciplines"
        secondaryButtonHref="/services"
      />
    </div>
  );
}

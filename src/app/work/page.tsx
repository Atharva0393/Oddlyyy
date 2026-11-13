"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Badge,
  HandwrittenNote,
  PrimaryButton,
  SecondaryButton,
  RotatingBadge,
  StackingCards,
  StackingCardItem,
} from "@/components/ui";
import { EditorialProjectCard } from "@/components/sections/work/EditorialProjectCard";

const editorialProjects = [
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
    ctaColor: "text-ink hover:text-terracotta",
    borderColor: "border-ink/15",
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
    ctaColor: "text-ink hover:text-terracotta",
    borderColor: "border-ink/15",
  },
  {
    id: "chicago-yachts",
    slug: "chicago-yachts",
    title: "Chicago Yachts",
    category: "LUXURY / BOOKING PLATFORM",
    description:
      "A refined digital booking experience for luxury yacht charters on the Chicago waterfront.",
    image: "/images/projects/chicago-yachts-cover.png",
    bgColor: "bg-terracotta",
    textColor: "text-cream",
    accentColor: "text-lavender",
    ctaColor: "text-cream hover:text-lavender",
    borderColor: "border-terracotta",
  },
  {
    id: "payzero",
    slug: "payzero",
    title: "Payzero Solar",
    category: "RENEWABLE ENERGY / CORPORATE WEBSITE",
    description:
      "A modern digital presence for a solar energy company, designed to communicate its services and turn interest into enquiries.",
    image: "/images/projects/payzero-cover.png",
    bgColor: "bg-[#FAF3EE]",
    textColor: "text-ink",
    accentColor: "text-terracotta",
    ctaColor: "text-ink hover:text-terracotta",
    borderColor: "border-ink/15",
  },
];

export default function WorkPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* 1. HERO SECTION */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden pt-12 sm:pt-16 md:pt-20"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Client Portfolio • Selected Work
              </Badge>
              <HandwrittenNote direction="left" color="terracotta">
                Be the exception
              </HandwrittenNote>
            </div>

            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.02]">
              Work that does{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                the talking.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              Different industries. Different challenges. One stubborn belief —
              there is always a more interesting way.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="mint" />
          </div>
        </div>

        {/* Scroll Prompt Notice */}
        <div className="pt-8 flex items-center justify-between text-xs font-mono text-ink/60 border-t border-ink/15 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="uppercase tracking-wider font-bold text-ink">
              Selected Work Deck
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-ink/60">
              Scroll down to reveal cards
            </span>
          </div>

          <span className="font-mono text-terracotta font-bold text-xs">
            04 Verified Deployments ↓
          </span>
        </div>
      </SectionContainer>

      {/* 2. SUBSTANTIAL EDITORIAL STACKING SHOWCASE */}
      {shouldReduceMotion ? (
        <SectionContainer paddingY="xl" className="border-b border-ink/10">
          <div className="space-y-8 sm:space-y-12 max-w-[1240px] mx-auto">
            {editorialProjects.map((project, index) => (
              <EditorialProjectCard key={project.id} index={index} {...project} />
            ))}
          </div>
        </SectionContainer>
      ) : (
        <section className="relative border-b border-ink/10 bg-cream py-8 sm:py-12 lg:py-16">
          <div className="w-[94%] sm:w-[90%] lg:w-[88%] max-w-[1240px] mx-auto">
            <StackingCards
              totalCards={editorialProjects.length}
              scaleMultiplier={0.015}
              className="relative w-full pb-24 sm:pb-32 lg:pb-40"
            >
              {editorialProjects.map((project, index) => (
                <StackingCardItem
                  key={project.id}
                  index={index}
                  topPosition="clamp(76px, 9vh, 88px)"
                  className="min-h-[520px] sm:min-h-[600px] lg:h-[clamp(680px,78vh,820px)]"
                >
                  <EditorialProjectCard index={index} {...project} />
                </StackingCardItem>
              ))}
            </StackingCards>
          </div>
        </section>
      )}

      {/* 3. ENQUIRY CALL TO ACTION */}
      <SectionContainer paddingY="xl" className="bg-ink text-cream">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="terracotta" withDot dotColor="mint">
              Collaborate With Oddlyyy
            </Badge>
            <HandwrittenNote
              direction="left"
              color="terracotta"
              className="text-lavender"
            >
              let&apos;s build the next one together
            </HandwrittenNote>
          </div>

          <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight leading-tight">
            Have a project that demands{" "}
            <span className="font-secondary text-terracotta block sm:inline">
              unconventional craft?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
            Whether you are launching a complex full-stack web platform,
            repositioning an architectural practice, or engineering a custom
            direct booking workflow, we bring the brains, the code, and the
            craft.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
            <PrimaryButton href="/contact" size="lg">
              Start an engagement &rarr;
            </PrimaryButton>
            <SecondaryButton href="/services" size="lg" variant="outline">
              Review studio disciplines
            </SecondaryButton>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

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
import { CtaSection } from "@/components/sections/CtaSection";

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
              Different industries. Different challenges. One stubborn belief:
              there is always a more interesting way.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="mint" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. SUBSTANTIAL EDITORIAL STACKING SHOWCASE */}
      {shouldReduceMotion ? (
        <SectionContainer paddingY="xl" className="border-b border-ink/10">
          <div className="space-y-8 sm:space-y-12 max-w-[940px] mx-auto">
            {editorialProjects.map((project, index) => (
              <EditorialProjectCard key={project.id} index={index} {...project} />
            ))}
          </div>
        </SectionContainer>
      ) : (
        <section className="relative border-b border-ink/10 bg-cream py-8 sm:py-12 lg:py-16">
          <div className="w-[92%] sm:w-[88%] lg:w-[84%] max-w-[940px] mx-auto">
            <StackingCards
              totalCards={editorialProjects.length}
              scaleMultiplier={0.015}
              className="relative w-full pb-20 sm:pb-28 lg:pb-32"
            >
              {editorialProjects.map((project, index) => (
                <StackingCardItem
                  key={project.id}
                  index={index}
                  topPosition="clamp(80px, 10vh, 96px)"
                  className="min-h-[390px] sm:min-h-[450px] lg:h-[clamp(510px,58vh,615px)]"
                >
                  <EditorialProjectCard index={index} {...project} />
                </StackingCardItem>
              ))}
            </StackingCards>
          </div>
        </section>
      )}

      {/* 3. ENQUIRY CALL TO ACTION */}
      <CtaSection
        id="work-enquiry-cta"
        title={
          <>
            Have a project that demands{" "}
            <span className="font-secondary text-terracotta block sm:inline">
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

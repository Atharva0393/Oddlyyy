"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  EditorialProjectCard,
  ProjectCardData,
} from "@/components/sections/work/EditorialProjectCard";
import { HandAnnotation } from "@/components/ui/notebook";

const featuredProjects: ProjectCardData[] = [
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
];

export const NotebookFeaturedWork: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 border-b border-[#222126]/12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-primary font-black text-5xl sm:text-6xl md:text-7xl text-[#222126] tracking-tight uppercase leading-[0.9]">
            IDEAS MADE REAL.
          </h2>

          <div className="flex items-center gap-4">
            <HandAnnotation arrow="down-left" color="text-terracotta" className="font-recoleta italic">
              real projects we loved crafting
            </HandAnnotation>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#222126] bg-[#FFD84D] border border-[#222126] rounded-md shadow-[2px_2px_0px_#222126] hover:-translate-y-0.5 transition-transform"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2-Column Grid of Real Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          {featuredProjects.map((project, idx) => (
            <EditorialProjectCard
              key={project.id}
              project={project}
              index={idx}
              className="h-full min-h-[480px] sm:min-h-[520px]"
            />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 sm:hidden flex justify-center">
          <Link
            href="/work"
            className="w-full text-center py-3 px-6 text-xs font-bold uppercase tracking-wider text-[#222126] bg-[#FFD84D] border border-[#222126] rounded-md shadow-[3px_3px_0px_#222126]"
          >
            View All Projects in Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

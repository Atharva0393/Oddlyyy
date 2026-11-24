"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import {
  WashiTape,
  HandAnnotation,
} from "@/components/ui/notebook";

export const NotebookFeaturedWork: React.FC = () => {
  // Only The Chess Project and Meraki Designs
  const featured = ["the-chess-project", "meraki-designs"]
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter((p): p is (typeof projectsData)[number] => Boolean(p));

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

        {/* 2x2 Scrapbook Grid of Real Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {featured.map((project, idx) => {
            const tapeColors: Array<"mint" | "yellow" | "pink" | "blue"> = [
              "mint",
              "yellow",
              "pink",
              "blue",
            ];
            const tapeColor = tapeColors[idx % tapeColors.length];
            const rotations = [-1, 1, 1.5, -1.5];
            const rot = rotations[idx % rotations.length];

            return (
              <div
                key={project.id}
                className="group relative bg-white border border-[#222126] p-5 sm:p-7 rounded-lg shadow-[4px_5px_0px_#222126] transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between"
                style={{ transform: `rotate(${rot}deg)` }}
              >
                {/* Washi Tape on top edge */}
                <WashiTape
                  color={tapeColor}
                  className="absolute -top-3 left-8"
                  angle={rot > 0 ? -2 : 3}
                />

                <div>
                  {/* Title & Industry in Bold Berthold */}
                  <h3 className="font-primary font-black text-2xl sm:text-3xl text-[#222126] uppercase leading-tight mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#222126]/60 mb-4">
                    {project.industry}
                  </p>

                  {/* Authentic Screenshot in Paper Frame */}
                  <div className="relative aspect-[16/10] w-full bg-[#F2EDE3] border border-[#222126]/20 rounded overflow-hidden mb-5 group-hover:border-[#222126] transition-colors">
                    <Image
                      src={project.images?.cover || "/images/projects/the-chess-project-cover.png"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {/* Short Summary */}
                  <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Link */}
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#222126]/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222126] hover:text-terracotta group"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-terracotta" />
                </Link>
              </div>
            );
          })}
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

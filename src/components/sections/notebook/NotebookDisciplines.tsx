"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/content/services";
import {
  WashiTape,
  PaperBadge,
  HandAnnotation,
} from "@/components/ui/notebook";

export const NotebookDisciplines: React.FC = () => {
  // All 6 real services
  const disciplines = servicesData.slice(0, 6);

  const tapeColors: Array<"mint" | "yellow" | "pink" | "blue" | "lavender"> = [
    "mint",
    "yellow",
    "pink",
    "lavender",
    "blue",
    "yellow",
  ];

  return (
    <section className="relative py-16 sm:py-24 border-b border-[#222126]/12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#222126] tracking-tight uppercase leading-[0.9]">
            OUR DISCIPLINES.
          </h2>

          <div className="flex items-center gap-3">
            <HandAnnotation arrow="down-left" color="text-terracotta">
              six ways we help brands stand out
            </HandAnnotation>
          </div>
        </div>

        {/* 6 Pinned Notebook Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {disciplines.map((srv, idx) => {
            const tapeColor = tapeColors[idx % tapeColors.length];

            return (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className="group relative bg-white border border-[#222126] p-6 sm:p-7 rounded-lg shadow-[3px_4px_0px_#222126] hover:shadow-[5px_6px_0px_#222126] transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Washi Tape on top */}
                <WashiTape
                  color={tapeColor}
                  className="absolute -top-3 left-6"
                  angle={idx % 2 === 0 ? -3 : 2}
                />

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#222126] uppercase leading-snug mb-3 group-hover:text-terracotta transition-colors">
                    {srv.title}
                  </h3>

                  <p className="font-primary text-sm text-[#222126]/80 leading-relaxed mb-6">
                    {srv.shortDescription}
                  </p>

                  {/* Key Deliverables Pills */}
                  <div className="space-y-1.5 mb-6">
                    {(srv.servicesIncluded || []).slice(0, 3).map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-center gap-2 text-xs font-mono text-[#222126]/70"
                      >
                        <span className="text-terracotta font-bold">✦</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center justify-between w-full pt-4 border-t border-[#222126]/10 text-xs font-bold uppercase tracking-wider text-[#222126] group-hover:text-terracotta">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222126] bg-[#FFD84D] border border-[#222126] rounded-md shadow-[3px_3px_0px_#222126] hover:-translate-y-0.5 transition-transform"
          >
            <span>View All Services &amp; Deliverables</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

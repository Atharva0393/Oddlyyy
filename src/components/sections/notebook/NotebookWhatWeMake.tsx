"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  WashiTape,
  PaperBadge,
  HandAnnotation,
  YellowNote,
} from "@/components/ui/notebook";

export const NotebookWhatWeMake: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 border-b border-[#222126]/12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] border border-[#222126]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#222126]/60">
                STUDIO OVERVIEW // 01
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#222126] tracking-tight uppercase leading-[0.9]">
              WHAT WE MAKE.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <HandAnnotation arrow="down-left" color="text-terracotta">
              crafted with taste &amp; rigor
            </HandAnnotation>
          </div>
        </div>

        {/* Scrapbook Board: 3 Distinct Pieces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Web & Digital Products */}
          <div className="relative bg-white border border-[#222126] p-6 sm:p-7 rounded-lg shadow-[4px_4px_0px_#222126] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
            <WashiTape
              color="mint"
              className="absolute -top-3 left-6"
              angle={-3}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#222126]/60">
                  DISCIPLINE 01
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-[#A9DCC4] border border-[#222126]/30">
                  Web &amp; Digital
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#222126] uppercase mb-3 leading-tight">
                DIGITAL PLATFORMS
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                Fast, responsive websites, bespoke e-commerce hubs and tailored web
                applications that convert visitors into loyal clients without template
                bloat.
              </p>

              {/* Taped preview image */}
              <div className="relative aspect-[16/10] w-full bg-[#F2EDE3] border border-[#222126]/15 rounded overflow-hidden mb-6">
                <Image
                  src="/images/projects/the-chess-project-cover.png"
                  alt="Web Development preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Next.js
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Custom CMS
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  E-Commerce
                </span>
              </div>
            </div>

            <Link
              href="/services/digital-platforms"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#222126]/10 text-xs font-bold uppercase tracking-wider text-[#222126] hover:text-terracotta group"
            >
              <span>Explore Digital &amp; Dev</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Card 2: Brand Identity Systems */}
          <div className="relative bg-white border border-[#222126] p-6 sm:p-7 rounded-lg shadow-[4px_4px_0px_#FFD84D] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
            <WashiTape
              color="yellow"
              className="absolute -top-3 left-1/2 -translate-x-1/2"
              angle={2}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#222126]/60">
                  DISCIPLINE 02
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-[#FFD84D] border border-[#222126]/30">
                  Identity
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#222126] uppercase mb-3 leading-tight">
                BRANDING &amp; CREATIVE
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                Memorable visual identities, editorial typography systems, custom
                logos and brand guidelines built for businesses that refuse to blend
                in.
              </p>

              {/* Taped preview image */}
              <div className="relative aspect-[16/10] w-full bg-[#F2EDE3] border border-[#222126]/15 rounded overflow-hidden mb-6">
                <Image
                  src="/images/projects/meraki-designs-cover.webp"
                  alt="Branding preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Logo Systems
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Art Direction
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Brand Guidelines
                </span>
              </div>
            </div>

            <Link
              href="/services/brand-identity"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#222126]/10 text-xs font-bold uppercase tracking-wider text-[#222126] hover:text-terracotta group"
            >
              <span>Explore Branding</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Card 3: AI & Automation */}
          <div className="relative bg-white border border-[#222126] p-6 sm:p-7 rounded-lg shadow-[4px_4px_0px_#222126] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
            <WashiTape
              color="pink"
              className="absolute -top-3 right-6"
              angle={-2}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#222126]/60">
                  DISCIPLINE 03
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-[#F3B5CB] border border-[#222126]/30">
                  Smart Tech
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#222126] uppercase mb-3 leading-tight">
                AI &amp; AUTOMATION
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                Intelligent automation workflows, custom AI assistant pipelines,
                CRM integrations and back-office tools that give hours back to your
                team.
              </p>

              {/* Scrapbook note inside card */}
              <div className="bg-[#FAF7F2] border border-dashed border-[#222126]/30 p-4 rounded mb-6 text-center">
                <p className="font-accent text-lg text-terracotta mb-1">
                  Save 20+ hours every week
                </p>
                <p className="font-mono text-xs text-[#222126]/60">
                  Zero manual data entry / 100% automated
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Custom AI Agents
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  Workflow Hooks
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F6F0] border border-[#222126]/20 rounded">
                  CRM Integrations
                </span>
              </div>
            </div>

            <Link
              href="/services/ai-automation"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#222126]/10 text-xs font-bold uppercase tracking-wider text-[#222126] hover:text-terracotta group"
            >
              <span>Explore AI &amp; Automation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom studio promise note */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-[#FFD84D] border border-[#222126] px-5 py-2.5 rounded-full shadow-[2px_2px_0px_#222126] -rotate-1">
            <span className="font-accent text-lg text-[#222126] font-bold">
              We also handle Mobile Apps, Marketing &amp; Business Systems ✦
            </span>
            <Link
              href="/services"
              className="text-xs font-mono font-bold uppercase underline hover:text-terracotta"
            >
              See all 6 services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


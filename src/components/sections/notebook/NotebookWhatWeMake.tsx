"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  WashiTape,
  HandAnnotation,
} from "@/components/ui/notebook";

export const NotebookWhatWeMake: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 border-b border-[#222126]/12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-primary font-black text-5xl sm:text-6xl md:text-7xl text-[#222126] tracking-tight uppercase leading-[0.9]">
            WHAT WE MAKE.
          </h2>

          <div className="flex items-center gap-3">
            <HandAnnotation arrow="down-left" color="text-terracotta" className="font-recoleta italic">
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
              <h3 className="font-primary font-black text-2xl sm:text-3xl text-[#222126] uppercase mb-3 leading-tight tracking-tight">
                DIGITAL PLATFORMS
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                We build fast, responsive websites, e-commerce stores, and custom web
                applications designed to deliver seamless experiences and drive
                conversions.
              </p>

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
              <h3 className="font-primary font-black text-2xl sm:text-3xl text-[#222126] uppercase mb-3 leading-tight tracking-tight">
                BRANDING &amp; CREATIVE
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                We craft distinctive brand identities through thoughtful strategy,
                refined visual design, and cohesive brand systems that inspire
                recognition, build trust, and leave a lasting impression.
              </p>

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
              <h3 className="font-primary font-black text-2xl sm:text-3xl text-[#222126] uppercase mb-3 leading-tight tracking-tight">
                AI &amp; AUTOMATION
              </h3>

              <p className="font-primary text-sm sm:text-base text-[#222126]/80 leading-relaxed mb-6">
                We develop intelligent AI solutions, automated workflows, and
                seamless system integrations that streamline operations, enhance
                productivity, and help businesses scale efficiently.
              </p>

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
        <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-[22px] bg-[#F7F5EE] border border-[#222126]/10 p-2.5 sm:p-3.5">
            <Link
              href="/services"
              className="group flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full bg-[#FFD84D] hover:bg-[#FFD13B] border border-[#222126] px-5 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="font-recoleta italic text-base sm:text-lg md:text-xl text-[#222126] font-normal tracking-tight">
                  Oh, we do more than that.
                </span>
                <span className="text-sm select-none" aria-hidden="true">
                  ✦
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#222126] group-hover:text-terracotta transition-colors shrink-0">
                <span className="underline underline-offset-4 decoration-[#222126]/40 group-hover:decoration-terracotta">
                  EXPLORE ALL SERVICES
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


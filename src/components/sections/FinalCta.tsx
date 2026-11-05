"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PrimaryButton, SecondaryButton, HandwrittenNote, Badge } from "@/components/ui";
import { agencyInfo } from "@/content/brand";

export const FinalCta: React.FC = () => {
  return (
    <SectionContainer id="final-cta" paddingY="xl" className="border-b border-ink/10 relative overflow-hidden">
      <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
        {/* Subtle Background Tactile Noise */}
        <div
          className="absolute inset-0 bg-noise opacity-20 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Supporting Text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Open for Q2/Q3 Commissions
              </Badge>
              <HandwrittenNote direction="left" color="terracotta" className="text-lavender">
                Be the exception
              </HandwrittenNote>
            </div>

            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cream leading-[0.92]">
              Got something <span className="text-terracotta italic font-normal">odd</span> in mind?
            </h2>

            <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
              Tell us what you&apos;re dreaming up. We&apos;ll bring the brains, the creativity and probably too many ideas.
            </p>

            {/* Prominent CTA Button Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Start a project</span>
              </PrimaryButton>

              <SecondaryButton
                href="/work"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Explore all work</span>
              </SecondaryButton>
            </div>
          </div>

          {/* Right Column: Direct Contact Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-cream/10 border border-cream/20 space-y-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lavender font-semibold">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span>Direct Creator Access</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-cream/50 uppercase tracking-wider block">
                Direct Inquiry Inbox
              </span>
              <a
                href={`mailto:${agencyInfo.contact.email}`}
                className="font-primary font-semibold text-lg sm:text-2xl text-cream hover:text-terracotta transition-colors flex items-center gap-2 group break-all sm:break-normal"
              >
                <span>{agencyInfo.contact.email}</span>
                <ArrowUpRight className="w-5 h-5 text-terracotta transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </a>
            </div>

            <div className="pt-4 border-t border-cream/15 space-y-2 text-xs font-mono text-cream/60">
              <p>&bull; Response within 24 business hours</p>
              <p>&bull; Fixed-scope sprint proposals</p>
              <p>&bull; Direct maker communication</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};


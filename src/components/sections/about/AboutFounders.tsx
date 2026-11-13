"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Terminal, Sparkles, Code2, Compass } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HandwrittenNote, Badge } from "@/components/ui";
import { foundersData } from "@/content/team";

export const AboutFounders: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="about-founders"
      paddingY="xl"
      className="border-b border-ink/10 relative overflow-hidden bg-cream"
    >
      <div className="space-y-16 sm:space-y-20 relative z-10">
        {/* Section Header with Ethics & Transparency Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink/15">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              04 / THE PEOPLE BEHIND THE PIXELS
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.05]">
              Small team. Big ideas.{" "}
              <span className="text-terracotta font-normal italic">
                Questionable amounts of curiosity.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              We&apos;re a small team of makers who like getting involved in the actual making. From the first sketch to the final line of code, we care about the thinking and the craft behind every project.
            </p>
          </div>

          {/* Ethics / Transparency Pill */}
          <div className="p-4 rounded-2xl bg-[#FFF9F4] border-2 border-ink/15 max-w-xs space-y-1.5 shadow-sm shrink-0">
            <span className="font-mono text-xs font-bold text-terracotta flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-4 h-4 text-terracotta" />
              <span>Direct Senior Access</span>
            </span>
            <p className="text-[11px] font-mono text-ink/75 leading-relaxed">
              No account managers or junior delegates. You partner directly with the senior creative &amp; technical leads who design and ship the work.
            </p>
          </div>
        </div>

        {/* Editorial Founder Cards (Two Wide Asymmetric Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {foundersData.map((founder, index) => {
            return (
              <motion.div
                key={founder.id}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="group relative rounded-3xl p-8 sm:p-10 border-2 border-ink/15 bg-[#FFF9F4] flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-ink-offset hover:border-ink"
              >
                {/* Header Information: Role & Stamp */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-ink/15">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                        LEAD 0{index + 1}
                      </span>
                      <span className="font-mono text-[11px] text-terracotta font-bold uppercase tracking-wider">
                        {founder.statusNote}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-ink/40">
                      [Verified Studio Lead]
                    </span>
                  </div>

                  {/* Editorial Layout: Monogram Portrait Frame + Name */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Art-Directed Graphic Portrait Frame */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-2 border-ink/20 bg-gradient-to-br from-cream via-lavender/40 to-mint/40 p-4 flex flex-col justify-between overflow-hidden shadow-inner shrink-0 group-hover:scale-[1.02] transition-transform">
                      <div className="flex items-center justify-between text-xs font-mono text-ink/50">
                        <span>ODD</span>
                        <span>0{index + 1}</span>
                      </div>

                      <div className="text-center font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                        {founder.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div className="text-[10px] font-mono text-center text-terracotta font-bold uppercase tracking-widest">
                        PRACTICE
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-terracotta font-bold uppercase tracking-widest block">
                        {founder.discipline}
                      </span>
                      <h3 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                        {founder.name}
                      </h3>
                      <p className="font-mono text-xs text-ink/60 font-medium">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Personal Bio Narrative */}
                  <p className="text-base sm:text-lg text-ink/85 leading-relaxed font-primary">
                    {founder.bio}
                  </p>

                  {/* Personal Quote */}
                  {founder.quote && (
                    <div className="p-4 rounded-2xl bg-lavender/30 border-l-4 border-l-terracotta border-y border-r border-ink/10 text-sm font-primary italic text-ink/90">
                      &ldquo;{founder.quote}&rdquo;
                    </div>
                  )}

                  {/* Expertise Tags */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block">
                      Core Areas of Practice
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-3 py-1 rounded-full bg-cream border border-ink/15 text-ink font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Socials & Handwritten Note */}
                <div className="pt-6 border-t border-ink/15 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {founder.socials?.map((social) => (
                      <Link
                        key={social.platform}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-ink/70 hover:text-terracotta transition-colors"
                      >
                        <span>{social.platform}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>

                  <HandwrittenNote
                    direction="right"
                    color="terracotta"
                    className="text-sm sm:text-base"
                  >
                    {founder.funFact}
                  </HandwrittenNote>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Model Commitment Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-mint/40 border border-ink/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
              Studio Working Model:
            </span>
            <p className="text-sm font-primary text-ink/80 max-w-2xl">
              Oddlyyy operates in concentrated, high-velocity sprints. Every deliverable is reviewed directly by the founders with zero intermediate layers.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-terracotta hover:underline shrink-0"
          >
            <span>Talk directly with the team →</span>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

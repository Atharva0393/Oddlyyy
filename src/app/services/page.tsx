import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  PrimaryButton,
  SecondaryButton,
  HandwrittenNote,
  RotatingBadge,
} from "@/components/ui";
import { ServicesLanyardSection } from "@/components/sections/ServicesLanyardSection";

export const metadata = {
  title: "Services & Capabilities — Oddlyyy",
  description:
    "We have a few tricks up our sleeve. From building your next website to automating the boring stuff, we turn ambitious ideas into things that actually work.",
};

export default function ServicesPage() {

  const modularCombinations = [
    {
      title: "The Flagship Brand & Build",
      disciplines: ["Branding & Creative", "Digital & Development"],
      description:
        "For companies launching new ventures or undergoing full repositioning. We craft your visual identity and build it into a high-converting digital presence.",
      badge: "Most Popular",
      color: "bg-lavender",
    },
    {
      title: "The Intelligent Operations Stack",
      disciplines: ["Digital & Development", "AI & Automation"],
      description:
        "For scaling businesses drowning in manual workflows. A custom business platform combined with automated workflow connections and a 24/7 intelligent assistant.",
      badge: "High ROI",
      color: "bg-mint",
    },
    {
      title: "The Cultural Launch Stunt",
      disciplines: ["Marketing & Content", "The Odd Jobs"],
      description:
        "For disruptive product reveals. An interactive launch destination, viral rollout mechanics, and motion snippets that command organic conversation.",
      badge: "Experimental",
      color: "bg-cream/90",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
              We have a few tricks{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                up our sleeve.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              From building your next website to automating the boring stuff, we turn ambitious ideas into things that actually work.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="lavender" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. DEDICATED TACTILE LANYARD RAIL SERVICE SECTION */}
      <ServicesLanyardSection />

      {/* 3. MULTI-SERVICE COMBINATIONS SECTION */}
      <SectionContainer
        id="service-combinations"
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.05]">
                One studio.{" "}
                <span className="font-secondary text-terracotta font-normal">
                  Endless combinations.
                </span>
              </h2>
            </div>

            <HandwrittenNote direction="right" color="terracotta">
              mix, match &amp; multiply
            </HandwrittenNote>
          </div>

          <p className="text-base sm:text-xl text-ink/80 leading-relaxed font-primary max-w-3xl">
            Most transformative agency engagements don&apos;t stay in a single lane. We eliminate the friction of managing multiple specialized vendors by integrating brand strategy, digital design, and intelligent automation into a single cohesive team.
          </p>

          {/* Combination Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {modularCombinations.map((combo) => (
              <div
                key={combo.title}
                className={`p-6 sm:p-8 rounded-3xl border-2 border-ink/15 flex flex-col justify-between transition-all duration-300 hover:shadow-ink-offset hover:-translate-y-1 ${combo.color}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-ink/15 mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-terracotta font-bold">
                      {combo.badge}
                    </span>
                    <Layers className="w-5 h-5 text-ink/60" />
                  </div>

                  <h3 className="font-primary font-semibold text-2xl text-ink tracking-tight mb-3">
                    {combo.title}
                  </h3>

                  {/* Discipline Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {combo.disciplines.map((d) => (
                      <span
                        key={d}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-ink text-cream font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-ink/80 leading-relaxed font-primary">
                    {combo.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-ink/15 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-primary font-medium uppercase tracking-wider text-ink hover:text-terracotta transition-colors"
                  >
                    <span>Request bespoke combo brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. FINAL CTA */}
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-cream leading-[1.05]">
              Not sure what you need? That&apos;s fine.{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                Let&apos;s figure it out.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
              You don&apos;t need a finalized 50-page specification deck. Share where you are today and where you want to go—we&apos;ll shape the right scope and technical milestones together.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Tell us what you&apos;re building</span>
              </PrimaryButton>

              <SecondaryButton
                href="/work"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Explore past case studies</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

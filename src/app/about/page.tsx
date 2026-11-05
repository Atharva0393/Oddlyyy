import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  Clock,
  Compass,
  Cpu,
  Globe,
  Heart,
  Layers,
  MessageSquareQuote,
  ShieldCheck,
  Smile,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Badge,
  Tag,
  HandwrittenNote,
  PrimaryButton,
  SecondaryButton,
  ScrollReveal,
  FloatingAsterisk,
  RotatingBadge,
  ThreeYsSignature,
} from "@/components/ui";
import { CtaSection } from "@/components/sections/CtaSection";
import { teamData } from "@/content/team";

export const metadata = {
  title: "About Oddlyyy — We're Not Every Agency",
  description:
    "We're a small, ambitious creative team bringing together ideas, design, technology and a healthy dislike for boring solutions.",
};

export default function AboutPage() {
  const philosophies = [
    {
      index: "01",
      title: "Creativity with purpose.",
      subtitle: "Bold ideas that solve real business friction.",
      description:
        "Design without strategic intent is mere decoration. We build expressive, unconventional visual systems that capture attention, evoke emotion, and drive measurable action. Quirky without utility is just noise; quirky with purpose is unforgettable.",
      cardVariant: "cream" as const,
      icon: Sparkles,
      note: "never boring, always useful",
    },
    {
      index: "02",
      title: "Strategy with personality.",
      subtitle: "Sharp positioning without the 80-page corporate decks.",
      description:
        "Most agency strategy is a collection of corporate buzzwords designed to justify exorbitant retainer fees. We find your brand's authentic, slightly weird point of difference—the truth competitors are too timid to own—and translate it into an undeniable market edge.",
      cardVariant: "lavender" as const,
      icon: Compass,
      note: "no corporate jargon",
    },
    {
      index: "03",
      title: "Technology with imagination.",
      subtitle: "Modern engineering paired with tactile digital delight.",
      description:
        "Code is as expressive as typography. We build high-performance web systems using Next.js 15, native browser APIs, and kinetic micro-interactions. Zero bloat, zero layout shift, sub-second speeds, and tactile friction that makes browsing an actual joy.",
      cardVariant: "mint" as const,
      icon: Cpu,
      note: "sub-second speeds",
    },
  ];

  const differentiators = [
    {
      category: "Creativity",
      headline: "Unapologetic Originality",
      summary:
        "We never recycle templates, trend-hop blindly, or produce beige consensus work. Every layout, color palette, and micro-interaction is handcrafted for your unique brand DNA.",
      icon: Sparkles,
      color: "bg-cream border-ink/20",
      accent: "text-terracotta",
    },
    {
      category: "Communication",
      headline: "Radical Directness",
      summary:
        "Zero account manager telephone games. You collaborate directly with the designers and engineers holding the keys. Quick Loom walkthroughs, shared Slack rooms, and honest feedback.",
      icon: MessageSquareQuote,
      color: "bg-lavender/50 border-ink/20",
      accent: "text-ink",
    },
    {
      category: "Flexibility",
      headline: "Agile & Lightweight",
      summary:
        "Small teams pivot at the speed of thought. We work in concentrated 2-week sprints, test wild ideas without bureaucratic red tape, and adapt rapidly to real user feedback.",
      icon: Zap,
      color: "bg-mint/50 border-ink/20",
      accent: "text-terracotta",
    },
    {
      category: "Execution",
      headline: "Obsession with the Last 10%",
      summary:
        "The difference between good and iconic is in the details: keyboard accessibility, responsive typography scales, tactile button haptics, and zero layout shift on mobile screens.",
      icon: CheckCheck,
      color: "bg-ink text-cream border-ink",
      accent: "text-terracotta",
    },
  ];

  const workingStyleSteps = [
    {
      step: "01",
      title: "Async-First Momentum",
      description:
        "Whether you're in New York, London, Berlin, or Tokyo, our async documentation, recorded video walkthroughs, and clear sprint boards keep momentum continuous without calendar fatigue.",
      icon: Globe,
    },
    {
      step: "02",
      title: "Weekly Sprint Cadence",
      description:
        "Monday alignment, Wednesday interactive check-in, Friday live staging deploy. You see working code every single week, not an abstract presentation after 3 months of radio silence.",
      icon: Clock,
    },
    {
      step: "03",
      title: "Direct Maker Access",
      description:
        "You have direct access to our core makers in a dedicated Slack or Discord channel. No gatekeepers, no ticketing queues, no corporate bureaucracy.",
      icon: Terminal,
    },
    {
      step: "04",
      title: "Fixed Sprints & Honest Scoping",
      description:
        "Transparent milestone pricing with defined deliverables. Zero surprise invoices, zero hidden change orders, and complete transparency from kickoff to handoff.",
      icon: ShieldCheck,
    },
  ];

  return (
    <article className="min-h-screen bg-cream text-ink">
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#202028_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative">
          <div className="max-w-4xl space-y-8">
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-bold">
                * About Oddlyyy
              </span>
              <Badge variant="outline">Studio Manifesto</Badge>
              <Badge variant="terracotta">Be the exception</Badge>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[0.95]">
              We&apos;re not every agency.
              <br />
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                And that&apos;s the point.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xl sm:text-2xl md:text-3xl text-ink/85 font-primary leading-relaxed max-w-3xl">
              We&apos;re a small, ambitious creative team bringing together ideas, design, technology and a healthy dislike for boring solutions.
            </p>

            {/* Hand-drawn annotation & CTA row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <PrimaryButton href="/contact" className="w-full sm:w-auto text-center justify-center">
                Let&apos;s make something odd ↗
              </PrimaryButton>
              <SecondaryButton href="/work" className="w-full sm:w-auto text-center justify-center">
                Explore our work
              </SecondaryButton>
              <div className="hidden sm:block">
                <HandwrittenNote direction="right" color="terracotta">
                  proudly un-corporate
                </HandwrittenNote>
              </div>
            </div>
          </div>

        <div className="hidden lg:flex items-center justify-center shrink-0 pt-8 pr-6">
          <RotatingBadge size="md" variant="mint" />
        </div>
      </div>
    </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 01: OUR STORY                                */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-medium">
                  01 / Our Story
                </span>
                <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
                  Why Oddlyyy exists (and why the world needs it).
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-ink/80 leading-relaxed font-primary">
                <p>
                  The modern internet wasn&apos;t supposed to look this predictable. Somewhere along the line, digital design was optimized for risk aversion. Agencies started selling the same sterile corporate blue SaaS grids, identical sans-serif wordmarks, and interchangeable stock photography of people nodding politely at whiteboards.
                </p>
                <p>
                  Everything worked, but nothing lingered. Brands spent millions to blend seamlessly into the beige wallpaper of the internet.
                </p>
                <p>
                  <strong className="text-ink font-primary">Oddlyyy was established as an antidote.</strong> We believe that personality is not a cosmetic indulgence—it is the single highest-leverage business moat a company can possess in an overcrowded market.
                </p>
              </div>

              {/* Core Beliefs Checklist */}
              <div className="p-6 rounded-2xl bg-lavender/40 border border-ink/15 space-y-3">
                <span className="text-xs font-mono uppercase text-terracotta font-medium tracking-wider block">
                  What We Believe
                </span>
                <ul className="space-y-2.5 text-sm sm:text-base text-ink/90 font-primary">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                    <span><strong className="font-primary font-semibold">Differentiation over consensus:</strong> If everyone in your sector zigs, zigging slightly faster isn&apos;t a strategy. Zagging completely is.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                    <span><strong className="font-primary font-semibold">Code is craft:</strong> Performance, accessibility, and micro-physics matter just as much as typography and color theory.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                    <span><strong className="font-primary font-semibold">Humor requires rigor:</strong> We take our clients&apos; commercial outcomes extremely seriously. We just refuse to be boring about it.</span>
                  </li>
                </ul>
              </div>

              {/* The Three Y's Brand Storytelling Element */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-terracotta uppercase font-bold tracking-wider">
                    Why Three Y&apos;s In Oddlyyy?
                  </span>
                  <HandwrittenNote direction="right" color="terracotta">
                    the triple question
                  </HandwrittenNote>
                </div>
                <ThreeYsSignature variant="horizontal" />
              </div>
            </div>

            {/* Right Column: The Comparison Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-mint/40 border-2 border-ink/20 shadow-ink-offset space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-ink/15">
                  <span className="font-primary font-semibold text-2xl text-ink">The Difference</span>
                  <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-cream border border-ink/20 text-ink font-medium">
                    Field Guide
                  </span>
                </div>

                {/* Standard Agency vs ODDLYYY */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-cream/70 border border-ink/15 space-y-1">
                    <span className="text-xs font-mono text-ink/50 uppercase block">The Standard Agency Playbook</span>
                    <p className="text-sm text-ink/70 font-primary line-through decoration-terracotta decoration-2">
                      8 layers of account managers, 80-page PDF strategy decks no one reads, recycled Figma component kits, and design by corporate committee.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-ink text-cream border border-ink space-y-2 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-terracotta uppercase font-medium">The Oddlyyy Way</span>
                      <span className="text-xs font-mono text-cream/60">100% Bespoke</span>
                    </div>
                    <p className="text-sm sm:text-base text-cream/90 font-primary leading-relaxed">
                      Direct access to senior makers, interactive prototypes within days, unconventional brand systems, and work that makes people stop scrolling.
                    </p>
                  </div>
                </div>

                {/* Playful Stamp Graphic */}
                <div className="flex items-center justify-between pt-4 border-t border-ink/15">
                  <div className="flex items-center gap-2 text-xs font-mono text-ink/70">
                    <Smile className="w-4 h-4 text-terracotta" />
                    <span>Tested on humans, not focus groups.</span>
                  </div>
                  <HandwrittenNote direction="left" color="terracotta">
                    Be the exception
                  </HandwrittenNote>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 02: THE ODDLYYY PHILOSOPHY                   */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10 bg-cream">
        <ScrollReveal>
          <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-medium">
              02 / The Philosophy
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              Three beliefs that guide everything we make.
            </h2>
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-primary">
              No generic buzzwords. These are the three non-negotiables underpinning every website, identity, and automation we build.
            </p>
          </div>

          {/* 3 Large Editorial Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.index}
                  className={`p-8 sm:p-10 rounded-3xl border-2 border-ink/15 flex flex-col justify-between space-y-6 hover:shadow-ink-offset hover:-translate-y-1.5 transition-all duration-300 ${
                    item.cardVariant === "lavender"
                      ? "bg-lavender"
                      : item.cardVariant === "mint"
                      ? "bg-mint"
                      : "bg-cream/90"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-ink text-cream">
                        [{item.index}]
                      </span>
                      <Icon className="w-6 h-6 text-terracotta" />
                    </div>

                    <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-terracotta font-medium uppercase tracking-wider">
                      {item.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary pt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                    <HandwrittenNote direction="right" color="terracotta">
                      {item.note}
                    </HandwrittenNote>
                    <span className="text-xs font-mono text-ink/50 uppercase">Oddlyyy Thesis</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 03: MEET THE MINDS (EDITABLE PLACEHOLDERS)   */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10 bg-mint/20">
        <ScrollReveal>
          <div className="space-y-12">
          {/* Section Header with Ethics Disclaimer */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-medium">
                03 / Meet the Minds
              </span>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                Small team. High conviction.
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-primary leading-relaxed">
                When you partner with Oddlyyy, you work directly with senior practitioners who think, design, and code your project.
              </p>
            </div>

            {/* Ethical Studio Transparency Badge */}
            <div className="p-4 rounded-2xl bg-cream border border-ink/15 max-w-sm space-y-1 shadow-sm">
              <span className="font-mono text-xs font-medium text-terracotta flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Studio Transparency</span>
              </span>
              <p className="text-xs font-mono text-ink/70 leading-relaxed">
                Profiles below represent core disciplines and open studio roles. In accordance with Oddlyyy ethics, synthetic personal photos or fabricated client testimonials are never used.
              </p>
            </div>
          </div>

          {/* 4 Editable Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, idx) => (
              <div
                key={member.id}
                className="group p-6 rounded-3xl bg-cream border-2 border-ink/15 hover:border-ink hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Geometric Monogram Avatar Frame */}
                  <div className="w-full aspect-square rounded-2xl border-2 border-ink/15 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-br from-cream via-lavender/30 to-mint/40 group-hover:scale-[1.02] transition-transform">
                    {/* Abstract Discipline Stamp */}
                    <span className="font-mono text-xs text-ink/40 uppercase tracking-widest mb-1">
                      DISCIPLINE 0{idx + 1}
                    </span>
                    <span className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                      {member.role.split(" ")[0]}
                    </span>
                    <span className="font-mono text-[11px] text-terracotta font-medium mt-1">
                      {member.discipline}
                    </span>

                    {/* Placeholder Marker Pill */}
                    <span className="absolute bottom-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-ink text-cream font-medium">
                      CORE
                    </span>
                  </div>

                  {/* Role & Name */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-terracotta uppercase font-medium block">
                      {member.role}
                    </span>
                    <h3 className="font-primary font-semibold text-xl text-ink group-hover:text-terracotta transition-colors">
                      {member.name}
                    </h3>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                    {member.bio}
                  </p>

                  {/* Fun Fact or Quote */}
                  {member.funFact && (
                    <div className="p-3 rounded-xl bg-ink/[0.03] border border-ink/10 text-xs font-primary text-ink/80 italic">
                      &ldquo;{member.quote}&rdquo;
                    </div>
                  )}
                </div>

                {/* Socials & Edit Anchor */}
                <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink/60">
                  <div className="flex items-center gap-2">
                    {member.socials?.map((soc) => (
                      <span key={soc.platform} className="hover:text-terracotta transition-colors">
                        {soc.platform.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-ink/40">
                    [Editable Profile]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 04: WHAT MAKES US DIFFERENT                  */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <ScrollReveal>
          <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-medium">
              04 / The Odd Advantage
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              What makes working with us different.
            </h2>
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-primary">
              Most clients arrive at our door fatigued by standard agency friction. Here is our deliberate antidote across the four core dimensions of agency partnership.
            </p>
          </div>

          {/* 4 Core Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.category}
                  className={`p-8 sm:p-10 rounded-3xl border-2 ${diff.color} space-y-4 hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-cream/80 text-ink border border-ink/20">
                        {diff.category}
                      </span>
                      <Icon className={`w-6 h-6 ${diff.accent}`} />
                    </div>

                    <h3 className="font-primary font-semibold text-2xl sm:text-3xl tracking-tight">
                      {diff.headline}
                    </h3>

                    <p className="text-base opacity-85 leading-relaxed font-primary">
                      {diff.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-current/15 flex items-center justify-between text-xs font-mono opacity-70">
                    <span>Oddlyyy Standard</span>
                    <span>VERIFIED PRACTICE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 05: OUR WORKING STYLE (INTERNATIONAL CLIENTS) */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10 bg-lavender/30">
        <ScrollReveal>
          <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-medium">
              05 / Working Style
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              How we collaborate with clients internationally.
            </h2>
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-primary">
              We operate as a remote-first studio partnering with ambitious founders, brand leaders, and teams across North America, Europe, Asia, and Australasia.
            </p>
          </div>

          {/* 4 Working Style Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingStyleSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 space-y-4 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-terracotta text-cream">
                      {step.step}
                    </span>
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>

                  <h3 className="font-primary font-semibold text-xl text-ink tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tooling & Collaboration Ecosystem Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono text-terracotta font-medium uppercase tracking-wider block">
                Collaboration Stack
              </span>
              <h4 className="font-primary font-semibold text-xl text-ink">
                Figma &bull; Next.js &bull; Slack &bull; Notion &bull; Loom &bull; GitHub
              </h4>
              <p className="text-xs font-primary text-ink/70">
                You receive instant access to living files, sprint tickets, and production preview deployments.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-xl bg-mint border border-ink/20 font-mono text-xs font-medium text-ink">
                Timezone Agnostic
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-lavender border border-ink/20 font-mono text-xs font-medium text-ink">
                Weekly Deploys
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 06: FINAL CTA                                */}
      {/* ---------------------------------------------------- */}
      <CtaSection
        eyebrow="Start a Dialogue"
        title="Enough about us. What's your idea?"
        description="Whether you're building a brand from scratch, launching a flagship digital experience, or automating the repetitive parts of your business — let's have an honest conversation."
        primaryButtonLabel="Let's make something odd ↗"
        primaryButtonHref="/contact"
        secondaryButtonLabel="Explore our services"
        secondaryButtonHref="/services"
      />
    </article>
  );
}

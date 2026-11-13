import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Compass,
  Code2,
  Calendar,
  CreditCard,
  Video,
  Sun,
  Anchor,
  Building2,
  Sliders,
} from "lucide-react";
import { ProjectItem } from "@/types";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Badge,
  Tag,
  HandwrittenNote,
  ProjectCard,
} from "@/components/ui";
import { CtaSection } from "./CtaSection";
import { cn } from "@/lib/utils";

export interface CaseStudyLayoutProps {
  project: ProjectItem;
  nextProject?: ProjectItem;
  relatedProjects?: ProjectItem[];
}

/**
 * Visual graphic component tailored to each of the four official client projects
 */
const ProjectHeroGraphic: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const isChess = project.slug === "the-chess-project";
  const isMeraki = project.slug === "meraki-designs";
  const isYachts = project.slug === "chicago-yachts";
  const isPayzero = project.slug === "payzero";

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border-2 border-ink/20 shadow-ink-offset transition-all duration-500",
        project.cardColor === "lavender"
          ? "bg-gradient-to-br from-[#1C1F2E] via-[#202028] to-[#12131C]"
          : project.cardColor === "mint"
          ? "bg-gradient-to-br from-[#24211E] via-[#2D2A26] to-[#1A1816]"
          : "bg-gradient-to-br from-[#102B50] via-[#1B365D] to-[#0A1A33]"
      )}
    >
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Embedded Real Cover Screenshot with Art-Directed Lighting */}
      {project.images.cover && (
        <div className="absolute inset-0 z-0">
          <img
            src={project.images.cover}
            alt={project.projectName}
            className="w-full h-full object-cover object-top opacity-35 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40 pointer-events-none" />
        </div>
      )}

      {/* 01: THE CHESS PROJECT HERO OVERLAY */}
      {isChess && (
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 text-cream">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-cream/70 border-b border-cream/10 pb-3">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
              FULL-STACK EDTECH &bull; BUNNY STREAM VIDEO CDN &bull; LIVEKIT ROOMS
            </span>
            <span className="hidden sm:inline">RAZORPAY &bull; GOOGLE CALENDAR SYNC</span>
          </div>

          <div className="my-auto max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-xs font-mono text-mint">
              <Cpu className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Product</span>
            </div>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight">
              The Chess Project
            </h2>
            <p className="font-primary text-sm sm:text-base text-cream/80 max-w-xl leading-relaxed">
              International chess education ecosystem uniting video curriculum, coach discovery, automated course purchasing, and virtual classrooms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] sm:text-[11px] text-cream/60 border-t border-cream/10 pt-3">
            <span>FIDE-TITLED COACH DISCOVERY</span>
            <span>PROTECTED VIDEO STREAMING</span>
            <span>ROLE-BASED CREATOR STUDIO</span>
          </div>
        </div>
      )}

      {/* 02: MERAKI DESIGNS HERO OVERLAY */}
      {isMeraki && (
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 text-cream">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-cream/70 border-b border-cream/10 pb-3">
            <span className="flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-mint" />
              EDITORIAL ARCHITECTURAL PRACTICE &bull; DERBY, UK
            </span>
            <span className="hidden sm:inline">INTERACTIVE PROJECT COST ESTIMATOR</span>
          </div>

          <div className="my-auto max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-xs font-mono text-cream">
              <Compass className="w-3.5 h-3.5 text-terracotta" />
              <span>Editorial Architecture &amp; Brand Experience</span>
            </div>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight">
              Meraki Designs
            </h2>
            <p className="font-primary text-sm sm:text-base text-cream/80 max-w-xl leading-relaxed">
              Spaces designed with intention. An editorial digital platform communicating architectural planning, extensions, and property development.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] sm:text-[11px] text-cream/60 border-t border-cream/10 pt-3">
            <span>HIGH-CONTRAST EDITORIAL CANVASES</span>
            <span>CUSTOM COST CALCULATOR</span>
            <span>SEO-CONSCIOUS ARCHITECTURE</span>
          </div>
        </div>
      )}

      {/* 03: CHICAGO YACHTS HERO OVERLAY */}
      {isYachts && (
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 text-cream">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-cream/70 border-b border-cream/10 pb-3">
            <span className="flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5 text-mint" />
              DIRECT-OPERATOR LUXURY FLEET &bull; CHICAGO, USA
            </span>
            <span className="hidden sm:inline">POSTGRESQL &bull; PRISMA &bull; SUPABASE</span>
          </div>

          <div className="my-auto max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-xs font-mono text-mint">
              <Calendar className="w-3.5 h-3.5" />
              <span>Full-Stack Booking Platform</span>
            </div>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight">
              Chicago Yachts
            </h2>
            <p className="font-primary text-sm sm:text-base text-cream/80 max-w-xl leading-relaxed">
              A luxury direct-operator yacht charter booking platform uniting high-end visual elegance with real-time reservation and hold architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] sm:text-[11px] text-cream/60 border-t border-cream/10 pt-3">
            <span>MULTI-STEP BOOKING WIZARD</span>
            <span>DYNAMIC PRICING &amp; ADD-ON ENGINE</span>
            <span>SERVER-SIDE HOLD VALIDATION</span>
          </div>
        </div>
      )}

      {/* 04: PAYZERO HERO OVERLAY */}
      {isPayzero && (
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 text-cream">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-cream/70 border-b border-cream/10 pb-3">
            <span className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-[#FFC928]" />
              SOLAR EPC ENERGY EXPERT &bull; RESIDENTIAL &bull; COMMERCIAL &bull; INDUSTRIAL
            </span>
            <span className="hidden sm:inline">VIRTUAL SAVINGS CALCULATOR</span>
          </div>

          <div className="my-auto max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-xs font-mono text-[#FFC928]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Corporate Website &amp; Lead Generation</span>
            </div>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight">
              Payzero
            </h2>
            <p className="font-primary text-sm sm:text-base text-cream/80 max-w-xl leading-relaxed">
              &ldquo;Let the Sun Pay Your Energy Bills.&rdquo; A modern corporate web platform communicating full-scope engineering, procurement, and solar commissioning.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] sm:text-[11px] text-cream/60 border-t border-cream/10 pt-3">
            <span>SIX-STEP SOLAR EPC WORKFLOW</span>
            <span>FINANCIAL SAVINGS &amp; EMI ESTIMATION</span>
            <span>MULTI-LOCATION CONSULTATION INTAKE</span>
          </div>
        </div>
      )}

      {/* Floating Corner Live Link Pill */}
      {project.liveUrl && (
        <div className="absolute top-4 right-4 z-20">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream text-ink hover:bg-terracotta hover:text-cream text-xs font-mono font-bold transition-colors shadow-md"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
};

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  project,
  nextProject,
  relatedProjects = [],
}) => {
  return (
    <article className="min-h-screen bg-cream text-ink">
      {/* ---------------------------------------------------- */}
      {/* SECTION 01 & 02: HERO & METADATA                     */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="sm" className="border-b border-ink/10">
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-terracotta transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Work</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink/50 uppercase tracking-widest hidden sm:inline">
              Verified Client &bull; {project.year}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors text-xs font-mono font-bold"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* Main Hero Header */}
      <SectionContainer paddingY="md">
        <div className="space-y-6 max-w-5xl">
          {/* Top Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-bold">
              * Client Case Study / {project.year}
            </span>
            <Badge variant="outline">{project.projectCategory}</Badge>
            <Badge variant="terracotta">
              {project.badge || "Verified Client Platform"}
            </Badge>
            <span className="text-xs font-mono text-ink/60 uppercase">
              {project.industry}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
            {project.projectName}
          </h1>

          {/* Project Summary / Pitch */}
          <p className="text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed max-w-3xl font-primary">
            {project.description}
          </p>

          {/* Project Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologiesUsed?.map((tech) => (
              <Tag key={tech} size="sm" variant="cream">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Section 1 Visual Showcase (Large Immersive Frame) */}
      <SectionContainer paddingY="sm">
        <ProjectHeroGraphic project={project} />
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 03: PROJECT OVERVIEW & METADATA GRID          */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              Project Overview
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight leading-tight">
              An ambitious digital product engineered without compromise.
            </h2>
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-primary">
              {project.overview || project.description}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Client / Company
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.client}
              </span>
              <span className="text-xs font-mono text-terracotta block">
                Verified Production Client
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Industry &amp; Sector
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.industry}
              </span>
              <span className="text-xs font-mono text-ink/60 block">
                Specialized Domain
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Discipline &amp; Scope
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.projectCategory}
              </span>
              <span className="text-xs font-mono text-ink/60 block">
                Full-Lifecycle Engagement
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Production URL &amp; Status
              </span>
              <span className="font-primary font-semibold text-lg text-ink block truncate">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{project.liveUrl.replace("https://", "")}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ) : (
                  "Production Deployed"
                )}
              </span>
              <span className="text-xs font-mono text-mint font-bold block">
                Live &bull; Active Deployment
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 04: THE CHALLENGE                            */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              01 / The Challenge
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight mt-2">
              Breaking the predictable pattern.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-primary">
              {project.challenge}
            </p>

            {/* Pull Quote Callout Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-lavender/40 border border-ink/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-terracotta" />
              <p className="font-secondary text-xl sm:text-2xl text-ink leading-snug">
                &ldquo;Digital products should reward curiosity and make complex interactions feel completely natural. We build from that conviction.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-ink/60">
                <span className="font-bold text-terracotta">&bull;</span>
                <span>Oddlyyy Engineering Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 05: OUR APPROACH                             */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 bg-mint/20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              02 / Our Approach
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              Strategic architecture meets deliberate craft.
            </h2>
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-primary">
              {project.approach}
            </p>
          </div>

          {/* Three Approach Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Interrogate the Default
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                We strip away clichéd industry conventions and rebuild the user mental model to deliver an intuitive, unforgettable digital pathway.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Editorial Visual Materiality
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                Every screen is art-directed with custom typographic scale, balanced whitespace, and tangible feedback that rewards exploration.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-mint text-ink border border-ink/20 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Zero-Bloat Engineering
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                Strict TypeScript typing, modular Next.js architecture, and instant page transitions ensure exceptional reliability across all viewports.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 06: THE SOLUTION                             */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              03 / The Solution
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight mt-2">
              Architecting the experience.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-primary">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-2">
                <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                  Design Architecture
                </span>
                <h4 className="font-primary font-semibold text-lg text-ink">
                  Editorial Presentation &amp; Clarity
                </h4>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                  Structured visual hierarchy that directs focus straight to conversion, content discovery, and user engagement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-2">
                <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                  Engineering Stack
                </span>
                <h4 className="font-primary font-semibold text-lg text-ink">
                  Scalable Production Infrastructure
                </h4>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                  Modern Next.js application framework with optimized asset delivery, strict accessibility, and high Lighthouse audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 07: TECHNOLOGIES & DELIVERABLES              */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              04 / System Capabilities &amp; Stack
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              What went into the build.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: Technologies & Capabilities */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 space-y-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-terracotta" />
                <h3 className="font-primary font-semibold text-xl text-ink">
                  Capabilities &amp; Technologies
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                Modern tools, specialized integrations, and production frameworks deployed for {project.projectName}.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologiesUsed?.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-ink/5 border border-ink/15 text-ink hover:border-terracotta hover:text-terracotta transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 space-y-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-terracotta" />
                <h3 className="font-primary font-semibold text-xl text-ink">
                  Key Deliverables
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                Every asset, interface component, and backend integration delivered to full client specifications.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.deliverables?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-ink/[0.03] border border-ink/10 text-xs sm:text-sm text-ink/90 font-primary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 08: PROJECT OUTCOME & BENCHMARKS             */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 bg-mint/30">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
            05 / Outcome &amp; Verification
          </span>

          <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
            Production delivery &amp; architectural integrity.
          </h2>

          {/* Outcome Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-cream border-2 border-ink/20 shadow-ink-offset space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Production Deployment</span>
            </div>

            <p className="font-primary font-semibold text-xl sm:text-2xl text-ink leading-snug">
              {project.outcome}
            </p>

            {/* Ethical Studio Transparency Note */}
            <div className="pt-4 border-t border-ink/15 text-xs font-mono text-ink/70 leading-relaxed space-y-1">
              <p>
                <strong className="text-ink font-primary">Oddlyyy Studio Ethics:</strong> We let the code, design, and actual digital experience do the talking. In adherence to strict studio standards, client statistics or unverified claims are never fabricated.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 09: RELATED PROJECTS                         */}
      {/* ---------------------------------------------------- */}
      {relatedProjects.length > 0 && (
        <SectionContainer paddingY="lg" className="border-t border-ink/10">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                  06 / Related Work
                </span>
                <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                  More client projects built with craft.
                </h2>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase text-ink hover:text-terracotta transition-colors group"
              >
                <span>View All 4 Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2 Related Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relProj) => (
                <ProjectCard
                  key={relProj.slug}
                  slug={relProj.slug}
                  title={relProj.projectName}
                  client={relProj.client}
                  categories={[relProj.projectCategory]}
                  year={relProj.year}
                  badge={relProj.badge}
                  summary={relProj.description}
                  cardColor={relProj.cardColor || "cream"}
                />
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 11: NEXT PROJECT NAVIGATION                  */}
      {/* ---------------------------------------------------- */}
      {nextProject && (
        <SectionContainer paddingY="md" className="border-t border-ink/10">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 sm:p-14 rounded-3xl bg-lavender/50 border-2 border-ink/15 hover:border-ink hover:shadow-ink-offset hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
                  <span>Next Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <h3 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                  {nextProject.projectName}
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-ink/70">
                  <span>{nextProject.client}</span>
                  <span>&bull;</span>
                  <span>{nextProject.projectCategory}</span>
                </div>
              </div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-ink flex items-center justify-center bg-cream group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-all shadow-sm">
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </Link>
        </SectionContainer>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 12: FINAL PROJECT ENQUIRY CTA                */}
      {/* ---------------------------------------------------- */}
      <CtaSection
        title="Ready to build something that refuses to blend in?"
        description="We turn ambitious digital ideas into things that actually work. No cookie-cutter templates, no corporate fluff, no boring solutions."
        primaryButtonLabel="Let's make something odd"
        primaryButtonHref={`/contact?project=${project.slug}`}
        secondaryButtonLabel="Explore all services"
        secondaryButtonHref="/services"
      />
    </article>
  );
};

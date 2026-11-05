import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Package,
  Layers,
  Sparkles,
  Code2,
  Bot,
  Wand2,
  Megaphone,
  Cpu,
  Clock,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  PrimaryButton,
  SecondaryButton,
  Badge,
  Tag,
  HandwrittenNote,
} from "@/components/ui";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found — Oddlyyy" };

  return {
    title: `${service.name} — Oddlyyy Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  // Category-specific visual accents and icon mapping
  const categoryTheme: Record<
    string,
    {
      icon: React.ComponentType<{ className?: string }>;
      accentTag: string;
      heroGraphicBg: string;
      borderAccent: string;
      isDark?: boolean;
    }
  > = {
    "digital-platforms": {
      icon: Code2,
      accentTag: "Next.js 15 &bull; React 19 &bull; Modern Web",
      heroGraphicBg: "bg-mint",
      borderAccent: "border-ink/20",
    },
    "ai-automation": {
      icon: Bot,
      accentTag: "Generative Models &bull; Automated Workflows",
      heroGraphicBg: "bg-lavender",
      borderAccent: "border-ink/20",
    },
    "brand-identity": {
      icon: Wand2,
      accentTag: "Typography &bull; Visual Systems &bull; Guidelines",
      heroGraphicBg: "bg-cream/90",
      borderAccent: "border-ink/20",
    },
    "content-campaigns": {
      icon: Megaphone,
      accentTag: "Product Drops &bull; Motion &bull; Interactive Teasers",
      heroGraphicBg: "bg-lavender/60",
      borderAccent: "border-ink/20",
    },
    "the-odd-jobs": {
      icon: Sparkles,
      accentTag: "Creative Coding &bull; 2-Week Prototype Sprints",
      heroGraphicBg: "bg-ink text-cream",
      borderAccent: "border-ink/40",
      isDark: true,
    },
  };

  const theme = categoryTheme[service.slug] || categoryTheme["digital-platforms"];
  const CategoryIcon = theme.icon;

  return (
    <article className="min-h-screen bg-cream text-ink">
      {/* Top Breadcrumb Return Bar */}
      <SectionContainer paddingY="sm" className="border-b border-ink/10">
        <div className="flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
          <span className="font-mono text-xs text-ink/40 uppercase hidden sm:inline">
            Oddlyyy Discipline Specification // {service.index}
          </span>
        </div>
      </SectionContainer>

      {/* 1. SERVICE-SPECIFIC HERO */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Title, Category, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
                * Discipline [{service.index}]
              </span>
              <Badge variant="outline">{service.category}</Badge>
              <HandwrittenNote direction="left" color="terracotta">
                Be the exception
              </HandwrittenNote>
            </div>

            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
              {service.name}
            </h1>

            <p className="font-secondary text-lg sm:text-2xl text-ink/80 font-normal tracking-tight">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-primary max-w-2xl">
              {service.shortDescription}
            </p>

            {/* Functional CTA Button Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <PrimaryButton
                href={`/contact?service=${service.slug}`}
                size="lg"
                className="shadow-sm hover:shadow-ink-offset text-base w-full sm:w-auto text-center justify-center"
              >
                <span>Commission this discipline</span>
              </PrimaryButton>

              <SecondaryButton
                href="#our-approach"
                variant="outline"
                size="lg"
                showArrow
                className="text-base w-full sm:w-auto text-center justify-center"
              >
                <span>See our approach</span>
              </SecondaryButton>
            </div>
          </div>

          {/* Right Column: Category-Specific Visual Graphic Artifact */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div
              className={`w-full max-w-md aspect-square rounded-3xl border-2 border-ink p-7 sm:p-9 flex flex-col justify-between shadow-ink-offset transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 ${theme.heroGraphicBg}`}
            >
              {/* Graphic Header */}
              <div className="flex items-center justify-between pb-4 border-b border-current/15">
                <div className="flex items-center gap-2">
                  <CategoryIcon className="w-6 h-6 text-terracotta" />
                  <span className="font-mono text-xs uppercase font-bold tracking-wider">
                    ODD-SPEC // {service.index}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-current/20 uppercase font-semibold">
                  Discipline Guide
                </span>
              </div>

              {/* Graphic Center Content */}
              <div className="space-y-4 py-4">
                <div className="p-4 rounded-2xl bg-cream/30 border border-current/15 space-y-1.5 backdrop-blur-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 font-semibold block">
                    Core Capability Focus
                  </span>
                  <h3 className="font-primary font-semibold text-2xl tracking-tight leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-xs font-secondary opacity-80 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono opacity-80 pt-1">
                  <span>Standard Cadence:</span>
                  <span className="font-bold">Fixed-Scope Sprints</span>
                </div>
              </div>

              {/* Graphic Footer Pill */}
              <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider opacity-70">
                  {service.category}
                </span>
                <span className="font-handwriting text-terracotta text-lg font-bold">
                  * 100% custom craft
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 2. CLEAR EXPLANATION OF THE SERVICE */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-semibold">
              01 &bull; Comprehensive Overview
            </span>
            <span className="text-ink/40 font-mono text-xs">|</span>
            <span className="text-xs font-mono text-ink/60 uppercase">The Ethos</span>
          </div>

          <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-[1.05]">
            Why this discipline matters.
          </h2>

          <div className="prose text-base sm:text-xl text-ink/80 leading-relaxed font-primary space-y-4">
            <p>{service.detailedDescription}</p>
          </div>

          {/* Key Features Pill Grid */}
          <div className="pt-6 border-t border-ink/10 space-y-3">
            <span className="text-xs font-mono uppercase text-ink/50 tracking-wider font-semibold block">
              Core Architectural Pillars
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="p-3.5 rounded-xl bg-cream/70 border border-ink/15 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-primary font-medium text-ink">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. PROBLEMS THIS SERVICE SOLVES & 4. WHAT WE OFFER (Two-Column Asymmetrical Grid) */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Section 3: Problems This Service Solves */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold block mb-2">
                02 &bull; Business Bottlenecks
              </span>
              <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                Problems we solve for ambitious teams
              </h2>
            </div>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
              We eliminate the friction points holding companies back from clear communication, sub-second performance, and organic conversion.
            </p>

            <div className="space-y-3 pt-2">
              {service.problemsSolved?.map((problem, i) => (
                <div
                  key={problem}
                  className="p-5 rounded-2xl bg-lavender/40 border border-ink/15 flex items-start gap-3 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span className="w-6 h-6 rounded-full bg-ink text-cream font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-primary text-ink/85 leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: What We Offer (Services Included) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold block mb-2">
                03 &bull; Scope &amp; Offerings
              </span>
              <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                What we offer under {service.name}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
              Clear, transparent sub-disciplines that can be commissioned individually or bundled into a cross-functional roadmap.
            </p>

            <div className="space-y-3 pt-2">
              {service.servicesIncluded?.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl bg-mint/50 border border-ink/15 flex items-start gap-3 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-primary font-semibold text-base sm:text-lg text-ink">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 5. DELIVERABLES AND CAPABILITIES */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <div className="max-w-4xl space-y-8">
          <div>
            <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-semibold block mb-2">
              04 &bull; Tangible Output
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              Typical production deliverables
            </h2>
            <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-primary mt-2">
              We deliver concrete, documented assets and production-ready source code rather than vague consulting decks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-cream/80 border border-ink/15 flex items-start gap-3.5 shadow-sm transition-all hover:shadow-ink-offset hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-xl bg-terracotta text-cream flex items-center justify-center shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-primary font-semibold text-base text-ink">
                    {item}
                  </h3>
                  <span className="text-xs font-mono text-ink/50 uppercase">
                    Ready for Production
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 6. OUR APPROACH AND PROCESS */}
      <SectionContainer id="our-approach" paddingY="lg" className="border-b border-ink/10 scroll-mt-20">
        <div className="max-w-4xl space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-semibold">
                05 &bull; Execution Process
              </span>
              <HandwrittenNote direction="right" color="terracotta">
                no guesswork
              </HandwrittenNote>
            </div>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              Our 4-step execution lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl bg-cream/90 border border-ink/15 space-y-3 transition-all hover:shadow-ink-offset hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-ink/10">
                  <span className="font-mono text-xs text-terracotta font-bold uppercase tracking-wider">
                    Stage [{step.step}]
                  </span>
                  <Clock className="w-4 h-4 text-ink/40" />
                </div>

                <h3 className="font-primary font-semibold text-xl text-ink">
                  {step.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed font-primary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 7. RELEVANT TECHNOLOGIES OR TOOLS */}
      {service.toolsAndTechnologies && service.toolsAndTechnologies.length > 0 && (
        <SectionContainer paddingY="lg" className="border-b border-ink/10">
          <div className="max-w-4xl space-y-6">
            <div>
              <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-semibold block mb-2">
                06 &bull; Toolchain &amp; Standards
              </span>
              <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                Technologies and tools powering this discipline
              </h2>
            </div>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
              We deliberately select battle-tested, modern tools that deliver speed, developer maintainability, and zero bloat.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {service.toolsAndTechnologies.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2.5 rounded-xl bg-ink text-cream border border-ink flex items-center gap-2 text-xs font-mono font-medium shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-terracotta" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 8. RELATED SERVICES */}
      <SectionContainer paddingY="lg" className="border-b border-ink/10">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-ink/50 uppercase tracking-widest block mb-1">
                07 &bull; Cross-Discipline Synergy
              </span>
              <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                Complementary services to pair with this discipline
              </h2>
            </div>

            <Link
              href="/services"
              className="text-xs font-primary font-medium text-terracotta hover:text-ink uppercase tracking-wider flex items-center gap-1"
            >
              <span>View all disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-6 rounded-2xl bg-cream/70 border border-ink/15 hover:border-ink hover:shadow-ink-offset hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-ink/10 mb-3 border-b">
                    <span className="font-mono text-[11px] text-terracotta font-bold uppercase">
                      [{other.index}]
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-terracotta transition-colors" />
                  </div>
                  <h3 className="font-primary font-semibold text-lg text-ink group-hover:text-terracotta transition-colors mb-2">
                    {other.name}
                  </h3>
                  <p className="text-xs text-ink/70 line-clamp-2 leading-relaxed font-primary">
                    {other.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/10 mt-6 flex items-center justify-between text-[11px] font-mono text-ink/50 uppercase">
                  <span>Explore Spec</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <SectionContainer paddingY="lg" className="border-b border-ink/10">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-semibold block mb-2">
                08 &bull; Client Clarity
              </span>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 sm:p-8 rounded-2xl bg-cream/70 border border-ink/15 space-y-3"
                >
                  <h3 className="font-primary font-semibold text-lg sm:text-xl text-ink flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary pl-7 sm:pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* 10. PROJECT ENQUIRY CTA */}
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Discipline Commission Open
              </Badge>
              <HandwrittenNote direction="left" color="terracotta" className="text-lavender">
                no boring decks allowed
              </HandwrittenNote>
            </div>

            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-cream leading-[1.05]">
              Ready to work with our{" "}
              <span className="font-secondary text-terracotta font-normal">
                {service.name}
              </span>{" "}
              team?
            </h2>

            <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
              Whether you need this discipline as a standalone sprint or paired with our full agency engine, let&apos;s start the dialogue today.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                href={`/contact?service=${service.slug}`}
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>{service.ctaText}</span>
              </PrimaryButton>

              <SecondaryButton
                href="/services"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>View all services</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </article>
  );
}

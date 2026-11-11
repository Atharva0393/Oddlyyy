"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PrimaryButton,
  SecondaryButton,
  TextLink,
  NavLink,
  ServiceCard,
  ProjectCard,
  SectionHeading,
  Badge,
  Tag,
  InputField,
  Textarea,
  FooterLink,
  HandwrittenNote,
  OddlyyyLogo,
  IgnitionButton,
} from "@/components/ui";
import { ShaderButtons } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { Copy, Check, ArrowRight, ArrowUpRight, Sparkles, Layers, Sliders, Type, Palette } from "lucide-react";

export default function DesignPlaygroundPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sampleInput, setSampleInput] = useState<string>("hello@client.com");
  const [sampleErrorInput, setSampleErrorInput] = useState<string>("invalid-email");
  const [sampleTextarea, setSampleTextarea] = useState<string>(
    "We need a complete brand identity and an immersive digital experience."
  );

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colorPalette = [
    {
      name: "Warm Cream",
      token: "bg-cream / #F4E4DC",
      hex: "#F4E4DC",
      rgb: "244, 228, 220",
      role: "Primary Website Background",
      usage: "Body background, card surfaces, button text contrast",
      textColor: "text-ink",
      bgClass: "bg-cream",
      borderClass: "border-ink/20",
    },
    {
      name: "Odd Ink",
      token: "bg-ink / #202028",
      hex: "#202028",
      rgb: "32, 32, 40",
      role: "Primary Dark & Typography",
      usage: "Headings, body copy, dark inverted sections, borders, offset shadows",
      textColor: "text-cream",
      bgClass: "bg-ink",
      borderClass: "border-cream/20",
    },
    {
      name: "Terracotta",
      token: "bg-terracotta / #A04C34",
      hex: "#A04C34",
      rgb: "160, 76, 52",
      role: "Primary Accent",
      usage: "Primary CTA buttons, text highlights, active indicators, live badges",
      textColor: "text-cream",
      bgClass: "bg-terracotta",
      borderClass: "border-transparent",
    },
    {
      name: "Soft Lavender",
      token: "bg-lavender / #E4E0FC",
      hex: "#E4E0FC",
      rgb: "228, 224, 252",
      role: "Secondary Accent",
      usage: "Accent cards, secondary buttons, tags, micro-badges",
      textColor: "text-ink",
      bgClass: "bg-lavender",
      borderClass: "border-ink/15",
    },
    {
      name: "Soft Mint",
      token: "bg-mint / #E4F0E8",
      hex: "#E4F0E8",
      rgb: "228, 240, 232",
      role: "Secondary Background",
      usage: "Alternate capability cards, section backgrounds, subtle chips",
      textColor: "text-ink",
      bgClass: "bg-mint",
      borderClass: "border-ink/15",
    },
  ];

  const quickNav = [
    { href: "#colors", label: "01. Colors", icon: Palette },
    { href: "#typography", label: "02. Typography", icon: Type },
    { href: "#buttons", label: "03. Buttons & Links", icon: ArrowRight },
    { href: "#badges-tags", label: "04. Badges & Tags", icon: Sparkles },
    { href: "#cards", label: "05. Cards", icon: Layers },
    { href: "#forms", label: "06. Form Elements", icon: Sliders },
    { href: "#sections", label: "07. Section Variations", icon: Layers },
    { href: "#states", label: "08. State Matrix", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Internal Review Header Bar */}
      <div className="bg-ink text-cream px-4 sm:px-6 py-2.5 border-b border-ink text-xs font-mono flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          <span className="font-bold tracking-wider uppercase text-lavender">
            INTERNAL DESIGN PLAYGROUND
          </span>
          <span className="text-cream/40 hidden sm:inline">|</span>
          <span className="text-cream/70 hidden sm:inline">Oddlyyy Style Guide v1.0</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-cream/60 text-[11px]">Strict Palette Enforced</span>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
          >
            ← Exit Playground
          </Link>
        </div>
      </div>

      <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-16">
        {/* Style Guide Brand Banner */}
        <header className="border-b-2 border-ink/15 pb-12 mb-16 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
                  Confidential Brand Specification
                </span>
                <span className="text-ink/40">•</span>
                <span className="font-mono text-xs text-ink/60">Stage 01: Component Playground</span>
              </div>
              <div className="py-2">
                <OddlyyyLogo size="hero" variant="ink" showDoodle={true} interactive={true} />
              </div>
              <p className="font-primary text-xl md:text-2xl text-ink/80 font-medium tracking-tight">
                Design System &amp; Component Playground
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-3 p-5 rounded-2xl bg-lavender border border-ink/15 max-w-xs">
              <Badge variant="terracotta" withDot dotColor="mint">
                All Tokens Approved
              </Badge>
              <div className="text-left sm:text-right">
                <p className="text-xs font-mono uppercase text-ink/60">Official Tagline</p>
                <p className="font-primary font-bold text-lg text-ink">&ldquo;Be the exception.&rdquo;</p>
              </div>
              <HandwrittenNote direction="left" color="terracotta">
                100% bespoke creative
              </HandwrittenNote>
            </div>
          </div>

          <p className="text-base sm:text-lg text-ink/80 max-w-3xl leading-relaxed font-primary">
            This internal playground demonstrates the complete visual architecture for Oddlyyy:
            exact colour tokens, expressive headline scales, reusable UI components, and multi-state
            interactions. All elements adhere strictly to the 5 brand colours and typography hierarchy.
          </p>

          {/* Quick Nav Anchors */}
          <nav aria-label="Playground quick navigation" className="pt-4">
            <div className="text-xs font-mono text-ink/50 uppercase tracking-wider mb-3">
              Quick Navigation
            </div>
            <div className="flex flex-wrap gap-2">
              {quickNav.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-primary font-medium bg-cream border border-ink/15 hover:border-ink hover:bg-white/50 hover:shadow-ink-offset hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 text-terracotta" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        </header>

        {/* SECTION 1: COLOUR SYSTEM */}
        <section id="colors" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="01 / Exact Colour Palette"
            title="Approved brand colours &amp; usage rules"
            annotation="Strict 5-colour limit"
            description="Warm Cream is the primary canvas; Odd Ink defines type and structure; Terracotta commands attention; Soft Lavender and Soft Mint provide subtle editorial depth. Click any swatch to copy its hex code."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                onClick={() => copyToClipboard(color.hex, color.name)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1 ${color.bgClass} ${color.borderClass} ${color.textColor}`}
              >
                {/* Copy Status Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold opacity-75">
                    {color.role}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    {copiedColor === color.name ? (
                      <Check className="w-3.5 h-3.5 text-terracotta stroke-[3]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-primary font-bold text-xl tracking-tight">
                    {color.name}
                  </h3>
                  <p className="font-mono text-sm font-semibold tracking-wider">
                    {color.hex}
                  </p>
                  <p className="font-mono text-xs opacity-60">
                    rgb({color.rgb})
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/15 text-xs opacity-75 leading-relaxed font-primary">
                  {color.usage}
                </div>

                {copiedColor === color.name && (
                  <div className="absolute inset-0 rounded-2xl bg-terracotta text-cream flex items-center justify-center font-primary font-bold text-sm shadow-lg animate-in fade-in zoom-in-95 duration-150">
                    Copied {color.hex}!
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-lavender/50 border border-ink/15 flex items-center justify-between text-xs font-mono text-ink/80">
            <span className="flex items-center gap-2">
              <span className="text-terracotta font-bold">Rule:</span>
              <span>Zero external colours (no blues, vibrant greens, or saturated purples) are permitted.</span>
            </span>
            <span className="font-semibold text-terracotta">Palette Verified ✓</span>
          </div>
        </section>

        {/* SECTION 2: TYPOGRAPHY ARCHITECTURE */}
        <section id="typography" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="02 / Typographic Architecture"
            title="Expressive sans-serif pairing with human annotations"
            annotation="Inter + Tempting + Caveat"
            description="Engineered for high editorial impact inspired by modern Swiss typography. Inter serves as the confident geometric primary typeface, Tempting delivers warm editorial supporting copy, and Caveat provides human handwritten visual surprises."
          />

          <div className="space-y-8 p-6 sm:p-10 rounded-3xl bg-cream/80 border-2 border-ink/15">
            {/* Display 2XL */}
            <div className="border-b border-ink/15 pb-8">
              <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                <span>Display 2XL — Inter Bold</span>
                <span>clamp(3.5rem, 8vw, 7.5rem) / line-height: 1.05</span>
              </div>
              <div className="font-primary font-bold text-display-2xl text-ink tracking-tight">
                Be the exception<span className="text-terracotta">.</span>
              </div>
            </div>

            {/* Display XL */}
            <div className="border-b border-ink/15 pb-8">
              <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                <span>Display XL — Inter Bold</span>
                <span>clamp(2.75rem, 6vw, 5.5rem) / line-height: 1.05</span>
              </div>
              <div className="font-primary font-bold text-display-xl text-ink tracking-tight">
                Unconventional Creative Agency
              </div>
            </div>

            {/* Display LG */}
            <div className="border-b border-ink/15 pb-8">
              <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                <span>Display LG — Inter Bold</span>
                <span>clamp(2.25rem, 4.5vw, 4rem) / line-height: 1.08</span>
              </div>
              <div className="font-primary font-bold text-display-lg text-ink tracking-tight">
                Digital Experiences for Rule Breakers
              </div>
            </div>

            {/* Heading 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-ink/15 pb-8">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                  <span>Heading 1</span>
                  <span>clamp(1.85rem, 3.5vw, 3rem)</span>
                </div>
                <h3 className="font-primary font-bold text-heading-1 text-ink">
                  We don&apos;t do boring corporate decks.
                </h3>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                  <span>Heading 2</span>
                  <span>clamp(1.5rem, 2.5vw, 2.25rem)</span>
                </div>
                <h3 className="font-primary font-semibold text-heading-2 text-ink">
                  Brand Identity &amp; Creative Direction
                </h3>
              </div>
            </div>

            {/* Heading 3 & 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-ink/15 pb-8">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                  <span>Heading 3</span>
                  <span>clamp(1.25rem, 2vw, 1.75rem)</span>
                </div>
                <h4 className="font-primary font-medium text-heading-3 text-ink">
                  Subverting acoustic branding for Berlin&apos;s underground sound lab.
                </h4>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">
                  <span>Heading 4</span>
                  <span>1.25rem (20px)</span>
                </div>
                <h5 className="font-primary font-semibold text-heading-4 text-ink">
                  Award Recognition &amp; Case Study Metrics
                </h5>
              </div>
            </div>

            {/* Body Text & Paragraph Styles */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Body Large (Inter Primary, 18px / 1.6)
                </span>
                <p className="text-body-lg text-ink/85 leading-relaxed font-primary">
                  Oddlyyy was founded on a simple truth: the internet is full of polished mediocrity.
                  We build cultural artefacts that provoke, seduce, and endure.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Body Medium (Inter Primary, 16px / 1.55)
                </span>
                <p className="text-body-md text-ink/80 leading-relaxed font-primary">
                  Every interaction is engineered with micro-physics, kinetic feedback, and
                  uncompromising typography to give brands a decisive unfair advantage.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Body Small &amp; Caption (14px &amp; 12px)
                </span>
                <p className="text-body-sm text-ink/70 leading-relaxed font-primary">
                  Standard small body copy for case study metadata, client notes, and specifications.
                </p>
                <p className="text-caption font-mono uppercase tracking-widest text-ink/60 mt-2">
                  CAPTION / META: 01_ODD_STUDIO_ARCHIVE_2025
                </p>
              </div>
            </div>

            {/* Editorial Script Accent Specimen (Tempting) */}
            <div className="pt-6 border-t border-ink/15">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block mb-3">
                Editorial Script Accent (Tempting Font — Selective Highlights &amp; Subheadings)
              </span>
              <div className="p-6 rounded-2xl bg-mint/40 border border-ink/15 space-y-3">
                <p className="font-secondary text-2xl sm:text-3xl text-terracotta leading-snug">
                  &ldquo;Normal is the only real commercial risk.&rdquo;
                </p>
                <p className="text-xs font-mono text-ink/60">
                  Used selectively for expressive subheadings, short editorial phrases, and callout quotes.
                </p>
              </div>
            </div>

            {/* Handwritten Notes Gallery */}
            <div className="pt-6 border-t border-ink/15">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block mb-4">
                Handwritten Annotations (Caveat Font with Directional Doodles)
              </span>
              <div className="flex flex-wrap items-center gap-6 p-5 rounded-2xl bg-lavender/40 border border-ink/15">
                <HandwrittenNote direction="left" color="terracotta">
                  ← yes, we actually built this
                </HandwrittenNote>
                <HandwrittenNote direction="right" color="terracotta">
                  be the exception →
                </HandwrittenNote>
                <HandwrittenNote direction="up" color="ink">
                  ↑ zero corporate templates
                </HandwrittenNote>
                <HandwrittenNote direction="down" color="terracotta">
                  ↓ interactive proof
                </HandwrittenNote>
                <HandwrittenNote direction="none" color="terracotta" rotate="right">
                  * 100% human made *
                </HandwrittenNote>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BUTTONS & INTERACTIVE LINKS */}
        <section id="buttons" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="03 / Button System &amp; Links"
            title="Tactile buttons with kinetic physics"
            annotation="Micro-offset shadows"
            description="Buttons utilize subtle offset translations (-translate-x-0.5, -translate-y-0.5) and ink offset box-shadows on hover, providing an immediate tactile response."
          />

          <div className="space-y-8 p-6 sm:p-10 rounded-3xl bg-cream/80 border-2 border-ink/15">
            {/* Ignition Button & ThreeUI ShaderButtons */}
            <div className="space-y-4 pb-6 border-b border-ink/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono text-terracotta uppercase tracking-wider font-bold">
                  Tactile Ignition Control &bull; Raw WebGL Ambient Shader
                </span>
                <span className="text-xs font-mono text-ink/60">
                  ThreeUI ShaderButtons (variant=&quot;ignition-button&quot;)
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Configured ThreeUI ShaderButtons */}
                <div className="lg:col-span-7">
                  <div className="shader-frame w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden border-2 border-ink/20 shadow-ink-offset">
                    <ShaderButtons
                      variant="ignition-button"
                      mode="dark"
                      hue={0}
                      saturation={1.0}
                      brightness={1.0}
                    />
                  </div>
                </div>

                {/* Live Oddlyyy Let's Make Something Odd Ignition Buttons */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono text-ink/60 uppercase tracking-wider block">
                    Oddlyyy &ldquo;Let&apos;s make something odd&rdquo; Primary CTA
                  </span>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-ink/50 uppercase">Soft Lavender (Default Brand Accent)</span>
                      <div>
                        <IgnitionButton size="md" pastelColor="lavender" href="/contact">
                          Let&apos;s make something odd
                        </IgnitionButton>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-ink/50 uppercase">Soft Mint Pastel</span>
                      <div>
                        <IgnitionButton size="md" pastelColor="mint" href="/contact">
                          Let&apos;s make something odd
                        </IgnitionButton>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-ink/50 uppercase">Warm Ivory / Cream Pastel</span>
                      <div>
                        <IgnitionButton size="md" pastelColor="cream" href="/contact">
                          Let&apos;s make something odd
                        </IgnitionButton>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-ink/60 leading-relaxed">
                    Hover to prime the core accelerator warp stars; click to execute ignition flash.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Button Variations */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider">
                  Primary Button (Terracotta Accent)
                </span>
                <span className="text-xs font-mono text-ink/50">bg-terracotta text-cream</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton size="lg">Start a Project</PrimaryButton>
                <PrimaryButton size="md">Explore Work</PrimaryButton>
                <PrimaryButton size="sm">Get in Touch</PrimaryButton>
                <PrimaryButton size="md" showArrow={false}>
                  Without Arrow
                </PrimaryButton>
                <PrimaryButton size="md" disabled>
                  Disabled State
                </PrimaryButton>
              </div>
            </div>

            {/* Secondary Button Variations */}
            <div className="space-y-3 pt-6 border-t border-ink/15">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider">
                  Secondary Buttons (Outline, Lavender, Mint, Ink)
                </span>
                <span className="text-xs font-mono text-ink/50">4 distinct variant treatments</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <SecondaryButton variant="outline" showArrow>
                  Outline Variant
                </SecondaryButton>
                <SecondaryButton variant="lavender" showArrow>
                  Soft Lavender
                </SecondaryButton>
                <SecondaryButton variant="mint" showArrow>
                  Soft Mint
                </SecondaryButton>
                <SecondaryButton variant="ink" showArrow>
                  Odd Ink Solid
                </SecondaryButton>
                <SecondaryButton variant="outline" size="sm">
                  Small Outline
                </SecondaryButton>
                <SecondaryButton variant="outline" disabled>
                  Disabled
                </SecondaryButton>
              </div>
            </div>

            {/* Text Links & Inline Interactions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink/15">
              <div className="space-y-3">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Editorial Text Links
                </span>
                <div className="flex flex-col items-start gap-3">
                  <TextLink href="#details" showArrow variant="terracotta">
                    View Case Study
                  </TextLink>
                  <TextLink href="#archive" showArrow variant="ink">
                    Studio Archive 2025
                  </TextLink>
                  <TextLink href="#simple" showArrow={false} variant="terracotta">
                    Inline Simple Underline
                  </TextLink>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Navigation Links
                </span>
                <div className="flex items-center gap-6">
                  <NavLink href="#active" isActive badge="06">
                    Work
                  </NavLink>
                  <NavLink href="#inactive">Services</NavLink>
                  <NavLink href="#about">About</NavLink>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  Footer Links (Light &amp; Dark)
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <FooterLink href="#terms" isDark={false}>
                      Privacy Policy
                    </FooterLink>
                    <FooterLink href="#ig" isDark={false} showArrow isExternal>
                      Instagram
                    </FooterLink>
                  </div>
                  <div className="p-3 rounded-lg bg-ink text-cream w-full flex items-center gap-4">
                    <FooterLink href="#dark-link" isDark showArrow isExternal>
                      Inverted Dark Footer Link
                    </FooterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BADGES & TAGS */}
        <section id="badges-tags" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="04 / Badges &amp; Tags"
            title="Status indicators, live signals &amp; category tags"
            description="Pill-shaped badges for project awards and real-time studio availability, alongside interactive filter chips."
          />

          <div className="space-y-8 p-6 sm:p-10 rounded-3xl bg-cream/80 border-2 border-ink/15">
            {/* Badges Matrix */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Badge Variants (All 5 Color Presets)
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="terracotta">Terracotta Badge</Badge>
                <Badge variant="lavender">Soft Lavender</Badge>
                <Badge variant="mint">Soft Mint</Badge>
                <Badge variant="ink">Odd Ink Badge</Badge>
                <Badge variant="outline">Hairline Outline</Badge>
                <Badge variant="terracotta" size="sm">
                  Small Size
                </Badge>
              </div>
            </div>

            {/* Live Pulsing Availability Badges */}
            <div className="space-y-3 pt-6 border-t border-ink/15">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Live Status Badges (Pulsing Dot)
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="mint" withDot dotColor="mint">
                  Available for Q2 Projects
                </Badge>
                <Badge variant="terracotta" withDot dotColor="terracotta">
                  Booking Autumn 2025
                </Badge>
                <Badge variant="lavender" withDot dotColor="lavender">
                  2 Studio Slots Remaining
                </Badge>
              </div>
            </div>

            {/* Interactive Category Tags */}
            <div className="space-y-3 pt-6 border-t border-ink/15">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider">
                  Interactive Category Filter Chips (Click to test active state)
                </span>
                <span className="text-xs font-mono text-terracotta">
                  Active: &quot;{activeFilter}&quot;
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "All",
                  "Brand Identity",
                  "Creative Web",
                  "Experiential 3D",
                  "Motion Direction",
                  "Digital Strategy",
                ].map((tag) => (
                  <Tag
                    key={tag}
                    isActive={activeFilter === tag}
                    onClick={() => setActiveFilter(tag)}
                    variant={tag === "Creative Web" ? "mint" : tag === "Experiential 3D" ? "lavender" : "cream"}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICE CARDS */}
        <section id="cards" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="05 / Service Card Variations"
            title="Structured capability cards across all 4 themes"
            annotation="4 color variants"
            description="Features index markers ([01]), expressive bold typography, deliverable chips, and interactive hover indicator buttons."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mint Variant */}
            <ServiceCard
              index={1}
              variant="mint"
              title="Brand Identity &amp; Culture"
              description="Bespoke visual identities that defy corporate conformity and establish distinctive cultural presence."
              deliverables={["Naming", "Visual Identity", "Guidelines", "Art Direction"]}
            />

            {/* Lavender Variant */}
            <ServiceCard
              index={2}
              variant="lavender"
              title="Bespoke Web Platforms"
              description="High-performance digital flagship sites with fluid kinetic typography and micro-interactions."
              deliverables={["Digital Flagship", "Motion Design", "Interactive 3D", "Content System"]}
            />

            {/* Warm Cream Variant */}
            <ServiceCard
              index={3}
              variant="cream"
              title="Experimental Campaigns"
              description="Viral digital stunts, interactive drops, and immersive product launch narratives."
              deliverables={["Guerrilla Digital", "Interactive Stunts", "Motion Reels", "AR Filters"]}
            />

            {/* Odd Ink Dark Variant */}
            <ServiceCard
              index={4}
              variant="ink"
              title="Creative Engineering"
              description="End-to-end digital craft combining seamless usability with unconventional creative flair."
              deliverables={["Client Portals", "Tailored Solutions", "Workflow Integrations", "Speed Audits"]}
            />
          </div>
        </section>

        {/* SECTION 6: PROJECT CARDS */}
        <section className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="06 / Project Card Variations"
            title="Case study cards with responsive aspect ratios"
            description="Supports video (16:10), square (1:1), and portrait (4:5) frames with hover zoom, tags, and interactive arrow pills."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Chess Project - Lavender */}
            <ProjectCard
              slug="the-chess-project"
              client="The Chess Project"
              title="Full-stack chess education platform with dynamic courses and live coaching"
              categories={["Digital Platforms", "EdTech"]}
              year="2025"
              badge="Full-Stack Platform"
              aspectRatio="video"
              cardColor="lavender"
              summary="An international chess education platform connecting ambitious players with structured courses, FIDE-titled coaches, and personalized learning experiences."
            />

            {/* Meraki Designs - Mint */}
            <ProjectCard
              slug="meraki-designs"
              client="Meraki Designs"
              title="Editorial architectural brand experience and interactive cost estimation"
              categories={["Corporate Websites", "Architecture"]}
              year="2025"
              badge="Editorial Architecture"
              aspectRatio="square"
              cardColor="mint"
              summary="An editorial digital experience for an architecture and design studio, built around thoughtful spaces, refined aesthetics, and considered design."
            />

            {/* Chicago Yachts - Cream */}
            <ProjectCard
              slug="chicago-yachts"
              client="Chicago Yachts"
              title="Luxury yacht charter booking experience with real-time fleet reservations"
              categories={["Booking Platforms", "Luxury Hospitality"]}
              year="2025"
              badge="Luxury Booking"
              aspectRatio="portrait"
              cardColor="cream"
              summary="A premium direct-operator yacht charter booking experience combining luxury presentation with a sophisticated reservation and fleet management system."
            />
          </div>
        </section>

        {/* SECTION 7: FORM ELEMENTS */}
        <section id="forms" className="mb-24 scroll-mt-20">
          <SectionHeading
            eyebrow="07 / Form System &amp; Inputs"
            title="Accessible input fields in all practical states"
            description="Tested for default, active focus, helper text, disabled, and error validation states."
          />

          <div className="p-6 sm:p-10 rounded-3xl bg-cream/80 border-2 border-ink/15 max-w-4xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Default Input */}
              <InputField
                label="Full Name (Default State)"
                placeholder="Alex Morgan"
                value="Alex Morgan"
                onChange={() => {}}
                helperText="Standard active field representation."
              />

              {/* Input with Helper */}
              <InputField
                label="Work Email (With Helper)"
                type="email"
                placeholder="name@company.com"
                value={sampleInput}
                onChange={(e) => setSampleInput(e.target.value)}
                helperText="We will reply within 24 business hours."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Optional Field */}
              <InputField
                label="Company / Studio"
                placeholder="Odd Ventures Ltd."
                isOptional
                helperText="Optional signifier in header."
              />

              {/* Disabled Field */}
              <InputField
                label="Reference Code (Disabled)"
                value="ODD-2025-ARCHIVE"
                disabled
                helperText="Disabled field with reduced opacity and cursor lock."
              />
            </div>

            {/* Error Validation State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Project Budget (Error State)"
                value={sampleErrorInput}
                onChange={(e) => setSampleErrorInput(e.target.value)}
                error="Please enter a valid budget range (e.g. $25k+)."
              />

              <InputField
                label="Target Launch Date"
                placeholder="Q3 2025"
                isOptional
                helperText="Format: Quarter + Year."
              />
            </div>

            {/* Textarea */}
            <Textarea
              label="Project Scope &amp; Vision"
              rows={4}
              value={sampleTextarea}
              onChange={(e) => setSampleTextarea(e.target.value)}
              helperText="Generous typography and clean resizing handle."
            />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink/15">
              <HandwrittenNote direction="right" color="terracotta">
                Ready to review forms?
              </HandwrittenNote>
              <PrimaryButton size="md">Test Submit CTA</PrimaryButton>
            </div>
          </div>
        </section>

        {/* SECTION 8: FULL SECTION CONTEXTS (DARK & LIGHT) */}
        <section id="sections" className="mb-24 scroll-mt-20 space-y-12">
          <SectionHeading
            eyebrow="08 / Full Section Contexts"
            title="Example Light &amp; Dark section executions"
            annotation="Contextual immersion"
            description="Demonstrating how the approved palette handles high-impact dark sections (Odd Ink #202028), primary light sections (Warm Cream #F4E4DC), and subtle secondary atmospheres (Mint &amp; Lavender)."
          />

          {/* 1. Primary Light Section (Warm Cream #F4E4DC) */}
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-cream border-2 border-ink/15 space-y-8">
            <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider pb-4 border-b border-ink/10">
              <span>Section Type: Primary Light Canvas</span>
              <span>Tokens: bg-cream (#F4E4DC) / text-ink (#202028)</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <Badge variant="terracotta">Light Context</Badge>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                Designed for brands that refuse to whisper.
              </h2>
              <p className="text-body-lg text-ink/80 leading-relaxed font-primary">
                In this default light environment, Warm Cream produces a warm, tactile print-editorial
                aesthetic far superior to sterile pure white.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PrimaryButton size="md">Start Project</PrimaryButton>
                <SecondaryButton variant="outline" showArrow>
                  Explore Capabilities
                </SecondaryButton>
              </div>
            </div>
          </div>

          {/* 2. Inverted Dark Section (Odd Ink #202028) */}
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-ink text-cream border-2 border-ink space-y-8">
            <div className="flex items-center justify-between text-xs font-mono text-cream/50 uppercase tracking-wider pb-4 border-b border-cream/15">
              <span>Section Type: Dark Mode Inversion</span>
              <span>Tokens: bg-ink (#202028) / text-cream (#F4E4DC)</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <Badge variant="lavender">Dark Context</Badge>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-cream tracking-tight">
                Flawless inversion for high-drama agency moments.
              </h2>
              <p className="text-body-lg text-cream/80 leading-relaxed font-primary">
                When inverted into Odd Ink (#202028), the exact same design tokens provide deep contrast
                without jarring eye fatigue.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PrimaryButton size="md">Launch With Us</PrimaryButton>
                <SecondaryButton variant="mint" showArrow>
                  View Dark Work
                </SecondaryButton>
                <FooterLink href="#contact" isDark showArrow>
                  hello@oddlyyy.agency
                </FooterLink>
              </div>
            </div>
          </div>

          {/* 3. Alternating Atmosphere: Soft Mint (#E4F0E8) */}
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-mint text-ink border-2 border-ink/15 space-y-8">
            <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider pb-4 border-b border-ink/10">
              <span>Section Type: Atmospheric Accent Canvas</span>
              <span>Tokens: bg-mint (#E4F0E8) / text-ink (#202028)</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <Badge variant="outline">Soft Mint Canvas</Badge>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                Subtle variety for case studies &amp; manifestos.
              </h2>
              <p className="text-body-lg text-ink/80 leading-relaxed font-primary">
                Soft Mint brings organic freshness to project spotlights and client testimonials,
                retaining full typographic harmony.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <SecondaryButton variant="ink" showArrow>
                  Mint Section Action
                </SecondaryButton>
                <TextLink href="#mint" showArrow variant="terracotta">
                  Learn More About Our Process
                </TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: HOVER & FOCUS STATES TEST BENCH */}
        <section id="states" className="mb-20 scroll-mt-20">
          <SectionHeading
            eyebrow="09 / Hover, Focus &amp; Kinetic States"
            title="Interactive state test matrix"
            description="Hover and tab through the matrix below to verify focus outlines, micro-offset translations, and tactile feedback."
          />

          <div className="p-6 sm:p-10 rounded-3xl bg-cream/80 border-2 border-ink/15 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {/* Normal State */}
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-4">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  1. Default / Rest
                </span>
                <PrimaryButton size="sm" showArrow={false}>
                  Rest State
                </PrimaryButton>
                <p className="text-xs text-ink/60">Base transform &amp; border</p>
              </div>

              {/* Hover Demonstration */}
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-4">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  2. Hover (Simulated)
                </span>
                <div className="inline-flex items-center justify-center font-primary font-medium tracking-tight bg-terracotta-hover text-cream rounded-full px-4 py-2 text-sm shadow-ink-offset -translate-x-0.5 -translate-y-0.5">
                  Hover Offset
                </div>
                <p className="text-xs text-ink/60">Offset shadow + translate</p>
              </div>

              {/* Focus Ring Demonstration */}
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-4">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  3. Accessible Focus Ring
                </span>
                <button
                  type="button"
                  className="font-primary font-medium bg-terracotta text-cream rounded-full px-4 py-2 text-sm ring-2 ring-terracotta ring-offset-2 ring-offset-cream"
                >
                  Focus State
                </button>
                <p className="text-xs text-ink/60">High contrast focus ring</p>
              </div>

              {/* Disabled State */}
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-4">
                <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                  4. Disabled State
                </span>
                <PrimaryButton size="sm" disabled showArrow={false}>
                  Disabled
                </PrimaryButton>
                <p className="text-xs text-ink/60">50% opacity &amp; pointer lock</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-lavender/40 border border-ink/15 text-xs font-mono text-ink/75 flex items-center justify-between">
              <span>Try pressing &quot;Tab&quot; on your keyboard to test focus navigation across all elements.</span>
              <span className="font-semibold text-terracotta">WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        </section>

        {/* Playground Footer */}
        <footer className="border-t-2 border-ink/15 pt-8 flex flex-wrap items-center justify-between text-xs font-mono text-ink/60 gap-4">
          <div>
            Oddlyyy Internal Style Guide &bull; Confidential
          </div>
          <div className="flex items-center gap-2">
            <span>Brand Tagline:</span>
            <span className="font-bold text-terracotta">&ldquo;Be the exception.&rdquo;</span>
          </div>
        </footer>
      </div>
    </div>
  );
}


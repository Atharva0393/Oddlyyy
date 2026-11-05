# ODDLYYY — Project Guidelines & Architecture

> **Brand**: ODDLYYY  
> **Tagline**: *"Be the exception."*  
> **Industry**: Creative Digital Agency  
> **Tone & Aesthetic**: Premium, Creative, Gen Z Inspired, Unconventional, High-Energy, Editorial.

---

## 1. Core Brand Identity & Vibe

ODDLYYY is an unconventional, next-generation creative digital agency catering to brands that refuse to blend into the background. The digital experience must embody:
- **Bold & Unconventional**: Break free from boring corporate agency templates with kinetic typography, high-contrast layouts, and unexpected micro-interactions.
- **Gen Z Inspired**: Vibrant accents, brutalist-meets-refined editorial sensibility, playful cursor physics, authentic tone, and fluid motion.
- **Ultra-Premium Quality**: Polished polish, pixel-perfect alignment, smooth scrolling, and zero jank.
- **Lightning Fast**: Sub-second initial load, optimized assets, and zero layout shift.

---

## 2. Approved Technical Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Hybrid SSR/SSG rendering, routing, and image/font optimization. |
| **Runtime / Language** | **TypeScript (Strict Mode)** | Type safety, maintainability, and clean interfaces. |
| **Styling** | **Tailwind CSS** | Design-token-driven utility styling with custom agency config. |
| **Animation & Motion** | **Framer Motion** | Orchestrated scroll reveals, magnetic buttons, and page transitions. |
| **Smooth Scrolling** | **Lenis** | Lightweight kinetic smooth scrolling for premium agency feel. |
| **Icons** | **Lucide React** | Consistent, tree-shakeable SVG icons. |
| **Content Strategy** | **Typed Content Modules (`src/content/`)** | Complete separation of content/data from presentation. |

---

## 3. The 10 Technical Development Rules

1. **Reusable Components Everywhere**: Build atomic, modular components (`Button`, `Badge`, `Card`, `SectionHeader`, `Marquee`). Never duplicate layout logic.
2. **Clean & Readable Code**: Write self-documenting code with clear function names, explicit TypeScript interfaces, and zero spaghetti logic.
3. **Consistent Naming Conventions**:
   - `PascalCase` for React components (`FeaturedProjectCard.tsx`).
   - `camelCase` for utilities, hooks, and helper functions (`useScrollProgress.ts`, `cn.ts`).
   - `kebab-case` for public assets and static directories (`brand-mark.svg`).
4. **Separate Content from Presentation**: All portfolio projects, service offerings, case studies, team members, and testimonials must live in structured data files under `src/content/`.
5. **Zero Unnecessary Dependencies**: Keep the bundle minimal. Only install packages that directly serve performance or verified UX requirements.
6. **No Component Duplication**: If a UI pattern repeats twice, abstract it into `components/ui/` or `components/sections/`.
7. **Unified Design System**: All routes (Home, Work, Services, About, Contact) must strictly inherit shared typography, spacing scales, color tokens, and animation curves.
8. **Mobile-First Responsive Design**: Design and implement layouts starting at 360px width, scaling gracefully through tablet (768px), desktop (1024px), and ultra-wide (1440px+).
9. **Accessible HTML Semantics**: Use `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, and `<aside>` appropriately. Ensure full keyboard navigation, ARIA labels for icon buttons, and WCAG AA contrast compliance.
10. **SEO & Social Optimization**: Every page must declare comprehensive metadata (`title`, `description`, `openGraph`, `twitter`) and semantic headings (`h1` through `h4`) for maximum discoverability.

---

## 4. Directory Structure Blueprint

```text
Oddlyyy/
├── public/                  # Static assets (brand logos, case study media, favicons)
├── src/
│   ├── app/                 # Next.js App Router multi-page routing
│   │   ├── layout.tsx       # Root layout (fonts, providers, smooth scroll, nav, footer)
│   │   ├── page.tsx         # Homepage ("Be the exception.")
│   │   ├── work/            # Portfolio catalog & dynamic [slug] case studies
│   │   ├── services/        # Capabilities, deliverables & process
│   │   ├── about/           # Agency manifesto, values & team
│   │   ├── contact/         # Interactive project inquiry form & booking
│   │   ├── globals.css      # Custom utilities, base resets, noise textures
│   │   └── not-found.tsx    # Custom 404 page
│   ├── components/
│   │   ├── layout/          # Header, MobileMenu, Footer, SmoothScroll
│   │   ├── ui/              # Reusable primitives (Button, Card, Badge, Modal, Input)
│   │   └── sections/        # Composite section blocks (Hero, Showcase, Manifesto, etc.)
│   ├── content/             # Structured data (projects.ts, services.ts, agency.ts)
│   ├── lib/                 # Utilities (cn.ts, animations.ts, constants.ts)
│   └── types/               # TypeScript definitions
├── PROJECT_GUIDELINES.md    # Development & architectural rules
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. Official Design Tokens & Aesthetics

### Exact Brand Palette (Zero additional colours permitted)
- **Primary Background (Warm Cream)**: `#F4E4DC` — Default website background across all pages.
- **Primary Dark (Odd Ink)**: `#202028` — Typography, outlines, and selected high-impact dark sections.
- **Primary Accent (Terracotta)**: `#A04C34` — Primary buttons, interactive links, badges, highlights.
- **Secondary Accent (Soft Lavender)**: `#E4E0FC` — Selected cards, category tags, badges.
- **Secondary Background (Soft Mint)**: `#E4F0E8` — Selected cards, capabilities, alternating sections.

### Typography Direction
- **Heading Font**: **Space Grotesk** — Expressive, quirky, geometric sans-serif with bold letterforms and ink traps.
- **Body Font**: **DM Sans** — Clean, contemporary, highly legible editorial sans-serif.
- **Annotation Font**: **Caveat** — Hand-drawn margin notes and playful creative director annotations.

### Reusable UI Component Library (`src/components/ui/`)
- `PrimaryButton`: Main CTA with terracotta fill, cream text, kinetic arrow slide, and tactile micro-offset.
- `SecondaryButton`: Outline, lavender, mint, and ink variants with hover physics.
- `TextLink`: Editorial inline link with animated underline expansion.
- `NavLink`: Header navigation item with active indicator line and optional micro-badge.
- `ServiceCard`: Distinctive capability card with index number, deliverable tags, and color variants.
- `ProjectCard`: Portfolio case study showcase with zoom preview, badges, and tag chips.
- `SectionHeading`: Large expressive typography hierarchy with left, center, and split layouts.
- `Badge`: Status pills, availability indicator with live pulsing dot, and award tags.
- `Tag`: Interactive filter chips and skill pills.
- `InputField`: High-contrast accessible form field with error and helper states.
- `Textarea`: Multi-line project brief input with accessible validation styling.
- `FooterLink`: Clean animated footer navigation item with external link indicator.
- `HandwrittenNote`: Playful editorial margin doodle annotations with arrow markers.



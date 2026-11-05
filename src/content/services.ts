import { ServiceCategory, ServiceItem } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  "Digital & Development",
  "AI & Automation",
  "Branding & Creative",
  "Marketing & Content",
  "The Odd Jobs",
];

export const servicesData: ServiceItem[] = [
  // 01 — Digital & Development
  {
    id: "srv-digital-platforms",
    name: "Digital & Development",
    title: "Digital & Development",
    slug: "digital-platforms",
    category: "Digital & Development",
    index: "01",
    tagline: "High-performance web flagships engineered with modern architecture.",
    shortDescription:
      "Modern web platforms and applications built with Next.js, TypeScript, and fluid kinetic interactions.",
    description:
      "Modern web platforms and applications built with Next.js, TypeScript, and fluid kinetic interactions.",
    detailedDescription:
      "We build modern digital flagships and bespoke web applications. By combining strict type-safety, accessible HTML semantics, and optimized asset pipelines, our digital experiences achieve sub-second load times while providing immersive, tactile user interactions.",
    detailedOverview:
      "We build modern digital flagships and bespoke web applications. By combining strict type-safety, accessible HTML semantics, and optimized asset pipelines, our digital experiences achieve sub-second load times while providing immersive, tactile user interactions.",
    servicesIncluded: [
      "Custom Next.js 15 & React 19 Applications",
      "Responsive Token-Driven Design Systems",
      "Headless CMS Architecture (Sanity, Payload)",
      "Full-Stack Web Applications & Custom APIs",
      "Performance Audits & Core Web Vitals Optimization",
    ],
    problemsSolved: [
      "Current website looks like a generic SaaS template and fails to reflect company caliber.",
      "Slow load times, sluggish animations, and poor mobile responsiveness reducing conversion rates.",
      "Non-technical team members unable to update content without breaking production code.",
      "Inaccessible markup causing regulatory exposure and alienating keyboard/assistive device users.",
    ],
    toolsAndTechnologies: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript (Strict)",
      "Tailwind CSS v3.4",
      "Framer Motion",
      "Sanity / Payload CMS",
      "Vercel Edge Network",
      "PostgreSQL",
    ],
    features: [
      "Next.js App Router & React 19 architecture",
      "Tailwind CSS token-driven design systems",
      "Mobile-first responsive engineering (360px to 4K)",
      "Strict WCAG 2.1 AA accessibility compliance",
      "Headless CMS integration & structured content models",
      "Fluid micro-interactions & scroll physics",
    ],
    deliverables: [
      "Production-Ready Next.js 15 Web Application",
      "Design System Component Library (Figma & React)",
      "Headless CMS Setup & Editorial Schema",
      "SEO, OpenGraph & Core Web Vitals Optimization",
      "Automated CI/CD Deployment Pipeline",
    ],
    process: [
      {
        step: "01",
        title: "Technical Discovery & Scoping",
        description: "Mapping site architecture, data schemas, user flows, and milestone cadence.",
      },
      {
        step: "02",
        title: "Interactive Prototyping",
        description: "Designing tactile component states, responsive layouts, and motion guidelines.",
      },
      {
        step: "03",
        title: "Type-Safe Full-Stack Engineering",
        description: "Developing accessible components, dynamic routing, and API integrations.",
      },
      {
        step: "04",
        title: "Performance QA & Deployment",
        description: "Comprehensive cross-browser testing, accessibility audit, and zero-downtime launch.",
      },
    ],
    faqs: [
      {
        question: "Which technologies do you build websites with?",
        answer:
          "Our primary stack is Next.js 15, TypeScript, and Tailwind CSS, supplemented by Framer Motion for micro-interactions and headless CMS backends like Sanity or Payload.",
      },
      {
        question: "Will our website be easy to update internally?",
        answer:
          "Yes. We configure structured headless CMS dashboards allowing non-technical team members to manage content without touching code.",
      },
    ],
    ctaText: "Discover Digital & Development",
    illustration: "/illustrations/services/digital-development.svg",
    cardVariant: "mint",
  },

  // 02 — AI & Automation
  {
    id: "srv-ai-automation",
    name: "AI & Automation",
    title: "AI & Automation",
    slug: "ai-automation",
    category: "AI & Automation",
    index: "02",
    tagline: "Intelligent workflows and custom AI interfaces for modern operations.",
    shortDescription:
      "Bespoke AI integrations, smart assistant interfaces, and internal workflow automations that eliminate operational friction.",
    description:
      "Bespoke AI integrations, smart assistant interfaces, and internal workflow automations that eliminate operational friction.",
    detailedDescription:
      "We demystify AI by turning generative models into practical, productized utilities. From custom conversational assistants and generative media tools to automated content categorization and back-office automations, we build reliable integrations tailored to your exact operational context.",
    detailedOverview:
      "We demystify AI by turning generative models into practical, productized utilities. From custom conversational assistants and generative media tools to automated content categorization and back-office automations, we build reliable integrations tailored to your exact operational context.",
    servicesIncluded: [
      "Custom Conversational AI Web Interfaces",
      "Bespoke Internal Workflow Automations",
      "Private RAG (Retrieval-Augmented Generation) Pipelines",
      "Automated Content Tagging & Asset Workflows",
      "API Middleware & Webhook Choreography",
    ],
    problemsSolved: [
      "Teams wasting dozens of hours weekly on repetitive manual document sorting and data lookups.",
      "Commercial AI chatbots hallucinating or leaking sensitive corporate context.",
      "Off-the-shelf tools failing to integrate cleanly with proprietary internal databases.",
      "Inability to surface critical information buried in unstructured PDFs and research archives.",
    ],
    toolsAndTechnologies: [
      "Gemini API & Claude API",
      "Python / FastAPI Middleware",
      "Pinecone Vector Database",
      "LangChain / LlamaIndex",
      "Serverless Webhook Handlers",
      "Next.js AI SDK",
      "Enterprise Zero-Retention APIs",
    ],
    features: [
      "Custom LLM API integrations (Gemini, Claude, OpenAI)",
      "Automated multi-step background workflows",
      "Retrieval-Augmented Generation (RAG) knowledge retrieval",
      "Interactive conversational web interfaces",
      "Content moderation & asset tagging pipelines",
      "Privacy-first credential and data boundary controls",
    ],
    deliverables: [
      "Custom AI Interface or Embedded Web Assistant",
      "Automated Workflow Scripts & Webhook Handlers",
      "Vector Database & Knowledge Ingestion Setup",
      "API Middleware & Rate-Limiting Protection",
      "Technical Documentation & Operating Runbook",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit",
        description: "Identifying high-friction manual bottlenecks and defining clear automated value metrics.",
      },
      {
        step: "02",
        title: "Model & Architecture Selection",
        description: "Selecting optimal models, prompt architectures, and latency-cost trade-offs.",
      },
      {
        step: "03",
        title: "Integration & Sandbox Testing",
        description: "Building resilient fallback handling, rate limits, and structured schema validations.",
      },
      {
        step: "04",
        title: "Rollout & Monitoring",
        description: "Deploying with observability logging, latency monitoring, and team onboarding.",
      },
    ],
    faqs: [
      {
        question: "How do you protect proprietary data when using AI models?",
        answer:
          "We use commercial enterprise API tiers with zero-retention policies, ensuring your data is never used to train public foundational models.",
      },
      {
        question: "Can custom AI tools be integrated into our existing dashboard?",
        answer:
          "Yes. We build modular React/Next.js components and lightweight REST/GraphQL endpoints designed to plug directly into your current tech stack.",
      },
    ],
    ctaText: "Discover AI & Automation",
    illustration: "/illustrations/services/ai-automation.svg",
    cardVariant: "lavender",
  },

  // 03 — Branding & Creative
  {
    id: "srv-brand-identity",
    name: "Branding & Creative",
    title: "Branding & Creative",
    slug: "brand-identity",
    category: "Branding & Creative",
    index: "03",
    tagline: "Unmistakable visual identities designed for brands that refuse to whisper.",
    shortDescription:
      "Comprehensive visual identity systems, typography direction, and art direction that cut through corporate sameness.",
    description:
      "Comprehensive visual identity systems, typography direction, and art direction that cut through corporate sameness.",
    detailedDescription:
      "Great branding is not just a logo—it is a coherent visual worldview. We define everything from typography hierarchies, color logic, and graphic marks to brand voice and packaging concepts, giving your brand an unmistakable presence across both digital and physical touchpoints.",
    detailedOverview:
      "Great branding is not just a logo—it is a coherent visual worldview. We define everything from typography hierarchies, color logic, and graphic marks to brand voice and packaging concepts, giving your brand an unmistakable presence across both digital and physical touchpoints.",
    servicesIncluded: [
      "Comprehensive Visual Identity Manuals",
      "Expressive Editorial Typography Architectures",
      "Distinctive Color Token Systems & Themes",
      "Vector Logo Suite, Brand Marks & Motion Stamps",
      "Packaging, Merchandise & Collateral Concepts",
      "Tone of Voice & Verbal Positioning Guidelines",
    ],
    problemsSolved: [
      "Brand aesthetic feels dated, fragmented, or indistinct from category competitors.",
      "Internal marketing teams applying inconsistent fonts, logos, and palettes across decks.",
      "Upcoming capital raise or market pivot demanding a visual presence matching ambitious goals.",
      "Functional product lacking the cultural resonance required to justify premium pricing.",
    ],
    toolsAndTechnologies: [
      "Figma Component Tokens",
      "Adobe Illustrator & InDesign",
      "Cinema 4D (Packaging 3D)",
      "Glyphs (Typography Craft)",
      "Pantone / CMYK Physical Print Specs",
      "Interactive Digital Brand Kits",
    ],
    features: [
      "Comprehensive visual identity guidelines",
      "Expressive editorial typography pairings",
      "Distinctive color token systems",
      "Logo suite, brand marks & motion stamps",
      "Packaging, merchandise & physical collateral concepts",
      "Tone of voice & verbal positioning guidelines",
    ],
    deliverables: [
      "Master Brand Identity Manual (PDF & Interactive Web)",
      "Vector Asset Suite (SVG, AI, EPS, PNG)",
      "Custom Iconography & Graphic Element Pack",
      "Digital Brand Kit & Figma Component Library",
      "Editorial Guidelines & Tone of Voice Rules",
    ],
    process: [
      {
        step: "01",
        title: "Cultural & Strategic Immersion",
        description: "Auditing category conventions, audience sensibilities, and foundational ethos.",
      },
      {
        step: "02",
        title: "Territory & Concept Exploration",
        description: "Presenting distinct visual territories spanning moodboards, typography, and raw marks.",
      },
      {
        step: "03",
        title: "System Expansion & Stress Testing",
        description: "Extending the chosen territory across real-world digital, social, and print contexts.",
      },
      {
        step: "04",
        title: "Asset Production & Guidelines",
        description: "Exporting production-ready source files and comprehensive usage rules.",
      },
    ],
    faqs: [
      {
        question: "How long does a full brand identity process take?",
        answer:
          "Typically 4 to 8 weeks, depending on the scope of physical deliverables and depth of collateral required.",
      },
      {
        question: "Do you also handle rebranding for established companies?",
        answer:
          "Yes. We specialize in taking brands that have outgrown their original aesthetic and evolving them into confident, contemporary leaders.",
      },
    ],
    ctaText: "Discover Branding & Creative",
    illustration: "/illustrations/services/brand-creative.svg",
    cardVariant: "cream",
  },

  // 04 — Marketing & Content
  {
    id: "srv-content-campaigns",
    name: "Marketing & Content",
    title: "Marketing & Content",
    slug: "content-campaigns",
    category: "Marketing & Content",
    index: "04",
    tagline: "Unconventional campaign activations that demand audience attention.",
    shortDescription:
      "Targeted digital campaigns, interactive product launch teasers, and content systems that drive organic cultural conversation.",
    description:
      "Targeted digital campaigns, interactive product launch teasers, and content systems that drive organic cultural conversation.",
    detailedDescription:
      "We design digital campaigns for audiences that have learned to ignore traditional online advertising. By pairing provocative concepts with interactive web moments, motion snippets, and unconventional rollout tactics, we help brands launch products that people actually talk about.",
    detailedOverview:
      "We design digital campaigns for audiences that have learned to ignore traditional online advertising. By pairing provocative concepts with interactive web moments, motion snippets, and unconventional rollout tactics, we help brands launch products that people actually talk about.",
    servicesIncluded: [
      "Interactive Product Launch Microsites",
      "Social-First Motion Assets & Kinetic Loops",
      "Viral Rollout Choreography & Early-Access Mechanics",
      "Editorial Copywriting & Narrative Scripts",
      "Conversion Funnel Tracking & Engagement Analytics",
    ],
    problemsSolved: [
      "Audience experiencing ad fatigue and ignoring standard sponsored banners.",
      "Upcoming product launch lacking an unforgettable digital moment to spark organic word-of-mouth.",
      "Social media output looking disjointed and disconnected from brand ambitions.",
      "Need for a high-converting waitlist destination that captures qualified buyers.",
    ],
    toolsAndTechnologies: [
      "Adobe After Effects & Premiere",
      "Three.js / WebGL Teaser Shaders",
      "Next.js Interactive Landing Pages",
      "Motion Canvas",
      "High-Traffic Edge Databases",
      "Real-Time Conversion Analytics",
    ],
    features: [
      "Interactive digital product launch microsites",
      "Social-first motion assets & editorial templates",
      "Viral rollout mechanics & teaser choreography",
      "Copywriting that respects audience intelligence",
      "Conversion tracking & engagement analytics",
    ],
    deliverables: [
      "Campaign Launch Strategy & Narrative Architecture",
      "Interactive Teaser / Landing Page Destination",
      "Motion Asset Suite (Short-form video, loops, reels)",
      "Social Media Kit & Editorial Templates",
      "Post-Launch Performance Analysis",
    ],
    process: [
      {
        step: "01",
        title: "Hook Development",
        description: "Identifying the unconventional cultural angle that sets the campaign apart.",
      },
      {
        step: "02",
        title: "Asset & Interface Production",
        description: "Crafting interactive teaser pages, video loops, and sharp copy.",
      },
      {
        step: "03",
        title: "Orchestration & Staging",
        description: "Pre-launch testing, tracking setup, and coordinate rollout timeline.",
      },
      {
        step: "04",
        title: "Activation & Review",
        description: "Executing the drop and analyzing audience interaction patterns.",
      },
    ],
    faqs: [
      {
        question: "Do you run ongoing paid ad management?",
        answer:
          "Our focus is creative campaign architecture, high-impact interactive launch destinations, and organic creative content systems rather than media buying.",
      },
    ],
    ctaText: "Discover Marketing & Content",
    illustration: "/illustrations/services/marketing-content.svg",
    cardVariant: "lavender",
  },

  // 05 — The Odd Jobs (Custom Solutions)
  {
    id: "srv-the-odd-jobs",
    name: "The Odd Jobs",
    title: "The Odd Jobs",
    slug: "the-odd-jobs",
    category: "The Odd Jobs",
    index: "05",
    tagline: "Unorthodox digital experiments, weird prototypes, and bespoke creative challenges.",
    shortDescription:
      "For challenges that don't fit neatly into traditional agency boxes. Hardware-software hacks, experimental microsites, and custom creative coding.",
    description:
      "For challenges that don't fit neatly into traditional agency boxes. Hardware-software hacks, experimental microsites, and custom creative coding.",
    detailedDescription:
      "Every ambitious brand occasionally faces a problem that traditional agencies don't know how to price or execute. 'The Odd Jobs' is our experimental sandbox for bespoke creative engineering: interactive physical-digital stunts, custom generative art experiments, unconventional internal tools, and rapid prototypes.",
    detailedOverview:
      "Every ambitious brand occasionally faces a problem that traditional agencies don't know how to price or execute. 'The Odd Jobs' is our experimental sandbox for bespoke creative engineering: interactive physical-digital stunts, custom generative art experiments, unconventional internal tools, and rapid prototypes.",
    servicesIncluded: [
      "Bespoke Creative Coding (WebGL, Three.js, Canvas)",
      "Rapid 1-to-2 Week Prototype Sprints",
      "Experimental Digital Stunts & Interactive Micro-Games",
      "Custom Internal Utilities & Automation Hacks",
      "Hybrid Physical-Digital Exhibition Software",
    ],
    problemsSolved: [
      "Facing an unusual technical or creative challenge that rigid agencies refuse to touch.",
      "Need a functioning prototype within 10 business days to prove a bold concept to stakeholders.",
      "Want an interactive exhibition or conference installation that stops people in their tracks.",
      "Standard software vendors attempting to lock you into generic SaaS subscriptions.",
    ],
    toolsAndTechnologies: [
      "Three.js & WebGL Shaders",
      "HTML5 Canvas & Web Audio API",
      "Creative Coding & Algorithmic Generative Art",
      "Microcontroller / Raspberry Pi / Sensors",
      "WebSockets & Real-Time Sync",
      "Bespoke Python & TypeScript Utilities",
    ],
    features: [
      "Bespoke creative coding (WebGL, Three.js, Canvas)",
      "Rapid prototype sprints (1 to 2 weeks)",
      "Experimental digital stunts & interactive games",
      "Custom internal workflow software",
      "Hybrid physical-digital installation software",
      "High-risk, high-reward creative explorations",
    ],
    deliverables: [
      "Working Custom Prototype or Production Artifact",
      "Source Code Repository & Architecture Blueprint",
      "Deployment Instructions & Operational Guide",
      "Experimental Post-Mortem & Future Roadmap",
    ],
    process: [
      {
        step: "01",
        title: "The Odd Brief",
        description: "Defining the unusual objective, parameters, and experimental goals.",
      },
      {
        step: "02",
        title: "Rapid Technical Feasibility Spike",
        description: "Building quick technical proof-of-concepts within 48-72 hours.",
      },
      {
        step: "03",
        title: "Iterative Construction",
        description: "Refining the odd creation through rapid feedback and sensory testing.",
      },
      {
        step: "04",
        title: "Deployment & Demonstration",
        description: "Delivering the functional build and documenting lessons learned.",
      },
    ],
    faqs: [
      {
        question: "What kind of project qualifies as an 'Odd Job'?",
        answer:
          "Anything that feels too strange, technically uncharted, or experimental for a standard agency contract. If it excites us and challenges convention, we want to hear about it.",
      },
      {
        question: "How do you price Odd Jobs?",
        answer:
          "Usually on a focused, time-boxed sprint model (e.g. 1-week or 2-week exploration sprint) with clear deliverables and transparent milestones.",
      },
    ],
    ctaText: "Discover The Odd Jobs",
    illustration: "/illustrations/services/odd-jobs.svg",
    cardVariant: "ink",
  },
];

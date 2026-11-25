import React from "react";

export interface ServiceDeliverableItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceProcessItem {
  step: string;
  title: string;
  description: string;
  tag?: string;
  pinColor?: "terracotta" | "yellow" | "blue" | "mint" | "lavender" | "crimson";
  badgeColor?: "terracotta" | "yellow" | "blue" | "mint" | "lavender" | "crimson";
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailConfig {
  slug: string;
  index: string; // e.g. "01 /"
  numberOnly: string; // "01"
  name: string;
  shortName: string;
  categoryLabel: string;
  tagline: string;
  introDescription: string;
  badge: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  deliverablesSectionTitle?: string;
  deliverablesSectionSubtitle?: string;
  deliverablesSectionAnnotation?: string;
  deliverables: ServiceDeliverableItem[];
  processSectionTitle?: string;
  processSectionSubtitle?: string;
  processSectionAnnotation?: string;
  process: ServiceProcessItem[];
  benefitsSectionTitle?: string;
  benefitsSectionSubtitle?: string;
  benefits?: ServiceBenefitItem[];
  faqs?: ServiceFaqItem[];
  relatedProjectSlugs: string[];
  ctaTitle: string;
  ctaHighlightWord: string;
  ctaDescription: string;
  ctaButtonLabel: string;
}

export const serviceDetailsData: Record<string, ServiceDetailConfig> = {
  // 01 : Web Development & Digital Products
  "digital-platforms": {
    slug: "digital-platforms",
    index: "01",
    numberOnly: "01",
    name: "Web Development & Digital Products",
    shortName: "Web & Digital",
    categoryLabel: "Digital & Development",
    tagline: "Pretty is a bonus. Brilliant is the brief.",
    introDescription:
      "Behind every effortless digital experience is a whole lot of thinking. We bring design, development, and technical precision together to craft bespoke business websites, e-commerce stores, and digital platforms that combine exceptional performance, seamless mobile experiences, and intuitive functionality - built around your business and the people who use it.",
    badge: "Sub-Second Performance",
    primaryCtaLabel: "Bring Us Your Brief ↗",
    deliverablesSectionTitle: "What We Can Build For You",
    deliverablesSectionSubtitle:
      "From your first online presence to the platform behind your next big idea, we build digital solutions that make business simpler, experiences better, and possibilities bigger.",
    deliverablesSectionAnnotation: "Your idea has potential. We give it a URL. ✦",
    deliverables: [
      {
        title: "Bespoke Business Websites",
        description:
          "Your business isn't off-the-shelf. Your website shouldn't be either. We create distinctive, thoughtfully developed websites that reflect your brand, establish credibility, and give visitors a reason to stay.",
        iconName: "Globe",
      },
      {
        title: "E-Commerce Experiences",
        description:
          "More than a digital storefront. We create seamless shopping experiences with intuitive product discovery, secure checkout, and thoughtful details that make browsing effortless and buying feel natural.",
        iconName: "ShoppingBag",
      },
      {
        title: "Custom Web Applications",
        description:
          "When ready-made software doesn't quite fit, we build what does. From client portals to interactive dashboards and custom platforms, we turn complex requirements into practical, intuitive digital tools.",
        iconName: "Code2",
      },
      {
        title: "Landing Pages & Microsites",
        description:
          "One page. One clear purpose. We create focused, visually engaging landing pages and campaign microsites that capture attention, communicate your message, and guide visitors toward action.",
        iconName: "Layout",
      },
      {
        title: "Booking & Reservation Systems",
        description:
          "Less back-and-forth. More bookings. We develop intuitive scheduling and reservation systems with real-time availability, secure payments, and automated confirmations that simplify the experience for everyone.",
        iconName: "Calendar",
      },
      {
        title: "Website Care & Evolution",
        description:
          "Launch day is just the beginning. We keep your website secure, updated, and performing at its best, with ongoing maintenance, improvements, and the flexibility to evolve as your business grows.",
        iconName: "Shield",
      },
    ],
    processSectionTitle: "How we work together",
    processSectionSubtitle:
      "We keep communication open, feedback welcome, and progress visible throughout the project.",
    processSectionAnnotation:
      "You're never left wondering what's happening behind the screen. ✦",
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We analyze your business objectives, target audience, functional requirements, and technical scope to establish a clear project roadmap and development milestones.",
        tag: "Roadmap & Milestones",
        pinColor: "terracotta",
        badgeColor: "terracotta",
      },
      {
        step: "02",
        title: "UI/UX Design & Prototyping",
        description:
          "We translate requirements into intuitive user journeys, responsive interfaces, and interactive prototypes, refining usability and visual consistency before development.",
        tag: "Interactive Prototypes",
        pinColor: "yellow",
        badgeColor: "yellow",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "We build secure, scalable applications using modern frameworks, clean architecture, optimized code, and seamless API and third-party integrations.",
        tag: "Clean Architecture",
        pinColor: "blue",
        badgeColor: "blue",
      },
      {
        step: "04",
        title: "Quality Assurance & Launch",
        description:
          "We conduct functional, responsive, compatibility, and performance testing before deployment, ensuring a stable release with proper documentation and handover.",
        tag: "Verified & Handover",
        pinColor: "mint",
        badgeColor: "mint",
      },
    ],
    faqs: [
      {
        question: "What types of websites and digital platforms does Oddlyyy build?",
        answer:
          "We build bespoke corporate websites, interactive digital platforms, dynamic e-commerce systems, and client portals using Next.js, React, and TypeScript. We never use bloated templates; each platform is custom-coded for speed, security, and distinct visual identity.",
      },
      {
        question: "How long does a custom web development engagement typically take?",
        answer:
          "Standard bespoke websites take 4 to 8 weeks, while complex full-stack web platforms take 8 to 12 weeks. We work in transparent bi-weekly milestone sprints with direct access to our core developers.",
      },
      {
        question: "Can Oddlyyy integrate our platform with third-party APIs and services?",
        answer:
          "Yes. We regularly build custom integrations with payment gateways (Stripe, Razorpay), custom booking calendars, headless CMS platforms, customer databases, and external CRM systems.",
      },
    ],
    relatedProjectSlugs: ["the-chess-project", "meraki-designs", "chicago-yachts", "payzero"],
    ctaTitle:
      "You've got the idea. We've got the tabs open.\nLet's make something oddlyyy extraordinary.",
    ctaHighlightWord: "extraordinary.",
    ctaDescription:
      "From ambitious concepts to complex digital platforms, we bring together thoughtful design, clean code, and a healthy obsession with getting the details right.",
    ctaButtonLabel: "Let's Build It",
  },

  // 02 : AI & Business Automation
  "ai-automation": {
    slug: "ai-automation",
    index: "02",
    numberOnly: "02",
    name: "AI & Business Automation",
    shortName: "AI & Automation",
    categoryLabel: "AI & Automation",
    tagline: "Smart automation and AI solutions that save time and scale your business.",
    introDescription:
      "We turn modern AI into practical business superpowers. We connect your daily software, eliminate manual data entry, and deploy 24/7 assistants so your team can focus on growth.",
    badge: "24/7 Workflows",
    primaryCtaLabel: "Automate Your Work",
    deliverablesSectionTitle: "What We Can Automate For You",
    deliverablesSectionSubtitle:
      "Reliable workflows and intelligent assistants tailored to your everyday operations.",
    deliverables: [
      {
        title: "24/7 Customer AI Assistants",
        description:
          "Intelligent support agents trained strictly on your documentation to answer customer questions accurately around the clock.",
        iconName: "Bot",
      },
      {
        title: "Automated Lead Qualification",
        description:
          "Instant inquiry triage that gathers project details, scores lead readiness, and routes priority clients to your calendar.",
        iconName: "Zap",
      },
      {
        title: "Hands-Free Booking & Follow-Ups",
        description:
          "Automated scheduling workflows, confirmation emails, reminder sequences, and post-meeting action summaries.",
        iconName: "Calendar",
      },
      {
        title: "Document & Invoice Processing",
        description:
          "Smart data extraction that turns unstructured PDFs, contracts, and receipts into organized database records.",
        iconName: "FileText",
      },
      {
        title: "Connected App Automations",
        description:
          "Reliable background synchronization between your CRM, email, accounting tools, and project management boards.",
        iconName: "Workflow",
      },
      {
        title: "Internal Knowledge Search",
        description:
          "Private semantic search utilities enabling your staff to query company SOPs, manuals, and records in plain language.",
        iconName: "Search",
      },
    ],
    processSectionTitle: "How we implement automations",
    processSectionSubtitle: "A structured process focused on security, accuracy, and measurable time savings.",
    process: [
      {
        step: "01",
        title: "Operations Audit",
        description: "Mapping your repetitive daily tasks to pinpoint bottlenecks and quantify hours that can be reclaimed.",
      },
      {
        step: "02",
        title: "Architecture & Logic",
        description: "Designing trigger rules, data mappings, fallback alerts, and privacy guardrails for your systems.",
      },
      {
        step: "03",
        title: "Build & Verification",
        description: "Configuring the pipelines, testing edge cases, and verifying strict data privacy and accuracy safeguards.",
      },
      {
        step: "04",
        title: "Deployment & Training",
        description: "Deploying live automations, onboarding your team with simple playbooks, and tracking hours saved.",
      },
    ],
    faqs: [
      {
        question: "What business workflows can Oddlyyy automate?",
        answer:
          "We automate repetitive administrative tasks, customer inquiry routing, document processing, multi-database synchronizations, and internal knowledge search using modern LLM APIs and workflow engines.",
      },
      {
        question: "Will our internal team be able to operate and manage the automations?",
        answer:
          "Yes. We build clean administrative interfaces, automated error alerts, and self-documenting workflows so your non-technical team members retain complete operational control.",
      },
      {
        question: "How do you ensure data security and privacy in AI automations?",
        answer:
          "We adhere to strict enterprise data privacy practices: utilizing zero-data-retention API agreements, end-to-end encryption, and role-based access controls to protect sensitive business information.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle:
      "Repetitive tasks? That's oddlyyy unnecessary.\nYour time deserves better.",
    ctaHighlightWord: "better.",
    ctaDescription:
      "Let's replace manual processes with intelligent workflows, AI-powered tools, and connected systems that keep your business moving without the constant busywork.",
    ctaButtonLabel: "Let's Automate It ↗",
  },

  // 03 : Branding & Creative Studio
  "brand-identity": {
    slug: "brand-identity",
    index: "03",
    numberOnly: "03",
    name: "Branding & Creative Studio",
    shortName: "Branding & Creative",
    categoryLabel: "Branding & Creative",
    tagline: "We don't just make brands look good. We give them something to say.",
    introDescription:
      "A brand is more than a logo. It's the personality people recognize, the story they connect with, and the impression that stays. We bring strategy, identity design, typography, and visual storytelling together to create brands with character, consistency, and a point of view.",
    badge: "Unmistakable Craft",
    primaryCtaLabel: "Craft Your Identity ↗",
    deliverablesSectionTitle: "What We Craft For You",
    deliverablesSectionSubtitle:
      "Comprehensive visual systems engineered for screen, print, and physical presentation.",
    deliverables: [
      {
        title: "Visual Identity Systems",
        description:
          "Comprehensive design foundations defining typography hierarchies, color architectures, grid structures, and brand textures.",
        iconName: "Palette",
      },
      {
        title: "Logo Suites & Iconic Marks",
        description:
          "Versatile vector brand marks optimized for website headers, mobile app icons, physical packaging, and social avatars.",
        iconName: "Wand2",
      },
      {
        title: "Digital Brand Guidelines",
        description:
          "Clear, searchable style guides that empower internal designers and external partners to apply the brand with total consistency.",
        iconName: "Layers",
      },
      {
        title: "Executive Pitch Decks",
        description:
          "High-impact presentation decks and sales materials engineered to captivate investors, enterprise partners, and high-value clients.",
        iconName: "FileCode",
      },
      {
        title: "Packaging & Print Collateral",
        description:
          "Thoughtful physical touchpoints including business cards, unboxing packaging, merchandise, and environmental signage.",
        iconName: "Package",
      },
      {
        title: "Social Media Design Kits",
        description:
          "Ready-to-use Figma templates and dynamic motion assets for announcing news and launching campaigns with visual polish.",
        iconName: "Printer",
      },
    ],
    processSectionTitle: "How we develop identities",
    processSectionSubtitle: "A collaborative journey exploring visual personality, positioning, and craft.",
    process: [
      {
        step: "01",
        title: "Positioning & Discovery",
        description: "Auditing industry landscape, audience expectations, and uncovering your unique commercial edge.",
      },
      {
        step: "02",
        title: "Creative Exploration",
        description: "Presenting contrasting visual directions spanning moodboards, typography, and preliminary brand marks.",
      },
      {
        step: "03",
        title: "System Expansion",
        description: "Developing the chosen concept across real-world digital screens, print collateral, and presentation decks.",
      },
      {
        step: "04",
        title: "Master Asset Delivery",
        description: "Delivering complete vector asset libraries, font specifications, and a living digital style manual.",
      },
    ],
    faqs: [
      {
        question: "What deliverables are included in a brand identity engagement?",
        answer:
          "We deliver complete visual systems including primary and responsive logos, custom typography pairings, accessible color palettes, brand guidelines, digital component tokens, and production-ready vector assets.",
      },
      {
        question: "How long does a brand identity project take?",
        answer:
          "Typical brand identity engagements take 4 to 6 weeks from initial brand positioning discovery through to final master asset handover.",
      },
      {
        question: "Do we receive source files and full commercial rights?",
        answer:
          "Yes. Upon completion and final handover, your company owns full commercial rights to all finalized vector logos, brand marks, and style manuals.",
      },
    ],
    relatedProjectSlugs: ["meraki-designs", "the-chess-project"],
    ctaTitle:
      "Ready for a brand identity that commands attention?\noddly iconic.",
    ctaHighlightWord: "oddly iconic.",
    ctaDescription:
      "Let's create a memorable visual identity system that reflects the true caliber of your business and sets you apart from the crowd.",
    ctaButtonLabel: "Start Brand Project",
  },

  // 04 : Marketing & Content
  "content-campaigns": {
    slug: "content-campaigns",
    index: "04",
    numberOnly: "04",
    name: "Marketing & Content",
    shortName: "Marketing & Content",
    categoryLabel: "Marketing & Content",
    tagline: "Ordinary content gets scrolled past. Oddlyyy good content gets noticed.",
    introDescription:
      "Modern audiences tune out generic corporate advertising. We design memorable launch campaigns, sharp copywriting, and engaging short-form motion that spark genuine interest and turn announcements into milestones.",
    badge: "Zero Corporate Fluff",
    primaryCtaLabel: "Plan a Campaign",
    deliverablesSectionTitle: "What We Create For Your Audience",
    deliverablesSectionSubtitle:
      "Unconventional creative storytelling that commands real organic attention.",
    deliverables: [
      {
        title: "Product Launch Microsites",
        description:
          "Interactive, high-energy launch destinations that make product reveals memorable, shareable, and conversion-focused.",
        iconName: "Megaphone",
      },
      {
        title: "Waitlist & Pre-Order Funnels",
        description:
          "Early-access landing mechanics and referral loops that build genuine anticipation and capture qualified prospective buyers.",
        iconName: "Target",
      },
      {
        title: "Sharp Website Copywriting",
        description:
          "Conversational, punchy brand messaging that explains complex value propositions with clarity, wit, and zero jargon.",
        iconName: "PenTool",
      },
      {
        title: "Short-Form Motion & Social",
        description:
          "Snappy motion graphics, animated typographic loops, and teaser videos tailored for high-engagement social feeds.",
        iconName: "Video",
      },
      {
        title: "Editorial Content Strategy",
        description:
          "Focused editorial roadmaps and thought leadership playbooks that position your founders as respected category voices.",
        iconName: "TrendingUp",
      },
      {
        title: "Conversion Tracking & Insights",
        description:
          "Clean analytics funnels that track actual audience engagement, lead progression, and purchase conversion rates.",
        iconName: "BarChart3",
      },
    ],
    processSectionTitle: "How we craft campaigns",
    processSectionSubtitle: "A creative sequence turning product news into an unforgettable digital moment.",
    process: [
      {
        step: "01",
        title: "The Creative Hook",
        description: "Uncovering the provocative angle that makes your announcement genuinely interesting to real people.",
      },
      {
        step: "02",
        title: "Asset & Story Production",
        description: "Writing sharp copy, designing interactive teaser elements, and producing high-energy motion loops.",
      },
      {
        step: "03",
        title: "Launch Orchestration",
        description: "Connecting waitlist mechanics, setting up conversion tracking, and coordinating rollout schedules.",
      },
      {
        step: "04",
        title: "Rollout & Review",
        description: "Going live, engaging incoming traffic, and analyzing conversion metrics to inform future growth.",
      },
    ],
    faqs: [
      {
        question: "How does Oddlyyy approach digital content and campaigns?",
        answer:
          "We create distinctive, narrative-driven digital campaigns and launch microsites that cut through generic corporate noise. We focus on clear hooks, interactive moments, and measurable audience conversion.",
      },
      {
        question: "What types of marketing assets do you produce?",
        answer:
          "We develop digital launch microsites, interactive product storytelling experiences, social campaign visuals, editorial design, and conversion-focused landing pages.",
      },
      {
        question: "How do you measure campaign effectiveness?",
        answer:
          "We configure privacy-focused analytics and conversion tracking to measure engagement depth, inquiry rates, and genuine audience actions without intrusive bloat.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle: "Your next big conversation starts with the right story.",
    ctaHighlightWord: "story.",
    ctaDescription:
      "From scroll-stopping content to strategically crafted campaigns, we bring together storytelling, creativity, and marketing expertise to get your brand in front of the right people and give them a reason to care.",
    ctaButtonLabel: "Launch With Us",
  },

  // 05 : Business Systems & Integrations
  "business-systems": {
    slug: "business-systems",
    index: "05",
    numberOnly: "05",
    name: "Business Systems & Integrations",
    shortName: "Systems & APIs",
    categoryLabel: "Business Systems & Integrations",
    tagline: "Different systems. One connected business.",
    introDescription:
      "Behind every efficient business is technology that works together. We develop custom business applications, API integrations, centralized dashboards, and connected data systems that eliminate operational silos, simplify complex workflows, and create a reliable foundation for growth.",
    badge: "Zero Data Silos",
    primaryCtaLabel: "Connect Your Systems ↗",
    deliverablesSectionTitle: "What We Connect And Build",
    deliverablesSectionSubtitle:
      "Robust architectural bridges that eliminate operational bottlenecks and data errors.",
    deliverables: [
      {
        title: "Custom API Bridges & Middleware",
        description:
          "Bespoke connectors synchronizing your CRM, ERP, billing tools, and fulfillment systems with guaranteed uptime.",
        iconName: "Puzzle",
      },
      {
        title: "Automated Data Pipelines",
        description:
          "Bi-directional data flows keeping customer records, inventories, and transaction statuses accurate everywhere in real time.",
        iconName: "GitMerge",
      },
      {
        title: "Internal Admin Dashboards",
        description:
          "Fast, tailored web interfaces that give your team a single unified pane of glass to view and manage daily operations.",
        iconName: "Server",
      },
      {
        title: "Payment & Billing Architectures",
        description:
          "Secure integrations with Stripe, Razorpay, or subscription gateways handling invoicing, webhooks, and automatic retries.",
        iconName: "CreditCard",
      },
      {
        title: "Webhook & Event Infrastructure",
        description:
          "Real-time event processing with dead-letter queues and automated retry logic so network hiccups never lose records.",
        iconName: "RefreshCw",
      },
      {
        title: "Legacy Software Modernization",
        description:
          "Safely unlocking legacy databases and proprietary business systems by exposing secure modern REST and GraphQL APIs.",
        iconName: "Key",
      },
    ],
    processSectionTitle: "How we build integrations",
    processSectionSubtitle: "A disciplined engineering process ensuring data integrity and zero downtime.",
    process: [
      {
        step: "01",
        title: "Systems Mapping",
        description: "Auditing all software, databases, and APIs currently powering your operational workflows.",
      },
      {
        step: "02",
        title: "Schema & Flow Design",
        description: "Establishing unified data models, field validation rules, and automated fail-safe architectures.",
      },
      {
        step: "03",
        title: "Connector Build & Stress Test",
        description: "Developing robust API middleware with automated retry logic, idempotency, and error reporting.",
      },
      {
        step: "04",
        title: "Deployment & Monitoring",
        description: "Deploying live sync pipelines with real-time alerting and onboarding your operations team.",
      },
    ],

    faqs: [
      {
        question: "How do you connect disparate software tools across our business?",
        answer:
          "We engineer custom API middleware, automated sync routines, and centralized dashboards that bridge the gaps between your CRMs, billing systems, databases, and operational spreadsheets.",
      },
      {
        question: "Can you build custom internal dashboards for our team?",
        answer:
          "Yes. We build bespoke administrative dashboards and internal portals that give leadership and operations teams real-time visibility into vital business metrics.",
      },
      {
        question: "How do you handle system security and data reliability?",
        answer:
          "We implement secure webhook validation, encrypted credential management, automated error logging, and resilient retry mechanisms to ensure zero data loss.",
      },
    ],
    relatedProjectSlugs: ["chicago-yachts", "the-chess-project"],
    ctaTitle: "Different systems?\nOne connected business.",
    ctaHighlightWord: "business.",
    ctaDescription:
      "Behind every efficient business is technology that works together. Let's build custom applications, API integrations, and reliable data pipelines that eliminate operational silos.",
    ctaButtonLabel: "Connect Your Systems ↗",
  },

  // 06 : Mobile App Development
  "mobile-app-development": {
    slug: "mobile-app-development",
    index: "06",
    numberOnly: "06",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    categoryLabel: "Mobile App Development",
    tagline: "Your next big idea is just a tap away.",
    introDescription:
      "From the first tap to the most complex functionality, we build mobile applications that balance intuitive design with powerful engineering. Whether it's a startup MVP or a feature-rich business app, we bring together seamless interfaces, scalable architecture, and reliable performance to create experiences worth coming back to.",
    badge: "60/120fps Native Feel",
    primaryCtaLabel: "Let's Build Your App ↗",
    deliverablesSectionTitle: "What We Engineer For Mobile",
    deliverablesSectionSubtitle:
      "Touch-first mobile products designed with fluid physics, haptic feedback, and rock-solid stability.",
    deliverables: [
      {
        title: "iOS & Android Cross-Platform",
        description:
          "High-performance apps built with modern React Native sharing 95%+ of code with zero compromise on native smoothness.",
        iconName: "Smartphone",
      },
      {
        title: "Bespoke Mobile UI/UX Design",
        description:
          "Thumb-zone ergonomics, tactile micro-interactions, custom animations, and fluid gesture navigation systems.",
        iconName: "Apple",
      },
      {
        title: "Offline-First Data Sync",
        description:
          "Local caching architectures that allow users to browse and interact without interruptions when connectivity drops.",
        iconName: "WifiOff",
      },
      {
        title: "Push Notifications & Engagement",
        description:
          "Targeted push notification journeys with deep-linking to bring users directly into relevant in-app screens.",
        iconName: "Bell",
      },
      {
        title: "In-App Purchases & Subscriptions",
        description:
          "Frictionless payment flows integrated with Apple StoreKit, Google Play Billing, and RevenueCat infrastructure.",
        iconName: "Play",
      },
      {
        title: "App Store Launch & Approval",
        description:
          "Complete release management including TestFlight betas, screenshot generation, and navigating store review compliance.",
        iconName: "CheckCheck",
      },
    ],
    processSectionTitle: "How we build mobile apps",
    processSectionSubtitle: "A sensory development process balancing fluid motion with rock-solid engineering.",
    process: [
      {
        step: "01",
        title: "Flow & Ergonomics",
        description: "Mapping primary user journeys, screen hierarchies, and thumb-friendly interactive zones.",
      },
      {
        step: "02",
        title: "Sensory UI & Motion",
        description: "Designing tactile layouts, fluid physics-based transitions, and subtle haptic feedback triggers.",
      },
      {
        step: "03",
        title: "Native Engineering",
        description: "Building fast, battery-efficient code backed by offline storage and real-time cloud synchronization.",
      },
      {
        step: "04",
        title: "Beta Testing & Release",
        description: "Coordinating TestFlight beta testing, App Store review compliance, and the public release rollout.",
      },
    ],
    faqs: [
      {
        question: "Do you develop apps for both iOS and Android?",
        answer:
          "Yes. We build cross-platform mobile applications using modern frameworks that provide native feel, sub-second responsiveness, offline data synchronization, and intuitive gesture-driven UI.",
      },
      {
        question: "What is your mobile development lifecycle?",
        answer:
          "From initial UX wireframing and interactive prototypes through to production engineering, beta testing on TestFlight / Google Play Beta, and official App Store submission.",
      },
      {
        question: "Can Oddlyyy integrate mobile apps with our existing web backend?",
        answer:
          "Yes. We design unified API architectures so your web platform, mobile applications, and internal tools share identical data, user accounts, and business logic.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle: "Have a mobile app concept ready to build?",
    ctaHighlightWord: "delightful.",
    ctaDescription:
      "Let's design and engineer an application that feels tactile, fast, and worthy of a permanent spot on your users' home screens.",
    ctaButtonLabel: "Let's Build Your App ↗",
  },

  // 07 / Fallback : The Odd Jobs
  "the-odd-jobs": {
    slug: "the-odd-jobs",
    index: "07",
    numberOnly: "07",
    name: "The Odd Jobs",
    shortName: "The Odd Jobs",
    categoryLabel: "The Odd Jobs",
    tagline: "Some ideas don't fit neatly into categories. That's where we come in.",
    introDescription:
      "For unconventional business challenges, rapid prototype sprints, and custom digital stunts that defy standard agency formulas. We build tailored solutions for problems traditional agencies don't know how to price.",
    badge: "1-to-2 Week Sprints",
    primaryCtaLabel: "Pitch an Odd Idea",
    deliverablesSectionTitle: "What We Can Create For Unusual Challenges",
    deliverablesSectionSubtitle:
      "Fast-track creative sprints delivering working prototypes and bespoke utilities.",
    deliverables: [
      {
        title: "Rapid 1-to-2 Week Prototypes",
        description:
          "High-fidelity working prototypes to prove a bold concept, test user interest, or secure stakeholder investment.",
        iconName: "Zap",
      },
      {
        title: "Custom Interactive Micro-Games",
        description:
          "Playful digital stunts, viral calculators, and browser games designed to captivate your audience and earn attention.",
        iconName: "Wand2",
      },
      {
        title: "Specialized Internal Utilities",
        description:
          "Bespoke tools built around your team's idiosyncratic workflow where off-the-shelf software falls short.",
        iconName: "Code2",
      },
      {
        title: "Event & Exhibition Experiences",
        description:
          "Sensory interactive displays, digital installations, and custom conference activations that stand out in crowded halls.",
        iconName: "Layout",
      },
    ],
    processSectionTitle: "How we tackle Odd Jobs",
    processSectionSubtitle: "Agile, high-velocity sprints with zero bureaucratic delay.",
    process: [
      {
        step: "01",
        title: "The Odd Brief",
        description: "Defining the unusual objective, target boundaries, and key measure of success.",
      },
      {
        step: "02",
        title: "Rapid Concept Feasibility",
        description: "Creating a quick working proof-of-concept within 48 to 72 hours.",
      },
      {
        step: "03",
        title: "Iterative Construction",
        description: "Refining the solution through hands-on testing, real feedback, and sensory craft.",
      },
      {
        step: "04",
        title: "Demonstration & Handover",
        description: "Delivering the finished solution with clear instructions, source files, and support.",
      },
    ],

    faqs: [
      {
        question: "What qualifies as an 'Odd Job'?",
        answer:
          "The Odd Jobs is our dedicated 1-to-2 week rapid sprint offering for unusual or fast-turnaround creative challenges: rapid prototypes, bespoke interactive microsites, novel API integrations, or creative digital experiments.",
      },
      {
        question: "How quickly can an Odd Job sprint begin?",
        answer:
          "Because these are scoped as rapid-response sprints, we can typically kick off within 3 to 5 business days after scoping alignment.",
      },
      {
        question: "What is the typical outcome of an Odd Job sprint?",
        answer:
          "A fully functional, battle-tested deliverable: whether a live interactive microsite, a working prototype, or an automated utility ready for immediate production deployment.",
      },
    ],
    relatedProjectSlugs: [],
    ctaTitle: "Got an unusual creative challenge?",
    ctaHighlightWord: "unordinary.",
    ctaDescription:
      "Tell us what you're imagining. If it's a creative problem that excites us and defies standard agency templates, we want to build it.",
    ctaButtonLabel: "Let's Talk Odd",
  },
};

// Ordered list of the six main services for navigation and display
export const MAIN_SERVICES_LIST = [
  serviceDetailsData["digital-platforms"],
  serviceDetailsData["ai-automation"],
  serviceDetailsData["brand-identity"],
  serviceDetailsData["content-campaigns"],
  serviceDetailsData["business-systems"],
  serviceDetailsData["mobile-app-development"],
];


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
  benefits: ServiceBenefitItem[];
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
    deliverablesSectionTitle: "What We Can Build For You.",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Tangible commercial value designed for long-term growth, zero agency fluff.",
    benefits: [
      {
        title: "Sub-Second Loading Speeds",
        description: "Optimized modern architecture ensuring fast page loads that improve SEO rankings and boost conversions.",
      },
      {
        title: "Effortless Team Updates",
        description: "Intuitive content dashboards so your team can edit text, publish articles, and update products with zero coding.",
      },
      {
        title: "Responsive Across Devices",
        description: "Pixel-perfect presentation whether your customers browse from an iPhone, tablet, or ultrawide desktop monitor.",
      },
      {
        title: "Clean, Maintainable Code",
        description: "Built on battle-tested frameworks like Next.js and Tailwind CSS so your site is secure and easy to scale.",
      },
    ],
    relatedProjectSlugs: ["the-chess-project", "meraki-designs", "chicago-yachts", "payzero"],
    ctaTitle: "Ready to build a website that refuses to be ordinary?",
    ctaHighlightWord: "exceptional.",
    ctaDescription:
      "Tell us what you're imagining. We'll bring the strategy, design, and code to turn your idea into a high-performing digital flagship.",
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
    deliverablesSectionTitle: "What we can automate for you",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Practical operational superpowers that save hours every single week.",
    benefits: [
      {
        title: "Dozens of Hours Reclaimed",
        description: "Eliminate repetitive copy-paste busywork so your key team members can focus on high-impact client work.",
      },
      {
        title: "Instant Customer Response",
        description: "Engage prospective buyers within seconds, even on weekends and outside standard business hours.",
      },
      {
        title: "Zero Data-Retention Privacy",
        description: "Enterprise-level security ensuring your proprietary business data is never shared or used to train public AI models.",
      },
      {
        title: "Resilient Error Alerts",
        description: "Automated fallbacks and instant notifications guarantee no lead, booking, or customer transaction ever drops.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle: "Ready to put repetitive business tasks on autopilot?",
    ctaHighlightWord: "autopilot.",
    ctaDescription:
      "Tell us what manual workflows slow your business down. We'll design an intelligent automation that gives you hours back every week.",
    ctaButtonLabel: "Automate Now",
  },

  // 03 : Branding & Creative Studio
  "brand-identity": {
    slug: "brand-identity",
    index: "03",
    numberOnly: "03",
    name: "Branding & Creative Studio",
    shortName: "Branding & Creative",
    categoryLabel: "Branding & Creative",
    tagline: "Unmistakable visual identities designed for brands that refuse to blend in.",
    introDescription:
      "Great branding commands premium market respect. We craft complete identity systems, from iconic logo suites and bespoke typography to packaging and digital guidelines, that make your business unforgettable.",
    badge: "Unmistakable Craft",
    primaryCtaLabel: "Craft Your Brand",
    deliverablesSectionTitle: "What we craft for you",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "A coherent visual presence that builds instant market trust.",
    benefits: [
      {
        title: "Premium Market Perception",
        description: "Look established, authoritative, and distinctive enough to comfortably command higher pricing in your category.",
      },
      {
        title: "Total Brand Consistency",
        description: "Eliminate mismatched fonts, outdated logos, and fragmented visuals across all company touchpoints.",
      },
      {
        title: "Production-Ready Vectors",
        description: "Clean, organized SVG, EPS, PDF, and PNG formats prepared for both digital web and commercial printing.",
      },
      {
        title: "Living Guidelines Portal",
        description: "A shareable digital handbook your internal team and external contractors can reference anytime.",
      },
    ],
    relatedProjectSlugs: ["meraki-designs", "the-chess-project"],
    ctaTitle: "Ready for a brand identity that commands attention?",
    ctaHighlightWord: "unmistakable.",
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
    tagline: "Creative campaigns and content systems that cut through digital noise.",
    introDescription:
      "Modern audiences tune out generic corporate advertising. We design memorable launch campaigns, sharp copywriting, and engaging short-form motion that spark genuine interest and turn announcements into milestones.",
    badge: "Zero Corporate Fluff",
    primaryCtaLabel: "Plan a Campaign",
    deliverablesSectionTitle: "What we create for your audience",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Marketing that respects your audience's intelligence and drives real engagement.",
    benefits: [
      {
        title: "Cut Through Digital Noise",
        description: "Break away from predictable corporate marketing with fresh creative concepts people actually remember.",
      },
      {
        title: "Higher Conversion Rates",
        description: "Turn passive social scrollers into registered waitlist members and enthusiastic early customers.",
      },
      {
        title: "Reusable Asset Library",
        description: "Gain a flexible kit of motion snippets, graphic badges, and copy templates for ongoing promotions.",
      },
      {
        title: "Honest Performance Data",
        description: "Clear reporting on visitor interest, click journeys, and conversions without inflated vanity metrics.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle: "Planning a launch that deserves real attention?",
    ctaHighlightWord: "unmissable.",
    ctaDescription:
      "Let's craft a campaign narrative and interactive launch destination people will actually talk about and remember.",
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
    tagline: "Connecting your business software, data pipelines, and internal tools seamlessly.",
    introDescription:
      "Stop wasting hours manually re-typing data between disconnected apps. We build custom API connectors, resilient data pipelines, and internal operations dashboards so your business operates as one unified system.",
    badge: "Zero Data Silos",
    primaryCtaLabel: "Connect Your Systems",
    deliverablesSectionTitle: "What we connect and build",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Seamless data continuity and operations that scale without adding manual overhead.",
    benefits: [
      {
        title: "Eliminate Copy-Paste Errors",
        description: "Stop human data entry mistakes by synchronizing customer records and transactions automatically.",
      },
      {
        title: "Fail-Safe Architecture",
        description: "Idempotent queues and error fallbacks guarantee no inquiry, order, or record is ever dropped.",
      },
      {
        title: "Unified Team Visibility",
        description: "Give your operators immediate real-time clarity across all platforms without switching between ten browser tabs.",
      },
      {
        title: "Built to Scale",
        description: "Engineered on modern cloud serverless architecture that handles traffic spikes and data volume effortlessly.",
      },
    ],
    relatedProjectSlugs: ["chicago-yachts", "the-chess-project"],
    ctaTitle: "Ready to connect your business software into one cohesive engine?",
    ctaHighlightWord: "seamless.",
    ctaDescription:
      "Tell us what tools your business depends on. We'll build the robust connectors that keep your data synchronized and accurate.",
    ctaButtonLabel: "Connect Systems",
  },

  // 06 : Mobile App Development
  "mobile-app-development": {
    slug: "mobile-app-development",
    index: "06",
    numberOnly: "06",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    categoryLabel: "Mobile App Development",
    tagline: "Tactile, high-performance iOS and Android applications with unforgettable polish.",
    introDescription:
      "We engineer mobile applications people genuinely love opening. From silky 60/120fps physics animations and tactile haptics to offline data synchronization, we craft mobile experiences of Apple Design caliber.",
    badge: "60/120fps Native Feel",
    primaryCtaLabel: "Build an App",
    deliverablesSectionTitle: "What we engineer for mobile",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Mobile craftsmanship that earns 5-star reviews and daily retention.",
    benefits: [
      {
        title: "Silky 60/120fps Smoothness",
        description: "Native physics interactions and instant touch response that feel snappy, delightful, and natural.",
      },
      {
        title: "Guaranteed Store Approval",
        description: "We handle Apple and Google review guidelines so your release isn't delayed by store compliance rejections.",
      },
      {
        title: "Works Seamlessly Offline",
        description: "Smart local caching ensures your customers can browse and interact even with spotty connectivity.",
      },
      {
        title: "Single Codebase Velocity",
        description: "Roll out new features to both iOS and Android simultaneously without maintaining two separate engineering teams.",
      },
    ],
    relatedProjectSlugs: [], // User constraint: omit when genuine portfolio assets are unavailable
    ctaTitle: "Have a mobile app concept ready to build?",
    ctaHighlightWord: "delightful.",
    ctaDescription:
      "Let's design and engineer an application that feels tactile, fast, and worthy of a permanent spot on your users' home screens.",
    ctaButtonLabel: "Build Mobile App",
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
    deliverablesSectionTitle: "What we can create for unusual challenges",
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
    benefitsSectionTitle: "What you actually get",
    benefitsSectionSubtitle: "Direct maker collaboration with guaranteed velocity.",
    benefits: [
      {
        title: "Direct Maker Collaboration",
        description: "Work directly with senior designers and engineers without layers of account executives.",
      },
      {
        title: "Fixed-Scope Sprints",
        description: "Transparent, time-boxed milestones so you know the exact cost and delivery date upfront.",
      },
      {
        title: "No Formulaic Thinking",
        description: "Fresh creative problem solving for ideas that traditional agencies dismiss as too weird or unscalable.",
      },
      {
        title: "Fully Documented Handover",
        description: "Complete source code, hosting setups, and instructions so you maintain full ownership.",
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


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
    tagline: "High-performance digital flagships that convert visitors into loyal customers.",
    shortDescription:
      "Bespoke business websites, e-commerce stores, and digital platforms built to elevate your brand and grow your revenue.",
    description:
      "Bespoke business websites, e-commerce stores, and digital platforms built to elevate your brand and grow your revenue.",
    detailedDescription:
      "We design and build bespoke digital flagships, seamless e-commerce platforms, and intuitive web solutions. Every website is engineered for speed, mobile elegance, and effortless content updates—giving your business a credible digital presence that outperforms competitors and turns casual visitors into devoted customers.",
    detailedOverview:
      "We design and build bespoke digital flagships, seamless e-commerce platforms, and intuitive web solutions. Every website is engineered for speed, mobile elegance, and effortless content updates—giving your business a credible digital presence that outperforms competitors and turns casual visitors into devoted customers.",
    servicesIncluded: [
      "Bespoke Business Websites & Redesigns",
      "High-Converting E-Commerce Experiences",
      "Interactive Landing Pages & Launch Sites",
      "Custom Client Portals & Booking Systems",
      "Easy-to-Manage Content Dashboards",
      "Ongoing Website Care & Performance Support",
    ],
    problemsSolved: [
      "Your current website looks like a generic template and fails to reflect company caliber.",
      "Slow loading speeds and awkward mobile navigation driving prospective clients away.",
      "Your team struggles to edit text, publish news, or update offerings without technical assistance.",
      "Inbound inquiries and sales are stalling due to confusing customer journeys and friction.",
    ],
    toolsAndTechnologies: [
      "Responsive Multi-Device Layouts",
      "Lightning-Fast Page Speeds",
      "Intuitive Content Management",
      "E-Commerce & Secure Checkout",
      "Search & Discovery Optimization",
      "Accessible Universal Design",
      "Custom Client Portals",
      "Ongoing Care & Evolution",
    ],
    features: [
      "Custom digital architecture tailored to your specific commercial goals",
      "Flawless mobile, tablet, and desktop responsiveness",
      "Simple, visual content management dashboards for your internal team",
      "Lightning-fast load times that boost search rankings and customer retention",
      "Integrated lead capture, online booking, and secure transaction workflows",
      "Tactile micro-interactions and smooth page transitions that build trust",
    ],
    deliverables: [
      "Fully Customized, Launch-Ready Business Website",
      "Complete Visual Design System & Component Library",
      "User-Friendly Content Management Dashboard",
      "Search Visibility & Performance Optimization Package",
      "Launch Handover Training & Dedicated Ongoing Support",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description: "Clarifying business objectives, customer journeys, target milestones, and conversion paths.",
      },
      {
        step: "02",
        title: "Experience Design",
        description: "Crafting intuitive layouts, striking typography, and mobile-first interactive prototypes.",
      },
      {
        step: "03",
        title: "Build & Tool Integration",
        description: "Bringing the design to life with seamless functionality, connected tools, and fast loading speeds.",
      },
      {
        step: "04",
        title: "Quality Review & Launch",
        description: "Rigorous cross-device testing, speed audits, team training, and a confident public rollout.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure our website drives actual business results?",
        answer:
          "We build with commercial intent—pairing clear brand storytelling, rapid loading speeds, and frictionless customer paths that turn passive visitors into qualified inbound leads and paying customers.",
      },
      {
        question: "Will our internal team be able to easily update content?",
        answer:
          "Yes. We configure clean, intuitive content editing dashboards so anyone on your team can edit text, publish articles, and update offerings without needing technical help or waiting on outside support.",
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
    tagline: "Intelligent workflows and customer systems that save time and eliminate manual busywork.",
    shortDescription:
      "Automated business workflows, intelligent customer assistants, and connected operations that free your team to focus on high-value growth.",
    description:
      "Automated business workflows, intelligent customer assistants, and connected operations that free your team to focus on high-value growth.",
    detailedDescription:
      "We turn artificial intelligence into practical business advantages. From 24/7 intelligent customer support and automated lead qualification to smart document processing and interconnected software, we build reliable systems tailored to your everyday operations—saving dozens of hours every week.",
    detailedOverview:
      "We turn artificial intelligence into practical business advantages. From 24/7 intelligent customer support and automated lead qualification to smart document processing and interconnected software, we build reliable systems tailored to your everyday operations—saving dozens of hours every week.",
    servicesIncluded: [
      "24/7 Intelligent Customer Support Assistants",
      "Automated Lead Capture & CRM Routing",
      "Hands-Free Appointment Scheduling & Follow-Ups",
      "Smart Document Processing & Information Retrieval",
      "Connected Business Tool Automations",
      "Custom Operations Dashboards & Alerts",
    ],
    problemsSolved: [
      "Your team spends valuable hours each week on repetitive data entry, filing, or answering duplicate questions.",
      "Hot inbound leads slip through the cracks because response times take hours instead of seconds.",
      "Your essential software tools don't talk to each other, creating scattered data and operational bottlenecks.",
      "Critical company information is buried across endless folders, making retrieval slow and frustrating.",
    ],
    toolsAndTechnologies: [
      "Intelligent Customer Assistance",
      "Automated Business Workflows",
      "Lead Qualification & Routing",
      "Document Understanding",
      "Connected Business Software",
      "Enterprise Data Privacy",
      "Hands-Free Appointment Booking",
      "Continuous Operational Tuning",
    ],
    features: [
      "Background automations that handle repetitive multi-step tasks without human oversight",
      "Instant, reliable answers to customer questions around the clock",
      "Direct synchronization across your CRM, email, calendar, and project management tools",
      "Strict enterprise-grade privacy safeguards ensuring proprietary data remains protected",
      "Lead triage systems that qualify prospective buyers and notify the right person instantly",
      "Simple team controls and overview dashboards to review system activity",
    ],
    deliverables: [
      "Custom Automated Workflow System",
      "Intelligent Customer Support Assistant",
      "Connected Software Integrations & Data Sync",
      "Team Training & Step-by-Step Operating Playbook",
      "Ongoing Monitoring & Performance Tuning",
    ],
    process: [
      {
        step: "01",
        title: "Operations Audit",
        description: "Mapping existing daily workflows to pinpoint repetitive bottlenecks and quantify time-savings.",
      },
      {
        step: "02",
        title: "System Architecture",
        description: "Designing reliable automated workflows and seamless connections between your business tools.",
      },
      {
        step: "03",
        title: "Build & Verification",
        description: "Configuring intelligent logic, strict accuracy safeguards, and private data protection.",
      },
      {
        step: "04",
        title: "Deployment & Onboarding",
        description: "Launching the automations, training your team on everyday use, and tracking hours reclaimed.",
      },
    ],
    faqs: [
      {
        question: "How do you protect our private company and customer data?",
        answer:
          "We implement enterprise-grade privacy controls with strict zero-retention policies. Your private company documents, operational data, and customer inquiries remain entirely confidential and are never used to train public models.",
      },
      {
        question: "Can these automations connect with our existing software?",
        answer:
          "Yes. We connect directly with your existing tools—including your CRM, email, calendar, spreadsheets, and communication channels—so your systems work together harmoniously without requiring you to switch platforms.",
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
    tagline: "Unmistakable visual identities designed for brands that refuse to blend in.",
    shortDescription:
      "Comprehensive visual identity systems, memorable logo suites, and creative direction that command premium market perception.",
    description:
      "Comprehensive visual identity systems, memorable logo suites, and creative direction that command premium market perception.",
    detailedDescription:
      "Great branding is not just a logo—it is an unmistakable visual presence that commands respect. We craft coherent brand identities from typography and color systems to packaging, pitch decks, and digital guidelines, ensuring your business stands out with clarity and authority across every customer touchpoint.",
    detailedOverview:
      "Great branding is not just a logo—it is an unmistakable visual presence that commands respect. We craft coherent brand identities from typography and color systems to packaging, pitch decks, and digital guidelines, ensuring your business stands out with clarity and authority across every customer touchpoint.",
    servicesIncluded: [
      "Brand Identity & Positioning Guidelines",
      "Logo Suite & Iconic Brand Marks",
      "Distinctive Typography & Color Systems",
      "Executive Presentation & Pitch Decks",
      "Social Media Visual Toolkits & Templates",
      "Packaging, Merchandise & Print Collateral",
    ],
    problemsSolved: [
      "Your company's visual appearance feels outdated, generic, or identical to competitors.",
      "Internal teams and partners use inconsistent fonts, colors, and logos across public materials.",
      "Preparing for an upcoming fundraise, product launch, or market pivot that demands elevated credibility.",
      "A high-quality product or service struggling to command premium pricing due to understated branding.",
    ],
    toolsAndTechnologies: [
      "Visual Identity Design",
      "Logo & Brand Mark Suite",
      "Editorial Typography",
      "Color Palette Architecture",
      "Packaging & Print Design",
      "Social & Marketing Visuals",
      "Brand Guidelines & System Kits",
      "Commercial Presentation Design",
    ],
    features: [
      "Complete visual identity manuals with clear usage rules",
      "Distinctive typography pairings that reflect brand personality",
      "Harmonious color palettes optimized for screen and physical print",
      "Adaptable logo suites for icons, headers, packaging, and social media",
      "Ready-to-use digital templates for presentations and marketing collateral",
      "Clear tone of voice and verbal positioning principles",
    ],
    deliverables: [
      "Master Brand Identity Manual (PDF & Digital Guide)",
      "Complete Vector Logo Suite for All Media",
      "Custom Iconography & Visual Asset Pack",
      "Digital Marketing Templates & Presentation Decks",
      "Editorial Guidelines & Tone of Voice Playbook",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Market Position",
        description: "Auditing industry conventions, customer expectations, and your core point of difference.",
      },
      {
        step: "02",
        title: "Creative Exploration",
        description: "Presenting distinct visual directions spanning moodboards, typography, and raw marks.",
      },
      {
        step: "03",
        title: "System Expansion",
        description: "Developing the chosen concept across real-world digital, physical, and presentation touchpoints.",
      },
      {
        step: "04",
        title: "Final Delivery & Guidelines",
        description: "Delivering complete asset suites, organized vector files, and comprehensive usage rules.",
      },
    ],
    faqs: [
      {
        question: "How long does a complete brand identity project take?",
        answer:
          "Most brand identity projects take between 4 to 8 weeks, depending on the depth of collateral, packaging, and presentation design required.",
      },
      {
        question: "Do you handle rebranding for established companies?",
        answer:
          "Yes. We specialize in helping companies that have outgrown their original branding evolve into confident, contemporary market leaders without alienating existing customers.",
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
    tagline: "Unconventional launch campaigns and content systems that drive organic attention.",
    shortDescription:
      "Strategic launch campaigns, high-converting product microsites, and compelling brand storytelling that cut through digital noise.",
    description:
      "Strategic launch campaigns, high-converting product microsites, and compelling brand storytelling that cut through digital noise.",
    detailedDescription:
      "We design creative campaigns and content systems for modern audiences that tune out generic advertising. By combining provocative concepts with interactive launch destinations, memorable short-form motion, and sharp copywriting, we help ambitious businesses turn product announcements into cultural events.",
    detailedOverview:
      "We design creative campaigns and content systems for modern audiences that tune out generic advertising. By combining provocative concepts with interactive launch destinations, memorable short-form motion, and sharp copywriting, we help ambitious businesses turn product announcements into cultural events.",
    servicesIncluded: [
      "Interactive Product Launch Microsites",
      "Brand Storytelling & Website Copywriting",
      "Short-Form Motion & Social Media Content",
      "Early-Access Waitlist & Pre-Order Campaigns",
      "Search Visibility & Content Strategy",
      "Audience Engagement & Conversion Tracking",
    ],
    problemsSolved: [
      "Your audience ignores standard corporate social media posts and generic digital ads.",
      "An upcoming product launch lacks an unforgettable digital moment to spark organic word-of-mouth.",
      "Website messaging sounds dry and fails to communicate the real excitement of your offer.",
      "You need a focused waitlist or pre-order destination that captures highly qualified buyers.",
    ],
    toolsAndTechnologies: [
      "Campaign Strategy & Creative Direction",
      "High-Impact Launch Microsites",
      "Short-Form Motion & Social Content",
      "Editorial Copywriting & Storytelling",
      "Audience Engagement Funnels",
      "Conversion Analytics & Insights",
      "Early-Access Mechanics",
      "Search Engine Visibility",
    ],
    features: [
      "Interactive product reveal microsites that make launching exciting",
      "Social-first motion assets and engaging video snippets",
      "Creative waitlist mechanics that build genuine anticipation",
      "Persuasive copywriting that respects customer intelligence",
      "Clear tracking to measure visitor engagement and conversion rates",
    ],
    deliverables: [
      "Campaign Launch Strategy & Narrative Framework",
      "Interactive Launch Destination / Waitlist Site",
      "Motion Asset Suite (Short-form video, loops, reels)",
      "Social Media Kit & Editorial Templates",
      "Post-Launch Performance Review & Conversion Insights",
    ],
    process: [
      {
        step: "01",
        title: "The Creative Hook",
        description: "Uncovering the memorable angle that makes your announcement genuinely interesting to people.",
      },
      {
        step: "02",
        title: "Asset & Story Production",
        description: "Producing interactive teaser pages, video snippets, and sharp copywriting.",
      },
      {
        step: "03",
        title: "Launch Orchestration",
        description: "Testing every customer step, setting up conversion tracking, and coordinating the rollout.",
      },
      {
        step: "04",
        title: "Activation & Review",
        description: "Going live, engaging the incoming audience, and analyzing customer response patterns.",
      },
    ],
    faqs: [
      {
        question: "Do you manage ongoing paid advertising?",
        answer:
          "Our focus is creative campaign architecture, interactive launch destinations, and organic content systems that build genuine brand affinity rather than routine ad management.",
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
    tagline: "Some ideas don't fit neatly into categories. That's where we come in.",
    shortDescription:
      "For unusual business requirements, tailored creative explorations, and custom digital solutions that defy standard agency formulas.",
    description:
      "For unusual business requirements, tailored creative explorations, and custom digital solutions that defy standard agency formulas.",
    detailedDescription:
      "Some ideas don't fit neatly into categories. That's where we come in. Every ambitious company occasionally faces a challenge that traditional agencies don't know how to price or execute. 'The Odd Jobs' is our dedicated sprint category for bespoke creative problem-solving: interactive brand experiences, rapid prototypes, custom internal utilities, and unconventional digital installations.",
    detailedOverview:
      "Some ideas don't fit neatly into categories. That's where we come in. Every ambitious company occasionally faces a challenge that traditional agencies don't know how to price or execute. 'The Odd Jobs' is our dedicated sprint category for bespoke creative problem-solving: interactive brand experiences, rapid prototypes, custom internal utilities, and unconventional digital installations.",
    servicesIncluded: [
      "Bespoke Creative Solutions & Interactive Experiences",
      "Rapid 1-to-2 Week Prototype Sprints",
      "Custom Digital Stunts & Audience Micro-Games",
      "Specialized Internal Business Utilities",
      "Interactive Event & Exhibition Displays",
      "High-Impact Creative Problem Solving",
    ],
    problemsSolved: [
      "You have an unusual business or creative challenge that rigid agencies refuse to touch.",
      "You need a working, high-fidelity prototype within two weeks to prove a bold idea to stakeholders.",
      "You want an interactive event or conference experience that stops attendees in their tracks.",
      "Off-the-shelf software doesn't fit your needs and you want a tailored tool built specifically for you.",
    ],
    toolsAndTechnologies: [
      "Bespoke Digital Solutions",
      "Interactive Experiences & Micro-Games",
      "Rapid 1-to-2 Week Prototype Sprints",
      "Custom Creative Visuals",
      "Specialized Business Utilities",
      "Event & Exhibition Displays",
      "Direct Creative Collaboration",
      "Fast-Track Execution",
    ],
    features: [
      "Bespoke solutions designed specifically for unstandardized challenges",
      "Focused 1-to-2 week sprint execution for rapid turnaround",
      "Playful interactive micro-experiences that engage audiences",
      "Custom business utilities built around your exact workflow",
      "Direct maker collaboration with zero bureaucratic delay",
      "A flexible, results-driven creative partnership",
    ],
    deliverables: [
      "Fully Functional Custom Solution or Prototype",
      "Operational Guide & Step-by-Step Instructions",
      "Implementation Walkthrough & Demonstration",
      "Project Summary & Strategic Recommendations",
    ],
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
        title: "Handover & Demonstration",
        description: "Delivering the finished solution with clear instructions and support.",
      },
    ],
    faqs: [
      {
        question: "What kind of project qualifies as an 'Odd Job'?",
        answer:
          "Anything that feels too unconventional, unique, or experimental for a standard agency contract. If it's a creative problem that excites us and defies standard templates, we want to hear about it.",
      },
      {
        question: "How do you price Odd Jobs?",
        answer:
          "We structure Odd Jobs as focused, time-boxed sprints (typically 1 or 2 weeks) with agreed deliverables, clear milestones, and transparent upfront pricing.",
      },
    ],
    ctaText: "Discover The Odd Jobs",
    illustration: "/illustrations/services/odd-jobs.svg",
    cardVariant: "ink",
  },
];

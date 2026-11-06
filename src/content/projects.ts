import { ProjectItem } from "@/types";

export const workCategories = [
  "All",
  "Digital Platforms",
  "Corporate Websites",
  "Booking & Commerce",
  "Creative & Editorial",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export const projectsData: ProjectItem[] = [
  {
    id: "the-chess-project",
    projectName: "The Chess Project",
    title: "The Chess Project",
    slug: "the-chess-project",
    client: "The Chess Project",
    industry: "Chess Education / EdTech / Online Learning",
    projectCategory: "Digital Platforms",
    category: "Digital Platforms",
    categories: ["Digital Platforms", "EdTech"],
    year: "2025",
    description:
      "A premium chess education platform connecting ambitious players with structured courses, FIDE-titled coaches, and personalized chess training.",
    summary:
      "A premium chess education platform connecting ambitious players with structured courses, FIDE-titled coaches, and personalized chess training.",
    overview:
      "The Chess Project is an international chess education platform designed to help players improve their actual playing strength through structured courses, professional coaching, and personalized learning experiences. The platform combines educational content, coach discovery, course purchasing, learning management, and one-on-one coaching into a unified ecosystem.",
    challenge:
      "Synthesizing disparate aspects of digital chess education—from protected multi-module video learning and masterclass discovery to real-time classroom coaching sessions—into a cohesive, low-friction, and aesthetically elevated web ecosystem.",
    approach:
      "We architected a unified full-stack application centered on student progression and coach empowerment. Discarding utilitarian learning management templates, we established an editorial, high-contrast visual design system paired with high-performance video delivery, interactive board integration, and calendar-synchronized 1-on-1 coaching booking.",
    solution:
      "Delivered an end-to-end digital product featuring student authentication, course catalog with dynamic detail routing, Creator Studio for course authors, interactive LiveKit-powered classrooms, automated Razorpay checkouts, and role-based administrative control.",
    deliverables: [
      "Full-Stack Next.js Digital Application",
      "Course Catalog & Dynamic Learning Hub",
      "Coach Discovery & 1-on-1 Booking System",
      "LiveKit Virtual Classrooms & Calendar Sync",
      "Creator Studio & Administrative CMS",
      "Multi-Language Architecture & Role-Based Access",
    ],
    technologiesUsed: [
      "Next.js & React",
      "Bunny Stream Video CDN",
      "LiveKit Virtual Classrooms",
      "Razorpay Checkout Engine",
      "Google Calendar Sync",
      "Role-Based Access Control",
    ],
    tags: ["Digital Platforms", "EdTech", "Full-Stack Development"],
    images: {
      cover: "/images/projects/the-chess-project-cover.png",
      hero: "/images/projects/the-chess-project-cover.png",
      gallery: ["/images/projects/the-chess-project-alt.png"],
    },
    outcome:
      "Engineered an integrated educational operating system unifying course consumption, video streaming, and live masterclass coaching under a single authenticated platform.",
    cardColor: "lavender",
    badge: "Full-Stack Platform",
    isConcept: false,
    gridSpan: "wide",
    liveUrl: "https://www.thechessproject.com",
    order: 1,
  },
  {
    id: "meraki-designs",
    projectName: "Meraki Designs",
    title: "Meraki Designs",
    slug: "meraki-designs",
    client: "Meraki Designs",
    industry: "Architecture / Interior Design / Property Development",
    projectCategory: "Corporate Websites",
    category: "Corporate Websites",
    categories: ["Corporate Websites", "Creative & Editorial"],
    year: "2025",
    description:
      "An editorial digital experience for an architecture and design studio, built around thoughtful spaces, refined aesthetics, and considered design.",
    summary:
      "An editorial digital experience for an architecture and design studio, built around thoughtful spaces, refined aesthetics, and considered design.",
    overview:
      "Meraki Designs is a UK-based architecture and design studio offering architectural design, planning support, extensions, conversions, and property development services. The website communicates the studio's philosophy through premium editorial layouts, elegant typography, architectural imagery, and carefully structured service presentations.",
    challenge:
      "Communicating architectural mass, spatial consideration, and tailored planning services without succumbing to rigid brochure layouts or impersonal corporate presentation.",
    approach:
      "We designed a generous, editorial canvas marked by generous whitespace, refined charcoal surfaces, warm copper-terracotta accents, and serif typography. Rather than overwhelming visitors with technical jargon, we highlighted the studio's philosophy of thoughtful spaces and engineered an intuitive project cost calculator alongside structured service journeys.",
    solution:
      "Developed an architectural brand experience in Next.js featuring immersive project showcases, interactive service carousels, responsive enquiry flows, custom cost estimation tools, and a blog with SEO-conscious architecture.",
    deliverables: [
      "Brand-Aligned Editorial Website Design",
      "High-Performance Next.js Architecture",
      "Interactive Architectural Service Modules",
      "Custom Project Cost Calculator Tool",
      "Tailored Client Enquiry Experience",
      "SEO-Conscious Structure & Blog Architecture",
    ],
    technologiesUsed: [
      "Next.js & React",
      "Editorial Serif & Sans Typography",
      "Interactive Cost Calculator",
      "Responsive Architectural Layouts",
      "SEO Architecture",
      "Vercel Deployment",
    ],
    tags: ["Corporate Websites", "Architecture", "Creative & Editorial"],
    images: {
      cover: "/images/projects/meraki-designs-cover.webp",
      hero: "/images/projects/meraki-designs-cover.webp",
      gallery: ["/images/projects/meraki-designs-interior.webp"],
    },
    outcome:
      "Crafted a cohesive digital brand presence that elevates the studio's architectural practice and establishes high-trust client enquiry pathways across the UK.",
    cardColor: "mint",
    badge: "Editorial Architecture",
    isConcept: false,
    gridSpan: "normal",
    liveUrl: "https://www.merakidesignz.co.uk",
    order: 2,
  },
  {
    id: "chicago-yachts",
    projectName: "Chicago Yachts",
    title: "Chicago Yachts",
    slug: "chicago-yachts",
    client: "Chicago Yachts",
    industry: "Luxury Hospitality / Yacht Charters / Travel",
    projectCategory: "Digital Platforms",
    category: "Digital Platforms",
    categories: ["Digital Platforms", "Booking & Commerce"],
    year: "2025",
    description:
      "A premium yacht charter booking experience combining luxury presentation with a sophisticated reservation and fleet management system.",
    summary:
      "A premium yacht charter booking experience combining luxury presentation with a sophisticated reservation and fleet management system.",
    overview:
      "Chicago Yachts is a luxury yacht charter business operating its own fleet in Chicago, USA. The digital platform was designed to modernize the booking experience and provide customers with a seamless way to explore yachts, discover charter experiences, check availability, customize bookings, and receive pricing quotes. This is a direct-operator booking platform, not a yacht marketplace.",
    challenge:
      "Creating a direct-to-consumer luxury hospitality platform that marries high-end visual elegance with complex transactional logic: dynamic yacht pricing, duration rules, availability holds, and guest preference workflows.",
    approach:
      "We engineered a tailored charter reservation platform with a high-end luxury aesthetic. By pairing immersive photography and fluid typography with a multi-step booking wizard, real-time availability calendar, and server-side booking hold architecture, the experience makes chartering a private vessel as effortless as booking a luxury boutique hotel.",
    solution:
      "Built a responsive Next.js application backed by PostgreSQL, Prisma, and Supabase infrastructure. Implemented dynamic vessel detail pages, custom duration calculators, add-on selections, guest checkout flows, and booking management architecture with planned Stripe payment integration.",
    deliverables: [
      "Luxury Direct-Operator Booking Platform",
      "Multi-Step Charter Reservation Wizard",
      "Dynamic Fleet & Experience Showcase",
      "Real-Time Availability & Hold Architecture",
      "Dynamic Pricing & Add-On Calculation Engine",
      "PostgreSQL & Prisma Data Infrastructure",
    ],
    technologiesUsed: [
      "Next.js & React",
      "PostgreSQL & Prisma ORM",
      "Supabase Cloud Infrastructure",
      "Dynamic Pricing Engine",
      "Server-Side Booking Validation",
      "Planned Stripe Architecture",
    ],
    tags: ["Booking Platforms", "Luxury Hospitality", "Full-Stack Development"],
    images: {
      cover: "/images/projects/chicago-yachts-cover.png",
      hero: "/images/projects/chicago-yachts-cover.png",
      gallery: [
        "/images/projects/chicago-yachts-lake.png",
        "/images/projects/chicago-yachts-river.png",
      ],
    },
    outcome:
      "Delivered a modern direct-fleet booking architecture providing instant date/time reservations, live pricing calculations, and structured fleet management.",
    cardColor: "lavender",
    badge: "Luxury Booking Platform",
    isConcept: false,
    gridSpan: "tall",
    liveUrl: "https://chicago-yachts.vercel.app",
    order: 3,
  },
  {
    id: "payzero",
    projectName: "Payzero",
    title: "Payzero",
    slug: "payzero",
    client: "PAY ZERO ENERGY EXPERT PVT LTD",
    company: "PAY ZERO ENERGY EXPERT PVT LTD",
    industry: "Renewable Energy / Solar EPC",
    projectCategory: "Corporate Websites",
    category: "Corporate Websites",
    categories: ["Corporate Websites", "Renewable Energy"],
    year: "2024",
    description:
      "A modern digital presence for a solar EPC company, communicating its engineering capabilities, solar solutions, and commitment to smarter energy.",
    summary:
      "A modern digital presence for a solar EPC company, communicating its engineering capabilities, solar solutions, and commitment to smarter energy.",
    overview:
      "Payzero is an Indian solar energy company serving residential, commercial, industrial, and ground-mounted solar infrastructure requirements. The website presents Payzero as a full-service solar EPC provider, communicating its services, engineering approach, installation process, and customer consultation opportunities. Official brand tagline: 'Let the Sun Pay Your Energy Bills.'",
    challenge:
      "Demystifying commercial and residential solar installation, translating technical EPC capabilities and regulatory steps into a transparent, trust-inducing digital consultation pathway.",
    approach:
      "Anchored around Payzero's official ethos, 'Let the Sun Pay Your Energy Bills,' we constructed an engineering-informed corporate website. We created clear sector segmentation across residential, commercial, industrial, and utility scale solar, supported by a structured six-step installation process and interactive solar savings and EMI consultation calculators.",
    solution:
      "Architected and deployed a high-speed corporate web platform in Next.js featuring comprehensive solar service architecture, educational EPC guides, custom lead generation forms, location integrations, and SEO-optimized content structures.",
    deliverables: [
      "Full Corporate Website Strategy & Design",
      "Residential, Commercial & Industrial Service Architecture",
      "Six-Step Solar EPC Process Flow",
      "Solar Savings & Financial Model Estimator",
      "Multi-Location Lead Generation Consultation Flows",
      "SEO-Conscious Architecture on Vercel",
    ],
    technologiesUsed: [
      "Next.js & React",
      "Tailwind CSS",
      "Interactive Solar Savings Calculator",
      "Lead Generation Engine",
      "Multi-Location Integration",
      "Vercel Infrastructure",
    ],
    tags: ["Corporate Websites", "Renewable Energy", "Lead Generation"],
    images: {
      cover: "/images/projects/payzero-cover.png",
      hero: "/images/projects/payzero-cover.png",
      gallery: ["/images/projects/payzero-cover.png"],
    },
    outcome:
      "Established an authoritative solar engineering web presence with integrated consultation calculators and multi-tier EPC service breakdowns.",
    cardColor: "cream",
    badge: "Solar EPC Corporate",
    isConcept: false,
    gridSpan: "normal",
    liveUrl: "https://payzeroenergy.com",
    order: 4,
  },
];

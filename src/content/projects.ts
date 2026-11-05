import { ProjectItem } from "@/types";

export const workCategories = [
  "All",
  "Websites",
  "Branding",
  "AI & Automation",
  "Marketing",
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "proj-alpha",
    projectName: "Kroma Acoustic Lab",
    title: "Kroma Acoustic Lab",
    slug: "project-alpha",
    client: "[Speculative Concept: Spatial Sound Lab]",
    industry: "Audio Technology & Spatial Acoustics",
    projectCategory: "Websites",
    category: "Websites",
    year: "2025",
    description:
      "A flagship web platform concept engineered for real-time sound synthesis, 3D acoustic simulation, and audio equipment exploration.",
    summary:
      "A flagship web platform concept engineered for real-time sound synthesis, 3D acoustic simulation, and audio equipment exploration.",
    challenge:
      "Acoustic technology is notoriously difficult to communicate through conventional two-dimensional screens without resorting to dry technical charts.",
    approach:
      "We discarded typical dark-mode techno-futurist tropes in favor of warm physical materiality: tactile knobs, high-contrast cream-and-ink editorial layout, and direct browser-native sound wave generation. By treating web audio as a first-class tactile interface rather than background gimmickry, we created an intuitive sandbox where sound engineers and casual listeners alike interact directly with spatial physics.",
    solution:
      "Engineered a Next.js 15 App Router architecture with custom audio-reactive canvas elements, modular product spec sheets, and an obsidian-and-cream high-contrast aesthetic.",
    deliverables: [
      "Next.js 15 Web Flagship Architecture",
      "Interactive Audio Spectrum Canvas Widget",
      "Component Design System & Token Suite",
      "Dynamic Product Specification Sheets",
    ],
    technologiesUsed: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
      "HTML5 Canvas",
      "Framer Motion",
    ],
    tags: ["Next.js 15", "Web Audio API", "Design System"],
    images: {
      cover: "/images/projects/project-alpha-cover.webp",
      hero: "/images/projects/project-alpha-hero.webp",
      gallery: [
        "/images/projects/project-alpha-01.webp",
        "/images/projects/project-alpha-02.webp",
      ],
    },
    outcome:
      "[Benchmark Prototype: Sub-800ms Time-to-Interactive achieved with zero external layout shift across mobile and desktop audits.]",
    cardColor: "lavender",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "wide",
  },
  {
    id: "proj-beta",
    projectName: "Velvet & Matter",
    title: "Velvet & Matter",
    slug: "project-beta",
    client: "[Speculative Concept: Bio-Fabricated Textiles]",
    industry: "Sustainable Textiles & Material Science",
    projectCategory: "Branding",
    category: "Branding",
    year: "2025",
    description:
      "A complete visual identity and editorial storytelling platform repositioning bio-fabricated textiles for luxury contemporary fashion houses.",
    summary:
      "A complete visual identity and editorial storytelling platform repositioning bio-fabricated textiles for luxury contemporary fashion houses.",
    challenge:
      "Translating complex material science and environmental certifications into an emotionally resonant, luxury-grade visual identity that avoids cliché earthy eco-tropes.",
    approach:
      "Rather than leaning into sterile laboratory tropes or clichéd green leaf motifs, we framed bio-fabricated textiles through the lens of high European fashion. We conducted an intensive typographic exploration combining high-contrast serif headlines with brutalist sans subtext, paired with tactile digital swatches that react dynamically to cursor movement like light glancing across luxury woven fibers.",
    solution:
      "Crafted an unconventional brand system pairing brutalist editorial typography with warm cream tactile backgrounds and a digital material swatch laboratory.",
    deliverables: [
      "Master Brand Identity & Guidelines",
      "Editorial Lookbook & Typography Architecture",
      "Interactive Swatch Viewer Prototype",
      "Physical Packaging & Specimen Box Concepts",
    ],
    technologiesUsed: [
      "Figma Tokens",
      "Adobe Illustrator & InDesign",
      "WebGL Texture Shaders",
      "React",
      "Tailwind CSS",
    ],
    tags: ["Brand Identity", "Editorial Design", "Interactive Web"],
    images: {
      cover: "/images/projects/project-beta-cover.webp",
      hero: "/images/projects/project-beta-hero.webp",
      gallery: [
        "/images/projects/project-beta-01.webp",
        "/images/projects/project-beta-02.webp",
      ],
    },
    outcome:
      "[Benchmark Prototype: Unified 4 bio-material lines under a singular, high-contrast luxury editorial design architecture.]",
    cardColor: "mint",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "normal",
  },
  {
    id: "proj-gamma",
    projectName: "Synapse Intelligence Hub",
    title: "Synapse Intelligence Hub",
    slug: "project-gamma",
    client: "[Speculative Concept: Research Analytics Lab]",
    industry: "Data Intelligence & Knowledge Operations",
    projectCategory: "AI & Automation",
    category: "AI & Automation",
    year: "2024",
    description:
      "A bespoke internal knowledge assistant interface enabling research analysts to synthesize massive document archives via natural language citations.",
    summary:
      "A bespoke internal knowledge assistant interface enabling research analysts to synthesize massive document archives via natural language citations.",
    challenge:
      "Researchers were spending dozens of hours manually synthesizing unstructured PDF filings with strict internal accuracy requirements and zero margin for AI hallucinations.",
    approach:
      "Instead of a generic floating chatbot window, we treated research analytics as an editorial workstation. We mapped the analyst's cognitive workflow: scanning sources, validating claims, and drafting synthesis. We placed interactive verifiable citation cards alongside AI-synthesized paragraphs with deterministic highlight tracing, eliminating black-box opacity and establishing complete analytical trust.",
    solution:
      "Designed and deployed a private RAG pipeline with citations-first UI, verifiable source sidebars, and customizable summarization templates with deterministic latency controls.",
    deliverables: [
      "Conversational Interface Design & Frontend",
      "Private Vector Database Ingestion Pipeline",
      "Citation-Anchored Output Components",
      "Operational Security & Boundary Documentation",
    ],
    technologiesUsed: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Python / FastAPI",
      "Pinecone Vector Store",
    ],
    tags: ["AI Interface", "RAG Pipeline", "Enterprise Tooling"],
    images: {
      cover: "/images/projects/project-gamma-cover.webp",
      hero: "/images/projects/project-gamma-hero.webp",
      gallery: ["/images/projects/project-gamma-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Reduced multi-document cross-referencing research time from hours to minutes during internal benchmark testing.]",
    cardColor: "cream",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "normal",
  },
  {
    id: "proj-delta",
    projectName: "Apex Modular Hardware",
    title: "Apex Modular Hardware",
    slug: "project-delta",
    client: "[Speculative Concept: Modular Hardware]",
    industry: "Consumer Electronics & Modular Hardware",
    projectCategory: "Marketing",
    category: "Marketing",
    year: "2024",
    description:
      "A single-page interactive product reveal site utilizing asymmetric layout shifts, interactive 3D exploded hardware views, and tactile sound design.",
    summary:
      "A single-page interactive product reveal site utilizing asymmetric layout shifts, interactive 3D exploded hardware views, and tactile sound design.",
    challenge:
      "Building feverish anticipation for a new modular hardware launch without prematurely revealing finalized production secrets.",
    approach:
      "We built an asymmetric, multi-sensory teaser campaign that engaged the tactile curiosity of hardware enthusiasts. Rather than a static countdown timer and generic email form, we designed an interactive blueprint dial where visitors manipulated hardware components to unlock schematic layers, acoustic feedback, and tiered early-bird reservation codes.",
    solution:
      "Built a cryptic, interactive digital puzzle destination where visitors manipulated mechanical blueprints and sound dials to unlock teaser clips and pre-registration access.",
    deliverables: [
      "Interactive Single-Page Teaser Architecture",
      "Interactive 3D Hardware Wireframe Component",
      "Sound Design & Tactile Button Audio Cues",
      "High-Traffic Waitlist Registration System",
    ],
    technologiesUsed: [
      "Next.js",
      "Three.js / React Three Fiber",
      "Tailwind CSS",
      "Howler.js Audio",
      "Serverless Edge Database",
    ],
    tags: ["Interactive Campaign", "Three.js", "Viral Microsite"],
    images: {
      cover: "/images/projects/project-delta-cover.webp",
      hero: "/images/projects/project-delta-hero.webp",
      gallery: ["/images/projects/project-delta-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Handled simulated surge traffic smoothly during stress-testing with zero infrastructure downtime.]",
    cardColor: "lavender",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "tall",
  },
  {
    id: "proj-epsilon",
    projectName: "Studio Monolith Architecture",
    title: "Studio Monolith Architecture",
    slug: "project-epsilon",
    client: "[Speculative Concept: Spatial Architecture Practice]",
    industry: "Contemporary Architecture & Urban Planning",
    projectCategory: "Websites",
    category: "Websites",
    year: "2025",
    description:
      "An avant-garde digital portfolio for a spatial design studio featuring horizontal kinetic viewports, structural grid overlays, and blueprint viewers.",
    summary:
      "An avant-garde digital portfolio for a spatial design studio featuring horizontal kinetic viewports, structural grid overlays, and blueprint viewers.",
    challenge:
      "Traditional architectural websites are rigid, text-heavy grids that fail to capture the physical three-dimensional presence of built space.",
    approach:
      "We translated physical architectural mass into digital space through continuous horizontal flow and structural grid lines. By mapping architectural floorplans to responsive canvas viewports and providing interactive scale rulers, the experience conveys spatial depth, light orientation, and material honesty across every screen size.",
    solution:
      "Engineered an interactive canvas layout with fluid kinetic transitions, architectural hairline grids, and high-resolution CAD blueprint overlays.",
    deliverables: [
      "Interactive Horizontal Viewport Platform",
      "Dynamic CAD Blueprint Inspection Tool",
      "Minimalist Editorial Typography Hierarchy",
      "Performance Image Optimization Pipeline",
    ],
    technologiesUsed: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebGL Canvas",
    ],
    tags: ["Next.js 15", "Architecture Web", "Kinetic Layout"],
    images: {
      cover: "/images/projects/project-epsilon-cover.webp",
      hero: "/images/projects/project-epsilon-hero.webp",
      gallery: ["/images/projects/project-epsilon-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Seamless 60fps horizontal pan navigation implemented with full touch and trackpad momentum support.]",
    cardColor: "mint",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "normal",
  },
  {
    id: "proj-zeta",
    projectName: "Kinetic Glyphs Type Foundry",
    title: "Kinetic Glyphs Type Foundry",
    slug: "project-zeta",
    client: "[Speculative Concept: Independent Digital Foundry]",
    industry: "Digital Typography & Variable Fonts",
    projectCategory: "Branding",
    category: "Branding",
    year: "2024",
    description:
      "A dynamic branding identity and interactive specimen playground for an independent experimental variable font foundry.",
    summary:
      "A dynamic branding identity and interactive specimen playground for an independent experimental variable font foundry.",
    challenge:
      "Displaying variable font axes (weight, slant, width) interactively in the browser without UI lag or font render blocking.",
    approach:
      "We inverted the traditional static type specimen PDF by building a live typographic laboratory. Visitors manipulate variable font axes—weight, optical size, slant, and ink traps—in real-time against high-contrast monochrome and terracotta backdrops, previewing instant rendering performance without font loading delays.",
    solution:
      "Designed a brutalist, ink-and-cream visual identity paired with a live interactive variable font tester allowing real-time typographic manipulation.",
    deliverables: [
      "Visual Identity System & Type Specimens",
      "Interactive Variable Font Axis Slider UI",
      "Specimen Poster Print & Digital Assets",
      "E-Commerce Licensing Flow Prototype",
    ],
    technologiesUsed: [
      "CSS Font Variations",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "SVG Animation",
    ],
    tags: ["Typography Identity", "Variable Fonts", "Interactive Specimen"],
    images: {
      cover: "/images/projects/project-zeta-cover.webp",
      hero: "/images/projects/project-zeta-hero.webp",
      gallery: ["/images/projects/project-zeta-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Instant zero-latency variable font manipulation running smoothly across mobile touch screens.]",
    cardColor: "cream",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "normal",
  },
];

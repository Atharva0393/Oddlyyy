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
      "A flagship digital experience designed for intuitive sound exploration, 3D acoustic simulation, and audio product discovery.",
    summary:
      "A flagship digital experience designed for intuitive sound exploration, 3D acoustic simulation, and audio product discovery.",
    challenge:
      "Acoustic technology is notoriously difficult to communicate through conventional screens without resorting to dry technical charts.",
    approach:
      "We discarded typical dark-mode techno-futurist tropes in favor of warm physical materiality: tactile dials, high-contrast cream-and-ink editorial layout, and direct sound wave generation. By treating sound as a first-class tactile experience, we created an intuitive sandbox where sound engineers and casual listeners alike interact directly with spatial acoustics.",
    solution:
      "Designed and built an immersive digital flagship featuring interactive sound-reactive visuals, modular product specifications, and an obsidian-and-cream editorial aesthetic.",
    deliverables: [
      "Immersive Digital Flagship Platform",
      "Interactive Sound Simulation Experience",
      "Comprehensive Design System & Component Suite",
      "Modular Product Specification Architecture",
    ],
    technologiesUsed: [
      "Interactive Audio Experience",
      "Spatial Sound Simulation",
      "Responsive Flagship Platform",
      "Product Spec Architecture",
      "Tactile Micro-Interactions",
    ],
    tags: ["Digital Flagship", "Interactive Experience", "Sound Simulation"],
    images: {
      cover: "/images/projects/project-alpha-cover.webp",
      hero: "/images/projects/project-alpha-hero.webp",
      gallery: [
        "/images/projects/project-alpha-01.webp",
        "/images/projects/project-alpha-02.webp",
      ],
    },
    outcome:
      "[Benchmark Prototype: Sub-second page loads achieved with zero layout shift across mobile and desktop audits.]",
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
      "Rather than leaning into sterile laboratory tropes or clichéd green leaf motifs, we framed bio-fabricated textiles through the lens of high European fashion. We conducted an intensive typographic exploration combining high-contrast serif headlines with contemporary sans subtext, paired with tactile digital swatches that react dynamically to cursor movement like light glancing across luxury woven fibers.",
    solution:
      "Crafted an unconventional brand system pairing bold editorial typography with warm tactile backgrounds and a digital material swatch laboratory.",
    deliverables: [
      "Master Brand Identity & Guidelines",
      "Editorial Lookbook & Typography Architecture",
      "Interactive Digital Swatch Viewer",
      "Physical Packaging & Specimen Box Concepts",
    ],
    technologiesUsed: [
      "Luxury Brand Strategy",
      "Editorial Typography",
      "Interactive Material Swatches",
      "Lookbook & Guidelines",
      "Sustainable Packaging",
    ],
    tags: ["Brand Identity", "Luxury Repositioning", "Digital Experience"],
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
      "Researchers were spending dozens of hours manually synthesizing unstructured PDF filings with strict internal accuracy requirements and zero room for unverified information.",
    approach:
      "Instead of a generic floating chatbot window, we treated research analytics as an editorial workstation. We mapped the analyst's workflow: scanning sources, validating claims, and drafting synthesis. We placed interactive verifiable citation cards alongside synthesized summaries, eliminating black-box opacity and establishing complete analytical trust.",
    solution:
      "Designed and deployed a private knowledge assistant with a citations-first interface, verifiable source sidebars, and customizable summarization templates.",
    deliverables: [
      "Custom Knowledge Workstation Interface",
      "Automated Document Processing & Search System",
      "Verifiable Citation & Source Verification Tools",
      "Operational Privacy & Boundary Guidelines",
    ],
    technologiesUsed: [
      "Smart Document Synthesis",
      "Verifiable Citation Cards",
      "Enterprise Knowledge Search",
      "Custom Workstation UI",
      "Privacy-First Architecture",
    ],
    tags: ["Intelligent Workflow", "Knowledge System", "Operational Tooling"],
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
      "A single-page interactive product reveal site utilizing tactile blueprint interactions, 3D exploded hardware views, and sound design to build waitlist anticipation.",
    summary:
      "A single-page interactive product reveal site utilizing tactile blueprint interactions, 3D exploded hardware views, and sound design to build waitlist anticipation.",
    challenge:
      "Building feverish anticipation for a new modular hardware launch without prematurely revealing finalized production secrets.",
    approach:
      "We built an asymmetric, multi-sensory teaser campaign that engaged the tactile curiosity of hardware enthusiasts. Rather than a static countdown timer and generic email form, we designed an interactive blueprint dial where visitors manipulated hardware components to unlock schematic layers, acoustic feedback, and tiered early-bird reservation codes.",
    solution:
      "Built a cryptic, interactive digital puzzle destination where visitors manipulated mechanical blueprints and sound dials to unlock teaser clips and pre-registration access.",
    deliverables: [
      "Interactive Launch Destination",
      "Interactive 3D Hardware View Component",
      "Sound Design & Tactile Audio Cues",
      "High-Traffic Waitlist Registration System",
    ],
    technologiesUsed: [
      "Interactive Product Reveal",
      "3D Component Blueprint",
      "Tactile Audio Cues",
      "High-Converting Waitlist",
      "Launch Campaign Strategy",
    ],
    tags: ["Product Launch", "Interactive Teaser", "Audience Waitlist"],
    images: {
      cover: "/images/projects/project-delta-cover.webp",
      hero: "/images/projects/project-delta-hero.webp",
      gallery: ["/images/projects/project-delta-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Handled simulated surge traffic smoothly during stress-testing with zero downtime.]",
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
      "An avant-garde digital portfolio for a spatial design practice featuring continuous horizontal navigation, architectural grid overlays, and blueprint inspection tools.",
    summary:
      "An avant-garde digital portfolio for a spatial design practice featuring continuous horizontal navigation, architectural grid overlays, and blueprint inspection tools.",
    challenge:
      "Traditional architectural websites are rigid, text-heavy grids that fail to capture the physical three-dimensional presence of built space.",
    approach:
      "We translated physical architectural mass into digital space through continuous horizontal flow and structural grid lines. By mapping architectural floorplans to responsive interactive viewports and providing interactive scale rulers, the experience conveys spatial depth, light orientation, and material honesty across every screen size.",
    solution:
      "Crafted an interactive horizontal portfolio with fluid kinetic transitions, architectural hairline grids, and high-resolution blueprint overlays.",
    deliverables: [
      "Interactive Horizontal Portfolio Platform",
      "Blueprint & Scale Inspection Tool",
      "Minimalist Editorial Typography Hierarchy",
      "High-Resolution Image Curation System",
    ],
    technologiesUsed: [
      "Continuous Spatial Navigation",
      "Interactive Blueprint Inspection",
      "Architectural Image Curation",
      "Minimalist Visual Identity",
      "Responsive Portfolio",
    ],
    tags: ["Architecture Platform", "Visual Portfolio", "Editorial Layout"],
    images: {
      cover: "/images/projects/project-epsilon-cover.webp",
      hero: "/images/projects/project-epsilon-hero.webp",
      gallery: ["/images/projects/project-epsilon-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Seamless horizontal pan navigation running smoothly with full touch and trackpad momentum support.]",
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
      "A dynamic brand identity and interactive specimen playground for an independent experimental typography foundry.",
    summary:
      "A dynamic brand identity and interactive specimen playground for an independent experimental typography foundry.",
    challenge:
      "Displaying dynamic typography axes interactively in the browser without lag or visual stutter.",
    approach:
      "We inverted the traditional static specimen PDF by building a live typographic laboratory. Visitors manipulate typography parameters—weight, optical size, slant, and ink traps—in real-time against high-contrast monochrome and terracotta backdrops, previewing instant responsiveness.",
    solution:
      "Designed a bold, ink-and-cream visual identity paired with a live interactive typeface tester allowing real-time typographic manipulation.",
    deliverables: [
      "Visual Identity System & Type Specimens",
      "Interactive Typeface Parameter Tester",
      "Specimen Poster Print & Digital Assets",
      "Licensing Flow & Checkout Prototype",
    ],
    technologiesUsed: [
      "Interactive Typeface Tester",
      "Foundry Brand Identity",
      "Commercial Licensing Flow",
      "Specimen Poster Design",
      "Digital Asset Kit",
    ],
    tags: ["Typeface Experience", "Brand Identity", "Interactive Testing"],
    images: {
      cover: "/images/projects/project-zeta-cover.webp",
      hero: "/images/projects/project-zeta-hero.webp",
      gallery: ["/images/projects/project-zeta-01.webp"],
    },
    outcome:
      "[Benchmark Prototype: Instant zero-latency interactive manipulation running smoothly across mobile touch screens.]",
    cardColor: "cream",
    badge: "Speculative Concept",
    isConcept: true,
    conceptNote: "Studio Speculative Project",
    gridSpan: "normal",
  },
];

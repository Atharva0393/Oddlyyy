import { FaqItem } from "@/types";

export const faqCategories = [
  "General",
  "Services & Process",
  "Pricing & Engagements",
  "Quality & Standards",
] as const;

export const faqsData: FaqItem[] = [
  // General
  {
    id: "faq-1",
    category: "General",
    question: "What does 'Be the exception' mean for your clients?",
    answer:
      "Most digital agencies design to fit comfortably into current aesthetic trends. Oddlyyy designs to deliberately deviate—creating high-contrast, memorable digital identities and web platforms that command market attention while maintaining pristine commercial execution.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Where is Oddlyyy located and how do you work with remote clients?",
    answer:
      "We operate as a remote-first creative studio with collaborators across global hubs. We collaborate synchronously via focused milestone sprints and asynchronously via collaborative tools like shared project hubs, video walkthroughs, and direct messaging.",
  },

  // Services & Process
  {
    id: "faq-3",
    category: "Services & Process",
    question: "How do we get started on a project together?",
    answer:
      "Every project begins with an initial inquiry via our contact form. We review your goals and schedule a 30-minute discovery conversation to assess mutual fit, scope, and target timelines before presenting a focused proposal.",
  },
  {
    id: "faq-4",
    category: "Services & Process",
    question: "What is your typical project timeline?",
    answer:
      "Brand identity engagements typically run 4 to 8 weeks. Custom web platforms and digital experiences generally span 6 to 12 weeks depending on interactive features and operational requirements. Focused Odd Job sprints run 1 to 2 weeks.",
  },
  {
    id: "faq-5",
    category: "Services & Process",
    question: "Will we work directly with the creators or through an account manager?",
    answer:
      "You collaborate directly with the senior creators and strategists leading your project. We do not use intermediary account managers, ensuring clear communication and fast turnaround.",
  },

  // Pricing & Engagements
  {
    id: "faq-6",
    category: "Pricing & Engagements",
    question: "How are your projects scoped and priced?",
    answer:
      "We operate primarily on fixed-scope, milestone-based project engagements with clear deliverables and transparent payment schedules. For ongoing initiatives, we offer dedicated quarterly advisory retainers.",
  },
  {
    id: "faq-7",
    category: "Pricing & Engagements",
    question: "What size clients do you typically partner with?",
    answer:
      "We work with ambitious founders launching new ventures, established companies undergoing strategic repositioning, and growing businesses seeking high-impact digital experiences.",
  },

  // Quality & Standards
  {
    id: "faq-8",
    category: "Quality & Standards",
    question: "How do you ensure our website or digital solution is fast and reliable?",
    answer:
      "We build with modern, high-performance standards prioritizing instantaneous page load speeds, rock-solid security, effortless mobile responsiveness, and clean maintainability so your business operates without technical headaches.",
  },
  {
    id: "faq-9",
    category: "Quality & Standards",
    question: "Are your websites accessible and compliant with universal standards?",
    answer:
      "Yes. Every digital experience we build is designed for universal usability—ensuring seamless navigation, high readability, and effortless accessibility for all users across every modern device.",
  },
];

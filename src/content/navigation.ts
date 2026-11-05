import { NavigationConfig, NavItem } from "@/types";

export const headerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavCta = {
  label: "Let's make something odd",
  href: "/contact",
};

export const footerNavigation: NavigationConfig["footerNav"] = [
  {
    title: "Agency Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Services Overview", href: "/services" },
      { label: "Selected Work", href: "/work" },
      { label: "About Oddlyyy", href: "/about" },
      { label: "Project Inquiry", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Digital & Development", href: "/services/digital-platforms" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Branding & Creative", href: "/services/brand-identity" },
      { label: "Creative Direction", href: "/services/creative-direction" },
      { label: "Marketing & Content", href: "/services/content-campaigns" },
      { label: "The Odd Jobs", href: "/services/the-odd-jobs" },
    ],
  },
  {
    title: "Internal & Review",
    links: [
      { label: "Design System Playground", href: "/playground" },
      { label: "Confidential Style Guide", href: "/design-system" },
    ],
  },
];

export const navigationConfig: NavigationConfig = {
  headerNav: headerNavItems,
  primaryCta: primaryNavCta,
  footerNav: footerNavigation,
};

// Aliases for backwards compatibility with existing layout components
export const navItems = headerNavItems;


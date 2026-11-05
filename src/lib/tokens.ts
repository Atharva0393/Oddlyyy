/**
 * Oddlyyy Official Design Tokens
 * Brand Tagline: "Be the exception."
 */

export const colors = {
  // Primary Background
  cream: {
    DEFAULT: "#F4E4DC",
    50: "#FAF3EE",
    100: "#F4E4DC",
    200: "#EAD4C7",
    300: "#DFC3B3",
  },
  // Primary Dark (Typography & Dark Sections)
  ink: {
    DEFAULT: "#202028",
    pure: "#15151B",
    800: "#2A2A35",
    300: "#60606B",
    200: "#9898A0",
    100: "#C8C8CC",
    50: "#E8E8EA",
  },
  // Primary Accent (Buttons & Highlights)
  terracotta: {
    DEFAULT: "#A04C34",
    hover: "#8B3E29",
    active: "#723120",
    light: "#B85E45",
    muted: "rgba(160, 76, 52, 0.12)",
  },
  // Secondary Accent (Cards, Highlights)
  lavender: {
    DEFAULT: "#E4E0FC",
    hover: "#D6D0F9",
    tint: "rgba(228, 224, 252, 0.4)",
    dark: "#685F96",
  },
  // Secondary Background (Cards, Section variations)
  mint: {
    DEFAULT: "#E4F0E8",
    hover: "#D5E7DB",
    tint: "rgba(228, 240, 232, 0.5)",
    dark: "#52755E",
  },
} as const;

export const typography = {
  fonts: {
    heading: "var(--font-space-grotesk)",
    body: "var(--font-dm-sans)",
    handwriting: "var(--font-caveat)",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

export const radii = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  xl: "20px",
  "2xl": "28px",
  "3xl": "36px",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 2px 8px -2px rgba(32, 32, 40, 0.06)",
  md: "0 6px 20px -4px rgba(32, 32, 40, 0.08)",
  lg: "0 16px 36px -8px rgba(32, 32, 40, 0.12)",
  offsetSm: "2px 2px 0px #202028",
  offsetMd: "4px 4px 0px #202028",
  offsetLg: "6px 6px 0px #202028",
  offsetTerracotta: "4px 4px 0px #A04C34",
} as const;

export const containers = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  agency: "1360px",
  "2xl": "1440px",
} as const;

export const breakpoints = {
  xs: "420px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;


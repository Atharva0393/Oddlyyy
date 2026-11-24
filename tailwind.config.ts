import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F6F0",
          warm: "#F2EDE3",
        },
        notebook: {
          yellow: "#FFD84D",
          pink: "#F3B5CB",
          mint: "#A9DCC4",
          blue: "#8299E8",
          lavender: "#D6D0F9",
        },
        yellow: {
          DEFAULT: "#FFD84D",
          light: "#FFE98A",
          dark: "#E6C239",
        },
        pink: {
          DEFAULT: "#F3B5CB",
          light: "#F9D5E2",
          dark: "#D995AE",
        },
        blue: {
          DEFAULT: "#8299E8",
          light: "#A9BAF0",
          dark: "#657ECF",
        },
        cream: {
          DEFAULT: "#F7F6F0",
          50: "#FAF7F2",
          100: "#F7F6F0", // Primary background
          200: "#F2EDE3",
          300: "#E8E0D2",
        },
        ink: {
          DEFAULT: "#222126", // Primary dark / typography
          50: "#F0EFEB",
          100: "#D3D1D6",
          200: "#A2A0A8",
          300: "#5E5D66",
          800: "#2B2A30",
          900: "#222126",
          pure: "#161519",
        },
        terracotta: {
          DEFAULT: "#A94F35", // Primary accent
          hover: "#93432C",
          active: "#7A3521",
          light: "#C1654B",
          muted: "rgba(169, 79, 53, 0.12)",
        },
        lavender: {
          DEFAULT: "#D6D0F9", // Secondary accent
          hover: "#C3BCF5",
          tint: "rgba(214, 208, 249, 0.4)",
          dark: "#5E5594",
        },
        mint: {
          DEFAULT: "#A9DCC4", // Secondary background
          hover: "#95D0B4",
          tint: "rgba(169, 220, 196, 0.4)",
          dark: "#3B6E55",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
      },
      fontFamily: {
        display: ["'Recoleta'", "var(--font-display)", "serif"],
        primary: ["'Berthold'", "var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "cursive", "Brush Script MT", "sans-serif"],
        serif: ["'Recoleta'", "var(--font-serif)", "serif"],
        recoleta: ["'Recoleta'", "var(--font-display)", "serif"],
        berthold: ["'Berthold'", "var(--font-primary)", "sans-serif"],
        script: ["var(--font-secondary)", "cursive", "Brush Script MT", "sans-serif"],
        accent: ["var(--font-accent)", "Caveat", "cursive"],
        retro: ["'Yellowtail'", "var(--font-accent)", "cursive"],
        // Compatibility aliases to seamlessly upgrade existing components
        sans: ["'Berthold'", "var(--font-primary)", "system-ui", "sans-serif"],
        heading: ["'Berthold'", "var(--font-primary)", "sans-serif"],
        handwriting: ["var(--font-accent)", "cursive"],
        welcome: ["var(--font-welcome)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3.5rem, 8vw, 7.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.5vw, 4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
        "heading-1": [
          "clamp(1.85rem, 3.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "heading-2": [
          "clamp(1.5rem, 2.5vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "heading-3": [
          "clamp(1.25rem, 2vw, 1.75rem)",
          { lineHeight: "1.25", letterSpacing: "-0.015em" },
        ],
        "heading-4": [
          "1.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.55" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.04em" },
        ],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "36px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 2px 8px -2px rgba(32, 32, 40, 0.06)",
        md: "0 6px 20px -4px rgba(32, 32, 40, 0.08)",
        lg: "0 16px 36px -8px rgba(32, 32, 40, 0.12)",
        "offset-sm": "2px 2px 0px #202028",
        "offset-md": "4px 4px 0px #202028",
        "offset-lg": "6px 6px 0px #202028",
        "offset-terracotta": "4px 4px 0px #A04C34",
      },
      maxWidth: {
        agency: "1360px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;


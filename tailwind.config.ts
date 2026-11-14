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
        cream: {
          DEFAULT: "#F4E4DC",
          50: "#FAF3EE",
          100: "#F4E4DC", // Primary background
          200: "#EAD4C7",
          300: "#DFC3B3",
        },
        ink: {
          DEFAULT: "#202028", // Primary dark / typography
          50: "#E8E8EA",
          100: "#C8C8CC",
          200: "#9898A0",
          300: "#60606B",
          800: "#2A2A35",
          900: "#202028",
          pure: "#15151B",
        },
        terracotta: {
          DEFAULT: "#A04C34", // Primary accent
          hover: "#8B3E29",
          active: "#723120",
          light: "#B85E45",
          muted: "rgba(160, 76, 52, 0.12)",
        },
        lavender: {
          DEFAULT: "#E4E0FC", // Secondary accent
          hover: "#D6D0F9",
          tint: "rgba(228, 224, 252, 0.4)",
          dark: "#685F96",
        },
        mint: {
          DEFAULT: "#E4F0E8", // Secondary background
          hover: "#D5E7DB",
          tint: "rgba(228, 240, 232, 0.5)",
          dark: "#52755E",
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
        primary: ["var(--font-primary)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        secondary: ["var(--font-secondary)", "cursive", "Brush Script MT", "Inter", "sans-serif"],
        serif: ["'Instrument Serif'", "'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        script: ["var(--font-secondary)", "cursive", "Brush Script MT", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Caveat", "cursive"],
        retro: ["'Yellowtail'", "var(--font-accent)", "cursive"],
        // Compatibility aliases to seamlessly upgrade existing components
        sans: ["var(--font-primary)", "system-ui", "sans-serif"],
        heading: ["var(--font-primary)", "sans-serif"],
        handwriting: ["var(--font-accent)", "cursive"],
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


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3CA8F0",
          "primary-light": "#34BDEC",
          "primary-dark": "#4464AC",
          secondary: "#073B5E",
          "secondary-alt": "#2A3D69",
        },
        accent: {
          teal: "#0FA3B1",
          "teal-light": "#E4F6F7",
          gold: "#C8962E",
          "gold-light": "#FDF4E3",
          coral: "#E86F51",
          "coral-light": "#FDEAE5",
        },
        surface: {
          body: "var(--bg-body)",
          card: "var(--bg-card)",
          section: "var(--bg-section)",
          "section-alt": "var(--bg-section-alt)",
        },
        ds: {
          "bg-card": "var(--ds-bg-card)",
          "bg-card-hover": "var(--ds-bg-card-hover)",
          border: "var(--ds-border)",
          "border-hover": "var(--ds-border-hover)",
          text: "var(--ds-text)",
          "text-body": "var(--ds-text-body)",
          "text-muted": "var(--ds-text-muted)",
          "text-faint": "var(--ds-text-faint)",
          divider: "var(--ds-divider)",
          "glass-bg": "var(--ds-glass-bg)",
          "glass-border": "var(--ds-glass-border)",
        },
        content: {
          heading: "var(--text-heading)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          light: "var(--border-light)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 2px 8px var(--shadow-color)",
        "card-hover": "0 8px 24px var(--shadow-color-hover)",
        header: "0 2px 20px var(--shadow-color)",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;

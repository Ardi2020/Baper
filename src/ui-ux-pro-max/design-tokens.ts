/**
 * Baper Design System — Design Tokens
 * Dark Mode Default with Crimson/Gold accents
 */

export const colors = {
  // Backgrounds
  bg: {
    primary: "#0a0a0a",
    secondary: "#111111",
    tertiary: "#1a1a1a",
    card: "#141414",
  },

  // Foregrounds / Text
  fg: {
    primary: "#ededed",
    secondary: "#a0a0a0",
    muted: "#666666",
  },

  // Accents
  accent: {
    crimson: "#DC143C",
    crimsonLight: "#FF2D55",
    gold: "#FFD700",
    goldLight: "#FFE44D",
  },

  // Borders
  border: {
    subtle: "#222222",
    default: "#333333",
    strong: "#555555",
  },
} as const;

export const typography = {
  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  },
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
} as const;

export const spacing = {
  section: "6rem",
  container: "1280px",
} as const;

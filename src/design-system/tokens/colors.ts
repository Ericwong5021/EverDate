/**
 * EverDate Design System - Color Tokens
 *
 * Color palette inspired by romantic and elegant themes:
 * - Wine Red: Passion, elegance, celebration
 * - Rose Gold: Romance, warmth, luxury
 * - Cream White: Purity, softness, elegance
 */

export const colors = {
  // Primary Colors - Wine Red
  wine: {
    50: "#fef2f2",
    100: "#fde6e6",
    200: "#fbd0d0",
    300: "#f7a8a8",
    400: "#f07070",
    500: "#e63e3e",
    600: "#b91c1c",
    700: "#991b1b",
    800: "#7f1d1d",
    900: "#6b1d1d",
    950: "#3b0d0d",
  },

  // Secondary Colors - Rose Gold
  roseGold: {
    50: "#fdf6f3",
    100: "#fbe8e0",
    200: "#f7d5c7",
    300: "#f2b8a3",
    400: "#ea9479",
    500: "#e07456",
    600: "#cd5a3a",
    700: "#b7482c",
    800: "#963c26",
    900: "#7c3424",
    950: "#431910",
  },

  // Neutral Colors - Cream White
  cream: {
    50: "#fefdfb",
    100: "#fdf9f3",
    200: "#fbf3e8",
    300: "#f7e8d5",
    400: "#f2d8bc",
    500: "#ebc5a0",
    600: "#dea87a",
    700: "#c98a5c",
    800: "#a86f4c",
    900: "#8a5b40",
    950: "#492d20",
  },

  // Accent Colors
  blush: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  // Success Colors
  sage: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  // Neutral Grays
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
} as const;

export type ColorToken = typeof colors;

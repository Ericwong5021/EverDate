/**
 * EverDate Design System — Typography Tokens
 *
 * Fonts:
 * - Title: Cormorant Garamond (English) / Noto Serif SC (Chinese)
 * - Body: Noto Serif SC / Source Han Serif SC / LXGW WenKai
 * - UI: Inter / Noto Sans SC
 */

export const typography = {
  fontFamily: {
    title: '"Cormorant Garamond", "Noto Serif SC", Georgia, serif',
    body: '"Noto Serif SC", "Source Han Serif SC", "LXGW WenKai", Georgia, serif',
    ui: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  fontSize: {
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
    "7xl": "4.5rem",
  },

  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    tight: "1.2",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "1.7",
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

export type TypographyToken = typeof typography;

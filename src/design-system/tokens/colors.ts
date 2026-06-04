/**
 * EverDate Design System — Color Tokens
 *
 * Color palette inspired by romantic and elegant themes:
 * - Deep Wine Red (#5A1F2B): Passion, elegance, ceremony
 * - Rose Gold (#C9A46A): Romance, warmth, luxury
 * - Cream White (#FFF8F1): Purity, softness, elegance
 */

export const colors = {
  /** Deep Wine Red — primary accent, headings, CTA buttons */
  wine: {
    50: "#fdf2f4",
    100: "#fce4e8",
    200: "#f9ccd4",
    300: "#f4a3b3",
    400: "#ec6f8e",
    500: "#e0436a",
    600: "#cc2255",
    700: "#ab1847",
    800: "#8f1740",
    900: "#5A1F2B",
    950: "#3a0d19",
  },

  /** Rose Gold — borders, icons, decorative lines, price tags */
  gold: {
    50: "#fdf9f1",
    100: "#faf0dc",
    200: "#f4deb6",
    300: "#ecc887",
    400: "#C9A46A",
    500: "#bf8d4a",
    600: "#ad763a",
    700: "#915d32",
    800: "#774b2f",
    900: "#633f2a",
    950: "#382015",
  },

  /** Cream — backgrounds, cards, soft surfaces */
  cream: {
    50: "#FFF8F1",
    100: "#F4E8DA",
    200: "#EDD9C3",
    300: "#E8C7C8",
    400: "#d4b8a0",
    500: "#c4a489",
    600: "#b08d70",
    700: "#93745c",
    800: "#7a614f",
    900: "#2B1A17",
  },
} as const;

export type ColorToken = typeof colors;

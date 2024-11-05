/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Colors
      colors: {
        neutral: {
          100: "#FFFFFF", // Lightest
          200: "#F7F7F7",
          300: "#EBECEE",
          400: "#DEE1E5",
          500: "#AAAAAA", // Mid-point
          600: "#808080",
          700: "#555555",
          800: "#333333",
        },

        primary: "#633D79",

        // Transparent Color Overlays
        overlay: {
          "light-neutral": "rgba(255, 255, 255, 0.5)", // Subtle, barely visible
          "medium-neutral": "rgba(255, 255, 255, 0.75)", // Slight dimming
          "heavy-neutral": "rgba(0, 0, 0, 0.12)", // Noticeable overlay
        },
      },

      // Fonts
      fontFamily: {
        sans: ["Apfel Grotezk", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Body sizes
        xs: ["0.75rem", { lineHeight: "1.4" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.5" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.6" }], // 18px

        // Heading sizes
        h6: ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }], // 20px
        h5: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }], // 24px
        h4: ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }], // 28px
        h3: ["2rem", { lineHeight: "1.3", fontWeight: "500" }], // 32px
        h2: ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }], // 40px
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "600" }], // 48px

        // Heading sizes - mobile
        "h1-mobile": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h2-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h3-mobile": ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }],
        "h4-mobile": ["1.5rem", { lineHeight: "1.3", fontWeight: "500" }],
        "h5-mobile": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
        "h6-mobile": ["1.125rem", { lineHeight: "1.4", fontWeight: "650" }],

        // Heading sizes - tablet
        "h1-tablet": ["3rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h2-tablet": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h3-tablet": ["1.875rem", { lineHeight: "1.3", fontWeight: "500" }],
        "h4-tablet": ["1.625rem", { lineHeight: "1.3", fontWeight: "500" }],
        "h5-tablet": ["1.375rem", { lineHeight: "1.4", fontWeight: "500" }],
        "h6-tablet": ["1.125rem", { lineHeight: "1.4", fontWeight: "500" }],
      },

      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
      },

      lineHeight: {
        tighter: "1.2",
        tight: "1.3",
        normal: "1.5",
        relaxed: "1.6",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    width: {
      full: "100%",
      "container-xl": "1600px",
      "container-l": "1440px",
      "container-md": "1360px",
      "container-sm": "1280px",
      "container-xs": "1080px",
    },

    transitionDuration: {
      "350": "350ms",
      "650": "650ms",
    },
  },
  plugins: [
    // Optional: Background Blur Plugin
    function ({ addUtilities }) {
      const blurUtilities = {
        ".backdrop-blur-light": {
          "backdrop-filter": "blur(4px)",
          "-webkit-backdrop-filter": "blur(4px)",
        },
        ".backdrop-blur-medium": {
          "backdrop-filter": "blur(8px)",
          "-webkit-backdrop-filter": "blur(8px)",
        },
        ".backdrop-blur-heavy": {
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
        },
        ".backdrop-blur-extreme": {
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
        },
      };
      addUtilities(blurUtilities);
    },
  ],
};

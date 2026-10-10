import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral palette - luxury grayscale
        neutral: {
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
          950: "rgb(var(--color-neutral-950) / <alpha-value>)",
        },
        // Accent palette - refined gold/bronze
        accent: {
          50: "rgb(var(--color-accent-50) / <alpha-value>)",
          100: "rgb(var(--color-accent-100) / <alpha-value>)",
          200: "rgb(var(--color-accent-200) / <alpha-value>)",
          300: "rgb(var(--color-accent-300) / <alpha-value>)",
          400: "rgb(var(--color-accent-400) / <alpha-value>)",
          500: "rgb(var(--color-accent-500) / <alpha-value>)",
          600: "rgb(var(--color-accent-600) / <alpha-value>)",
          700: "rgb(var(--color-accent-700) / <alpha-value>)",
          900: "rgb(var(--color-accent-900) / <alpha-value>)",
        },
        // Surface colors
        surface: {
          bg: "rgb(var(--color-surface-bg) / <alpha-value>)",
          elevated: "rgb(var(--color-surface-elevated) / <alpha-value>)",
          border: "rgb(var(--color-surface-border) / <alpha-value>)",
        },
        // Semantic colors
        success: "rgb(var(--color-success) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
      },
      fontSize: {
        // Typography scale
        "xs": ["var(--font-size-xs)", { lineHeight: "var(--line-height-xs)" }],
        "sm": ["var(--font-size-sm)", { lineHeight: "var(--line-height-sm)" }],
        "base": ["var(--font-size-base)", { lineHeight: "var(--line-height-base)" }],
        "lg": ["var(--font-size-lg)", { lineHeight: "var(--line-height-lg)" }],
        "xl": ["var(--font-size-xl)", { lineHeight: "var(--line-height-xl)" }],
        "2xl": ["var(--font-size-2xl)", { lineHeight: "var(--line-height-2xl)" }],
        "3xl": ["var(--font-size-3xl)", { lineHeight: "var(--line-height-3xl)" }],
        "4xl": ["var(--font-size-4xl)", { lineHeight: "var(--line-height-4xl)" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      spacing: {
        // 8px base scale
        0: "0",
        px: "1px",
        0.5: "var(--spacing-0-5)",
        1: "var(--spacing-1)",
        1.5: "var(--spacing-1-5)",
        2: "var(--spacing-2)",
        2.5: "var(--spacing-2-5)",
        3: "var(--spacing-3)",
        3.5: "var(--spacing-3-5)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
        6: "var(--spacing-6)",
        7: "var(--spacing-7)",
        8: "var(--spacing-8)",
        9: "var(--spacing-9)",
        10: "var(--spacing-10)",
        12: "var(--spacing-12)",
        14: "var(--spacing-14)",
        16: "var(--spacing-16)",
        20: "var(--spacing-20)",
        24: "var(--spacing-24)",
        28: "var(--spacing-28)",
        32: "var(--spacing-32)",
        36: "var(--spacing-36)",
        40: "var(--spacing-40)",
        44: "var(--spacing-44)",
        48: "var(--spacing-48)",
        52: "var(--spacing-52)",
        56: "var(--spacing-56)",
        60: "var(--spacing-60)",
        64: "var(--spacing-64)",
        72: "var(--spacing-72)",
        80: "var(--spacing-80)",
        96: "var(--spacing-96)",
      },
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        container: "var(--container-max-width)",
        content: "var(--container-content-width)",
      },
    },
  },
  plugins: [],
};

export default config;

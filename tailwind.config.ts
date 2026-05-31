import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    // Comprehensive breakpoints covering every device class.
    //   xs    →  Small phones (iPhone SE, older Android)
    //   sm    →  Standard phones
    //   md    →  Large phones / portrait tablets
    //   lg    →  Tablets landscape / small laptops
    //   xl    →  Laptops / standard desktops
    //   2xl   →  Large desktops
    //   3xl   →  Ultra-wide / 2K monitors
    //   4xl   →  4K displays / large TVs
    //   tv    →  Living-room TVs (10-foot UI, larger tap targets)
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      // Device capability queries for refining interactions
      touch: { raw: '(hover: none) and (pointer: coarse)' },
      stylus: { raw: '(hover: none) and (pointer: fine)' },
      mouse: { raw: '(hover: hover) and (pointer: fine)' },
      tv: { raw: '(min-width: 1920px) and (hover: none)' },
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
      short: { raw: '(max-height: 700px)' },
      tall: { raw: '(min-height: 900px)' },
      'reduce-motion': { raw: '(prefers-reduced-motion: reduce)' },
    },
    extend: {
      colors: {
        // ── Aurastic Brand Colors (Official Brand Guidelines) ──
        // Background scale
        void:    '#07050D',   // Aurastic Deep -80% shade
        deep:    '#100B1B',   // Aurastic Deep -60%
        surface: '#181028',   // Aurastic Deep -40%
        card:    '#201636',   // Aurastic Deep -20%
        raised:  '#281C44',   // Aurastic Deep BASE

        // Aurastic Primary palette
        primary: {
          DEFAULT: '#4E2E88',  // Aurastic Primary BASE
          20:  '#71579F',      // Primary -20%
          40:  '#3E246C',      // Primary shade -20%
          60:  '#2E1B51',      // Primary shade -40%
          80:  '#1F1236',      // Primary shade -60%
          light20: '#9481B7',  // Primary tint +40%
          light40: '#B8ABCF',  // Primary tint +60%
          light80: '#DBD5E7',  // Primary tint +80%
        },

        // Aurastic Secondary
        secondary: '#3A2E72',

        // Tertiary
        tertiary: '#6C59E2',

        // AI palette
        ai: {
          deep:    '#400898',
          primary: '#5525E8',
          glow:    '#7700E0',
        },

        // Light purple accent
        'light-purple': '#B58FFF',

        // Violet scale (kept for Tailwind utility classes)
        violet: {
          900: '#2E1B51',
          700: '#4E2E88',
          500: '#6C59E2',
          400: '#997CF1',
          300: '#BBA7F5',
          200: '#DDD3FA',
        },

        // Magenta / pink accent
        magenta: '#B58FFF',   // Light Purple from brand palette
        glow:    '#7700E0',   // AI Glow

        // Text scale
        ink:          '#FFFFFF',
        'ink-muted':  '#B58FFF',  // Light Purple
        'ink-faint':  '#71579F',  // Primary -20%
      },
      fontFamily: {
        // Brand-mapped families (Aurastic identity system)
        display:    ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'Arial Narrow', 'sans-serif'],
        bebas:      ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        bankgothic: ['var(--font-bankgothic)', 'Trade Gothic', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        tagline:    ['var(--font-bankgothic)', 'Trade Gothic', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        rubik:      ['var(--font-rubik)', 'Inter', 'system-ui', 'sans-serif'],
        sans:       ['var(--font-rubik)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        exo:        ['var(--font-exo)', 'Inter', 'system-ui', 'sans-serif'],
        num:        ['var(--font-exo)', 'Inter', 'system-ui', 'sans-serif'],
        biko:       ['var(--font-biko)', 'Manrope', 'system-ui', 'sans-serif'],
        cerena:     ['var(--font-cerena)', 'Cinzel', 'Times New Roman', 'serif'],
        slant:      ['var(--font-slant)', 'Bebas Neue', 'Impact', 'sans-serif'],
        serif:      ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      spacing: {
        'safe-t': 'env(safe-area-inset-top)',
        'safe-b': 'env(safe-area-inset-bottom)',
        'safe-l': 'env(safe-area-inset-left)',
        'safe-r': 'env(safe-area-inset-right)',
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1536px',
        'container-3xl': '1800px',
        'container-4xl': '2200px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      animation: {
        beams: 'beams 22s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        eq: 'eq 1.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        beams: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        },
        eq: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

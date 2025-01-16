import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    keyframes: {
      moveToPosition: {
        '0%': {
          transform: 'translate(0, 0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translate(var(--tw-translate-x), var(--tw-translate-y))',
        },
      },
      moveUp: {
        '0%': {
          transform: 'translateY(50px)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
      fadeInScale: {
        '0%': {
          opacity: '0',
          transform: 'scale(0.8)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      slideInFromLeft: {
        '0%': {
          transform: 'translateX(-50px)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      slideInFromBottom: {
        '0%': {
          transform: 'translateY(20px)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    },
    animation: {
      'move-bg': 'moveToPosition 1.5s ease-out forwards',
      'move-up': 'moveUp 1s ease-out forwards',
      'fade-in-scale': 'fadeInScale 0.6s ease-out forwards',
      'slide-in-from-left': 'slideInFromLeft 0.6s ease-out forwards',
      'slide-in-from-bottom': 'slideInFromBottom 1s ease-out forwards',
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;

import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: '1150px',
      geist: '1220px',
      full: '1448px',
    },
    extend: {
      maxWidth: {
        '5xl': '67.5rem',
        '6xl': '75rem',
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        h1: ['2.5rem', '3rem'],
        paragraph: '0.8125rem',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        border: 'hsl(var(--ds-gray-alpha-400))',
        'ui-background': 'hsl(var(--ds-background-100))',
        'ui-disabled-foreground': 'hsl(var(--ds-gray-800))',
        'ui-item-foreground-hover': 'hsl(var(--ds-gray-1000))',
        'ui-item-background-hover': 'hsl(var(--ds-gray-100))',
        'button-invert-hover': 'hsl(var(--button-invert-hover-dark))',
        'button-invert-disabled': 'hsl(var(--button-invert-disabled-dark))',
        foreground: {
          DEFAULT: 'hsl(var(--ds-gray-1000))',
        },
        background: {
          100: 'hsl(var(--ds-background-100))',
          200: 'hsl(var(--ds-background-200))',
        },
        accent: {
          100: 'hsl(var(--ds-accent-100))',
          200: 'hsl(var(--ds-accent-200))',
          300: 'hsl(var(--ds-accent-300))',
          400: 'hsl(var(--ds-accent-400))',
          500: 'hsl(var(--ds-accent-500))',
          600: 'hsl(var(--ds-accent-600))',
          700: 'hsl(var(--ds-accent-700))',
          800: 'hsl(var(--ds-accent-800))',
        },
        gray: {
          100: 'hsl(var(--ds-gray-100))',
          200: 'hsl(var(--ds-gray-200))',
          300: 'hsl(var(--ds-gray-300))',
          400: 'hsl(var(--ds-gray-400))',
          500: 'hsl(var(--ds-gray-500))',
          600: 'hsl(var(--ds-gray-600))',
          700: 'hsl(var(--ds-gray-700))',
          800: 'hsl(var(--ds-gray-800))',
          900: 'hsl(var(--ds-gray-900))',
          1000: 'hsl(var(--ds-gray-1000))',
        },
        'gray-alpha': {
          100: 'hsl(var(--ds-gray-alpha-100))',
          200: 'hsl(var(--ds-gray-alpha-200))',
          300: 'hsl(var(--ds-gray-alpha-300))',
          400: 'hsl(var(--ds-gray-alpha-400))',
          500: 'hsl(var(--ds-gray-alpha-500))',
          600: 'hsl(var(--ds-gray-alpha-600))',
          700: 'hsl(var(--ds-gray-alpha-700))',
          800: 'hsl(var(--ds-gray-alpha-800))',
          900: 'hsl(var(--ds-gray-alpha-900))',
          1000: 'hsl(var(--ds-gray-alpha-1000))',
        },
        blue: {
          100: 'hsl(var(--ds-blue-100))',
          200: 'hsl(var(--ds-blue-200))',
          300: 'hsl(var(--ds-blue-300))',
          400: 'hsl(var(--ds-blue-400))',
          500: 'hsl(var(--ds-blue-500))',
          600: 'hsl(var(--ds-blue-600))',
          700: 'hsl(var(--ds-blue-700))',
          800: 'hsl(var(--ds-blue-800))',
          900: 'hsl(var(--ds-blue-900))',
          1000: 'hsl(var(--ds-blue-1000))',
        },
        red: {
          100: 'hsl(var(--ds-red-100))',
          200: 'hsl(var(--ds-red-200))',
          300: 'hsl(var(--ds-red-300))',
          400: 'hsl(var(--ds-red-400))',
          500: 'hsl(var(--ds-red-500))',
          600: 'hsl(var(--ds-red-600))',
          700: 'hsl(var(--ds-red-700))',
          800: 'hsl(var(--ds-red-800))',
          900: 'hsl(var(--ds-red-900))',
          1000: 'hsl(var(--ds-red-1000))',
        },
        amber: {
          100: 'hsl(var(--ds-amber-100))',
          200: 'hsl(var(--ds-amber-200))',
          300: 'hsl(var(--ds-amber-300))',
          400: 'hsl(var(--ds-amber-400))',
          500: 'hsl(var(--ds-amber-500))',
          600: 'hsl(var(--ds-amber-600))',
          700: 'hsl(var(--ds-amber-700))',
          800: 'hsl(var(--ds-amber-800))',
          900: 'hsl(var(--ds-amber-900))',
          1000: 'hsl(var(--ds-amber-1000))',
        },
        green: {
          100: 'hsl(var(--ds-green-100))',
          200: 'hsl(var(--ds-green-200))',
          300: 'hsl(var(--ds-green-300))',
          400: 'hsl(var(--ds-green-400))',
          500: 'hsl(var(--ds-green-500))',
          600: 'hsl(var(--ds-green-600))',
          700: 'hsl(var(--ds-green-700))',
          800: 'hsl(var(--ds-green-800))',
          900: 'hsl(var(--ds-green-900))',
          1000: 'hsl(var(--ds-green-1000))',
        },
        teal: {
          100: 'hsl(var(--ds-teal-100))',
          200: 'hsl(var(--ds-teal-200))',
          300: 'hsl(var(--ds-teal-300))',
          400: 'hsl(var(--ds-teal-400))',
          500: 'hsl(var(--ds-teal-500))',
          600: 'hsl(var(--ds-teal-600))',
          700: 'hsl(var(--ds-teal-700))',
          800: 'hsl(var(--ds-teal-800))',
          900: 'hsl(var(--ds-teal-900))',
          1000: 'hsl(var(--ds-teal-1000))',
        },
        purple: {
          100: 'hsl(var(--ds-purple-100))',
          200: 'hsl(var(--ds-purple-200))',
          300: 'hsl(var(--ds-purple-300))',
          400: 'hsl(var(--ds-purple-400))',
          500: 'hsl(var(--ds-purple-500))',
          600: 'hsl(var(--ds-purple-600))',
          700: 'hsl(var(--ds-purple-700))',
          800: 'hsl(var(--ds-purple-800))',
          900: 'hsl(var(--ds-purple-900))',
          1000: 'hsl(var(--ds-purple-1000))',
        },
        pink: {
          100: 'hsl(var(--ds-pink-100))',
          200: 'hsl(var(--ds-pink-200))',
          300: 'hsl(var(--ds-pink-300))',
          400: 'hsl(var(--ds-pink-400))',
          500: 'hsl(var(--ds-pink-500))',
          600: 'hsl(var(--ds-pink-600))',
          700: 'hsl(var(--ds-pink-700))',
          800: 'hsl(var(--ds-pink-800))',
          900: 'hsl(var(--ds-pink-900))',
          1000: 'hsl(var(--ds-pink-1000))',
        },
        dashed:
          'linear-gradient(to right, hsl(var(--ds-gray-400)), hsl(var(--ds-gray-400)) 50%, transparent 0, transparent)',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--ds-gray-alpha-400))',
        grid: 'hsl(var(--ds-gray-200))',
      },
      backgroundImage: {
        'gradient-button':
          'linear-gradient(-90deg,#007cf0,#00dfd8,#ff0080,#007cf0)',
        trial: 'linear-gradient(135deg,#0070f3,#f81ce5)',
        skeleton:
          'linear-gradient(270deg,hsl(var(--ds-accent-100)),hsl(var(--ds-accent-200)),hsl(var(--ds-accent-200)),hsl(var(--ds-accent-100)))',
      },
      boxShadow: {
        'header-border': 'hsl(var(--header-border))',
        input:
          '0 0 0 1px hsl(var(--ds-gray-alpha-600)),0 0 0 4px hsl(0,0%,100%,.24)!important',
        border: '0 0 0 1px hsl(var(--ds-gray-alpha-400))',
        menu: 'var(--ds-shadow-menu)',
        brands: '0 0 8px 8px var(--shadow-color) inset',
      },
      borderRadius: {
        'ui-content': '.75rem',
        'ui-item': '6px',
      },
      padding: {
        'ui-content': '.5rem',
        'ui-item-inset': '0 .5rem 0 2rem',
        'ui-item': '0 0.5rem',
      },
      margin: ({ theme }) => theme('padding'),
      animation: {
        spinner: 'spinner 1.1s linear infinite',
        'accordion-up': 'accordion-up 0.25s ease-out both',
        'accordion-down': 'accordion-down 0.25s ease-in both',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        caret: 'caret 0.5s ease both alternate infinite',
        'special-button': 'special-button 8s ease-in-out infinite',
        skeleton: 'skeleton 8s ease-in-out infinite',
      },
      keyframes: {
        skeleton: {
          '0%': {
            backgroundPosition: '200% 0%',
          },
          '100%': {
            backgroundPosition: '-200% 0%',
          },
        },
        'special-button': {
          '50%': {
            backgroundPosition: '140% 50%',
            transform: 'skew(-2deg)',
          },
        },
        caret: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'accordion-down': {
          '0%': { height: '0' },
          '100%': { height: 'var(--accordion-content-height)' },
        },
        'accordion-up': {
          '0%': { height: 'var(--accordion-content-height)' },
          '100%': { height: '0' },
        },
        spinner: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.15',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

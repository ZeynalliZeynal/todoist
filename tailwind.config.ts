import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1150px',
        geist: '1220px',
        dashboard: '1408px',
        'dashboard-sub': '1248px',
        full: '1448px',
      },
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
        '3xl': '2rem',
        paragraph: '0.8125rem',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        'ui-background': 'var(--ds-background-100)',
        'ui-disabled-foreground': 'hsl(var(--ds-gray-800-value))',
        'ui-item-background-hover': 'var(--ds-gray-200)',
        'button-invert-hover': 'hsl(var(--button-invert-hover-dark))',
        'button-invert-disabled': 'hsl(var(--button-invert-disabled-dark))',
        foreground: {
          DEFAULT: 'hsl(var(--ds-gray-1000-value))',
        },
        background: {
          '100': 'hsl(var(--ds-background-100-value))',
          '200': 'hsl(var(--ds-background-200-value))',
        },
        accent: {
          '100': 'hsl(var(--ds-accent-100-value))',
          '200': 'hsl(var(--ds-accent-200-value))',
          '300': 'hsl(var(--ds-accent-300-value))',
          '400': 'hsl(var(--ds-accent-400-value))',
          '500': 'hsl(var(--ds-accent-500-value))',
          '600': 'hsl(var(--ds-accent-600-value))',
          '700': 'hsl(var(--ds-accent-700-value))',
          '800': 'hsl(var(--ds-accent-800-value))',
        },
        gray: {
          '100': 'hsl(var(--ds-gray-100-value))',
          '200': 'hsl(var(--ds-gray-200-value))',
          '300': 'hsl(var(--ds-gray-300-value))',
          '400': 'hsl(var(--ds-gray-400-value))',
          '500': 'hsl(var(--ds-gray-500-value))',
          '600': 'hsl(var(--ds-gray-600-value))',
          '700': 'hsl(var(--ds-gray-700-value))',
          '800': 'hsl(var(--ds-gray-800-value))',
          '900': 'hsl(var(--ds-gray-900-value))',
          '1000': 'hsl(var(--ds-gray-1000-value))',
        },
        'gray-alpha': {
          '100': 'hsl(var(--ds-gray-alpha-100-value))',
          '200': 'hsl(var(--ds-gray-alpha-200-value))',
          '300': 'hsl(var(--ds-gray-alpha-300-value))',
          '400': 'hsl(var(--ds-gray-alpha-400-value))',
          '500': 'hsl(var(--ds-gray-alpha-500-value))',
          '600': 'hsl(var(--ds-gray-alpha-600-value))',
          '700': 'hsl(var(--ds-gray-alpha-700-value))',
          '800': 'hsl(var(--ds-gray-alpha-800-value))',
          '900': 'hsl(var(--ds-gray-alpha-900-value))',
          '1000': 'hsl(var(--ds-gray-alpha-1000-value))',
        },
        blue: {
          '100': 'hsl(var(--ds-blue-100-value))',
          '200': 'hsl(var(--ds-blue-200-value))',
          '300': 'hsl(var(--ds-blue-300-value))',
          '400': 'hsl(var(--ds-blue-400-value))',
          '500': 'hsl(var(--ds-blue-500-value))',
          '600': 'hsl(var(--ds-blue-600-value))',
          '700': 'hsl(var(--ds-blue-700-value))',
          '800': 'hsl(var(--ds-blue-800-value))',
          '900': 'hsl(var(--ds-blue-900-value))',
          '1000': 'hsl(var(--ds-blue-1000-value))',
        },
        red: {
          '100': 'hsl(var(--ds-red-100-value))',
          '200': 'hsl(var(--ds-red-200-value))',
          '300': 'hsl(var(--ds-red-300-value))',
          '400': 'hsl(var(--ds-red-400-value))',
          '500': 'hsl(var(--ds-red-500-value))',
          '600': 'hsl(var(--ds-red-600-value))',
          '700': 'hsl(var(--ds-red-700-value))',
          '800': 'hsl(var(--ds-red-800-value))',
          '900': 'hsl(var(--ds-red-900-value))',
          '1000': 'hsl(var(--ds-red-1000-value))',
        },
        amber: {
          '100': 'hsl(var(--ds-amber-100-value))',
          '200': 'hsl(var(--ds-amber-200-value))',
          '300': 'hsl(var(--ds-amber-300-value))',
          '400': 'hsl(var(--ds-amber-400-value))',
          '500': 'hsl(var(--ds-amber-500-value))',
          '600': 'hsl(var(--ds-amber-600-value))',
          '700': 'hsl(var(--ds-amber-700-value))',
          '800': 'hsl(var(--ds-amber-800-value))',
          '900': 'hsl(var(--ds-amber-900-value))',
          '1000': 'hsl(var(--ds-amber-1000-value))',
        },
        green: {
          '100': 'hsl(var(--ds-green-100-value))',
          '200': 'hsl(var(--ds-green-200-value))',
          '300': 'hsl(var(--ds-green-300-value))',
          '400': 'hsl(var(--ds-green-400-value))',
          '500': 'hsl(var(--ds-green-500-value))',
          '600': 'hsl(var(--ds-green-600-value))',
          '700': 'hsl(var(--ds-green-700-value))',
          '800': 'hsl(var(--ds-green-800-value))',
          '900': 'hsl(var(--ds-green-900-value))',
          '1000': 'hsl(var(--ds-green-1000-value))',
        },
        teal: {
          '100': 'hsl(var(--ds-teal-100-value))',
          '200': 'hsl(var(--ds-teal-200-value))',
          '300': 'hsl(var(--ds-teal-300-value))',
          '400': 'hsl(var(--ds-teal-400-value))',
          '500': 'hsl(var(--ds-teal-500-value))',
          '600': 'hsl(var(--ds-teal-600-value))',
          '700': 'hsl(var(--ds-teal-700-value))',
          '800': 'hsl(var(--ds-teal-800-value))',
          '900': 'hsl(var(--ds-teal-900-value))',
          '1000': 'hsl(var(--ds-teal-1000-value))',
        },
        purple: {
          '100': 'hsl(var(--ds-purple-100-value))',
          '200': 'hsl(var(--ds-purple-200-value))',
          '300': 'hsl(var(--ds-purple-300-value))',
          '400': 'hsl(var(--ds-purple-400-value))',
          '500': 'hsl(var(--ds-purple-500-value))',
          '600': 'hsl(var(--ds-purple-600-value))',
          '700': 'hsl(var(--ds-purple-700-value))',
          '800': 'hsl(var(--ds-purple-800-value))',
          '900': 'hsl(var(--ds-purple-900-value))',
          '1000': 'hsl(var(--ds-purple-1000-value))',
        },
        pink: {
          '100': 'hsl(var(--ds-pink-100-value))',
          '200': 'hsl(var(--ds-pink-200-value))',
          '300': 'hsl(var(--ds-pink-300-value))',
          '400': 'hsl(var(--ds-pink-400-value))',
          '500': 'hsl(var(--ds-pink-500-value))',
          '600': 'hsl(var(--ds-pink-600-value))',
          '700': 'hsl(var(--ds-pink-700-value))',
          '800': 'hsl(var(--ds-pink-800-value))',
          '900': 'hsl(var(--ds-pink-900-value))',
          '1000': 'hsl(var(--ds-pink-1000-value))',
        },
        dashed:
          'linear-gradient(to right, hsl(var(--ds-gray-400-value)), hsl(var(--ds-gray-400-value)) 50%, transparent 0, transparent)',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--ds-gray-alpha-400-value))',
        grid: 'hsl(var(--ds-gray-200-value))',
      },
      backgroundImage: {
        'gradient-button':
          'linear-gradient(-90deg,#007cf0,#00dfd8,#ff0080,#007cf0)',
        trial: 'linear-gradient(135deg,#0070f3,#f81ce5)',
        'book-bind-bg':
          'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)',
        'book-pages':
          'repeating-linear-gradient(90deg,#fff,#efefef 1px,#fff 3px,#9a9a9a 0)',
        skeleton:
          'linear-gradient(270deg,hsl(var(--ds-accent-100-value)),hsl(var(--ds-accent-200-value)),hsl(var(--ds-accent-200-value)),hsl(var(--ds-accent-100-value)))',
      },
      boxShadow: {
        'header-border': 'hsl(var(--header-border))',
        input:
          '0 0 0 1px hsl(var(--ds-gray-alpha-600-value)),0 0 0 4px hsl(0,0%,100%,.24)',
        'input-error':
          '0 0 0 1px var(--ds-red-900),0 0 0 4px var(--ds-red-300)',
        border: '0 0 0 1px var(--ds-gray-400)',
        menu: 'var(--ds-shadow-menu-value)',
        brands: '0 0 8px 8px var(--shadow-color) inset',
        book: '0 1.8px 3.6px rgba(0,0,0,.05),0 10.8px 21.6px rgba(0,0,0,.08),inset 0 -.9px 0 rgba(0,0,0,.1),inset 0 1.8px 1.8px hsla(0,0%,100%,.1),inset 3.6px 0 3.6px rgba(0,0,0,.1)',
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
          '0%': {
            height: '0',
          },
          '100%': {
            height: 'var(--accordion-content-height)',
          },
        },
        'accordion-up': {
          '0%': {
            height: 'var(--accordion-content-height)',
          },
          '100%': {
            height: '0',
          },
        },
        spinner: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.15',
          },
        },
        'loading-dot': {
          '0%': {
            opacity: '0.2',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.2',
          },
        },
      },
      animation: {
        spinner: 'spinner 1.1s linear infinite',
        'accordion-up': 'accordion-up 0.25s ease-out both',
        'accordion-down': 'accordion-down 0.25s ease-in both',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        caret: 'caret 0.5s ease both alternate infinite',
        'special-button': 'special-button 8s ease-in-out infinite',
        skeleton: 'skeleton 8s ease-in-out infinite',
        'loading-dot': 'loading-dot 1.4s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5fd0',
          dark: '#0f3f9e',
          light: '#e9f1fe',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#1a5fd0',
          600: '#154fb0',
          700: '#0f3f9e',
        },
        navy: {
          900: '#050d1e',
          800: '#0a1a33',
          700: '#122a4d',
          600: '#1c3a66',
        },
        accent: {
          sky: '#38bdf8',
          teal: '#14b8a6',
          mint: '#2dd4bf',
          gold: '#d9b878',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 45px rgba(20, 184, 166, 0.28)',
        'glow-blue': '0 0 45px rgba(26, 95, 208, 0.30)',
        'card': '0 10px 40px rgba(5, 13, 30, 0.10)',
        'lux': '0 24px 70px -20px rgba(5, 13, 30, 0.45)',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'float-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float-in': 'float-in 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}

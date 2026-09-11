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
          DEFAULT: '#1855c8',
          dark: '#0e3ea0',
          light: '#eaf1fd',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#1855c8',
          600: '#154ab3',
          700: '#0e3ea0',
        },
        navy: {
          900: '#091733',
          800: '#0f244e',
          700: '#1e293b',
        },
        accent: {
          sky: '#0ea5e9',
          teal: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(24, 85, 200, 0.25)',
        'card': '0 8px 30px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}

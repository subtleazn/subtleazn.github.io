/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        slate: {
          950: '#030712',
          900: '#0b0f19',
          800: '#111827',
          700: '#1f2937',
          850: '#0e1420'
        },
        brand: {
          accent: '#38bdf8',
          purple: '#818cf8',
          emerald: '#34d399',
          text: '#94a3b8'
        }
      }
    }
  },
  plugins: [],
}

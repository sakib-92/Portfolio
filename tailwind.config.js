/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050307",
          card: "#0C0714",
          border: "rgba(255, 255, 255, 0.08)",
          violet: "#A855F7",
          "violet-hover": "#C084FC",
          purple: "#9333EA",
          magenta: "#D946EF",
          text: "#F3F4F6",
          muted: "#9CA3AF"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.18), transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.20) 0%, rgba(147, 51, 234, 0.15) 45%, rgba(5, 3, 7, 1) 80%)'
      },
      boxShadow: {
        'violet-glow': '0 0 25px -5px rgba(168, 85, 247, 0.45)',
        'purple-glow': '0 0 25px -5px rgba(147, 51, 234, 0.45)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.6)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0a0a0a',
        'surface-container-low': '#111111',
        'surface-container': '#161616',
        'surface-container-highest': '#252525',
        obsidian: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111111',
          700: '#161616',
          600: '#1e1e1e',
          500: '#252525',
          400: '#333333',
        },
        primary: {
          DEFAULT: '#ffffff',
          neon: '#c3f400', // Electric Lime — The Signature Accent
        },
        secondary: {
          DEFAULT: '#e9c349', // Luxury Gold
        },
        tertiary: '#f4bb92', // Wood Tones
        outline: {
          variant: 'rgba(195, 244, 0, 0.08)', // Ghost Neon Border
        },
        urgency: {
          red: '#ff4444',
          orange: '#ff8c00',
        },
      },
      fontFamily: {
        display: ['Noto Kufi Arabic', 'Epilogue', 'sans-serif'], // Arabic Editorial
        sans: ['Noto Kufi Arabic', 'Manrope', 'sans-serif'],    // Arabic Body
        mono: ['Inter', 'JetBrains Mono', 'monospace'],         // Logotype / Labels
      },
      borderRadius: {
        'xl': '0.75rem',
        'lg': '0.5rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(195, 244, 0, 0.5), 0 0 60px rgba(195, 244, 0, 0.15)',
        'neon-soft': '0 0 10px rgba(195, 244, 0, 0.3)',
        'obsidian-deep': '0 25px 60px rgba(0,0,0,0.8), 0 8px 20px rgba(0,0,0,0.6)',
        'glass-shadow': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(195,244,0,0.08)',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'orbit-spin': 'orbit-spin 30s linear infinite',
        'float-up': 'float-up 0.6s ease-out forwards',
        'slide-fade': 'slide-fade 0.8s ease-out forwards',
        'urgency-blink': 'urgency-blink 1.5s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(195,244,0,0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(195,244,0,0.9), 0 0 80px rgba(195,244,0,0.3)' },
        },
        'orbit-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-fade': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'urgency-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
}
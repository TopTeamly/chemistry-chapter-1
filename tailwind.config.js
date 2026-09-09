/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081029',
          900: '#0B1734',
          800: '#122452',
          700: '#1A3268',
        },
        royal: {
          600: '#1E40AF',
          500: '#2354D6',
          400: '#3B6FE0',
        },
        sky: {
          300: '#9CC2F5',
          200: '#C3DAF9',
          100: '#E6EFFC',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', '"Tajawal"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(11, 23, 52, 0.25)',
        card: '0 4px 18px -6px rgba(11, 23, 52, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(10px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        popIn: { '0%': { opacity: 0, transform: 'scale(.9)' }, '100%': { opacity: 1, transform: 'scale(1)' } },
        shake: { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-4px)' }, '75%': { transform: 'translateX(4px)' } },
      },
      animation: {
        fadeIn: 'fadeIn .35s ease-out both',
        slideUp: 'slideUp .35s ease-out both',
        popIn: 'popIn .25s ease-out both',
        shake: 'shake .35s ease-in-out',
      },
    },
  },
  plugins: [],
}

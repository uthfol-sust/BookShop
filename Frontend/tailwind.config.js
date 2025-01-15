/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '33%': { transform: 'translateX(-100%)' },
          '66%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 9s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
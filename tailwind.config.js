/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          g1: '#009174',
          g2: '#F4F4F4',
        },
        dark: {
          d1: '#242328',
        },
        grey: {
          g1: '#A6A6A6',
          g2: '#4F4F4F',
        },
      },
      fontFamily: {
        dmSans: ["'DM Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

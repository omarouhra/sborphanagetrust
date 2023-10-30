/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          g1: '#009174',
        },
      },
      fontFamily: {
        dmSans: ["'DM Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

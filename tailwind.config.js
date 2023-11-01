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
          g3: '#52BD94',
        },
        dark: {
          d1: '#242328',
        },
        grey: {
          g1: '#A6A6A6',
          g2: '#4F4F4F',
          g3: '#333333',
        },
      },
      fontFamily: {
        dmSans: ["'DM Sans'", 'sans-serif'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(101deg, #009174 20.94%, #52BD94 100%)',
      },
    },
  },
  plugins: [],
};

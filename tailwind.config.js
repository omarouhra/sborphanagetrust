/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          1: '#009174',
          2: '#F4F4F4',
          3: '#52BD94',
        },
        dark: {
          1: '#242328',
        },
        grey: {
          1: '#A6A6A6',
          2: '#4F4F4F',
          3: '#333333',
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

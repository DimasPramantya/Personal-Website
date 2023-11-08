/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'primaryGold': "#edd073",
        'gradientGold': "#f0eddb",
        'secondaryGold': "#FDDE6E",
        'primaryBlack': "#121212",
        'secondaryBlack': "#191919"
      },
      spacing:{
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/image/bg1.jpg/')",
      },
      colors: {
        'semil': '#ba933e',
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
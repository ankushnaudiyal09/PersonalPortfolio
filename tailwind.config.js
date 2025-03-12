/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      signature: ["Great Vibes"],
    },
    boxShadow:{
      'circle': '2px 2px 20px #7ad7ea',
      'card':'2px 2px 20px #FF0000',
      'circleLight':'2px 2px 20px #e3481c',
      'orange-500': '0 4px 6px -1px rgba(249, 115, 22, 0.5)',
      'blue-500': '0 4px 6px -1px rgba(59, 130, 246, 0.5)',
      'yellow-500': '0 4px 6px -1px rgba(234, 179, 8, 0.5)',
      'blue-600': '0 4px 6px -1px rgba(37, 99, 235, 0.5)',
      'sky-400': '0 4px 6px -1px rgba(56, 189, 248, 0.5)',
      'white': '0 4px 6px -1px rgba(255, 255, 255, 0.5)',
      'gray-400': '0 4px 6px -1px rgba(156, 163, 175, 0.5)',
      'green-400': '0 4px 6px -1px rgba(34, 197, 94, 0.5)',
    },
  },
  plugins: [],
};

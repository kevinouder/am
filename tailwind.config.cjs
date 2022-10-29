/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

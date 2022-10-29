/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/partials/*.hbs",
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

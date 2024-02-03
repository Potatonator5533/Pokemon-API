/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      width: {
        '856': '856',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'scott-gray': '#484848',
        'scott-green': '#006465',
        'scott-green-light': '#0f928c',
        'scott-turquoise': '#00c9d2',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'itim': ['Itim', 'cursive'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      }
    },
  },
  plugins: [],
}
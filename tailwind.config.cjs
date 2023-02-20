/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px'
    },
    colors: {
      'blue-zodiac': '#12284C',
      'pastel-blue': '#A1C7FF',
      'gray': '#929191',
      'palatinate': '#692757',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

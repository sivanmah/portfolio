/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'blue-zodiac': '#12284C',
      'pastel-blue': '#A1C7FF',
      'gray': '#929191',
      'palatinate': '#692757',
      'white': '#ffffff',
      'black': '#000000',
      'green': '#037171',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    variants: {
      animation: ["motion-safe"]
  },
    extend: {
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50vh',
      },
      margin: {
        '140': '35rem',
      },
    }
      },
  plugins: [],
}

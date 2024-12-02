/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Override sans stack
      },
      colors: {
        bi: {
          wisteria: "#be9ee4",
          magenta: '#a9278c',
          purple: '#683795',
          purplest: '#501f5d',
          cornflower: '#7587dc',
          blue: '#3e57b8',
          navy: '#2d2485',
          naviest: '#13154d'
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Override sans stack
      },
      colors: {
        purple: {
          400: '#C98FDB',
          500: '#B57ACC',
          600: '#A165BD'
        }
      }
    },
  },
  plugins: [],
}
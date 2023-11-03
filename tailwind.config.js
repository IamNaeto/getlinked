/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#D434FE',
      darkpurple: '#140D27',
      litepurple: '#FF26B9',
      purpleblue: '#903AFF',
      purpleblur: '#2d273e',
      pink: '#FE34B9',
      white: '#fff',
      },
      fontFamily: {
        'clash': ['"Clash Display"', 'sans'],
        'mon': ['"Montserrat"', 'sans'],
      },
      backgroundColor: {
        'lite-grey': 'rgba(255, 255, 255, 0.03)',
      },
    backgroundImage: {
      'matrix': "url('./img/matrix.png')",
    },
    },
  },
  plugins: [],
}
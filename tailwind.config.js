/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'orange': {
          100: '#febb64',
        },
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        'my-blue': {
          100: '#3797b8',
        },
        'orange': {
          100: '#febb64',
        },
        'fuchsia': {
          100: '#fbede2',
        },
        'zinc': {
          100: '#4e4841',
        },
      }
    },
  },
  plugins: [require('daisyui')],
}

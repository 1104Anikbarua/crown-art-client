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
    extend: {},
  },
  plugins: [],
}
echo "# b712-summer-camp-client-side-1104Anikbarua" >> README.md

git add README.md
git commit - m "first commit"
git branch - M main
git remote add origin https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-1104Anikbarua.git
git push - u origin main
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acc: '#E9D9D8',
        bg: '#F5F5F5'
      }
    },
  },
  plugins: [],
}

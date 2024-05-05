/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#212121",
        "ui": "#171717",
        "acc": "#424242",
        "acc2": '#2F2F2F',
        "purple": '#5051F9',
        "red": '#FF5050',
        "hui": '#41416e'
      },
      fontFamily: {
        'comfortaa': ["Comfortaa", "Serif"]
      }
    },
  },
  plugins: [],
}
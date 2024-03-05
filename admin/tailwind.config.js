/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-poppin': ['Custom Font', 'Poppins'],
        'custom-kode': ['Custom Font', 'Kode Mono'],
        'custom-robot': ['Custom Font', 'Roboto Mono'],
      },
    },
  },
  plugins: [],
}
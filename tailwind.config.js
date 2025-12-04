/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // ← Esto es lo que falta en la mayoría de casos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
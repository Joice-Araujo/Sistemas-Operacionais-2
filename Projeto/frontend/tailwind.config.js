/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa: "#fb7da8",
        azul: "#ffdc67  ",
        verde: "#00995E",
        laranja: "#FD5A46",
        roxo: "#552cb7",

        btnBorda: "#575353"
      }
    },
  },
  plugins: [],
}


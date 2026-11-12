/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans:["Roboto Mono", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors:{
        primary:{
          900: "#C5E6A6"
        },
        secondary:{
          900: "#BDD2A6"
        },
        accent:{
          900: "#B9BEA5"
        }
      }
    },
  },
  plugins: [],
}
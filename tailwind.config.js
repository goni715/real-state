/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          lg: '2rem'
        }
      },
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
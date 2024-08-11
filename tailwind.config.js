/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        Accent: "rgba(191, 91, 18, 1)",
        Bg: "rgba(7, 1, 37, 0.9)",
        
      },
      backgroundImage:{
        'custom':"bg-gradient-to-t ,  rgba(191, 91, 18, 1)"
      }
    },
  },
  plugins: [],
}


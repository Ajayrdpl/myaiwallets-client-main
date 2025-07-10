/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #010101 0%, #3e3d3d 100%)',
      },
      colors: {
       bg_color:"#fe6b2e",
       bg_color1:"#FD5D31",
        text_white:"#fff"
      },
      animation: {
        scroll: "scroll 3s linear infinite",
        scroll1: "scroll1 3s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        scroll1:{
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        }
      
    },         
    },
  },
  plugins: [],
}


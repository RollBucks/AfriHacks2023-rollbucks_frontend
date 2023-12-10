/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Space Grotesk', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    colors: {
      white: {
        400: "#EAEAEA",
        500: "#DEDEDE",
        600: "#959595"
      },
      black: {
        400: "#22262B"
      },
      yellow: "#FFDB63",
      blue: "#B2C2EC",
      pink: "#F3D0BB"
    },
    extend: {},
  },
  plugins: [],
}


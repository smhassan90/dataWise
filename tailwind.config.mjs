/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFEEC",
        button: "#021A22",
        white: "#ffff",
        gray: "#6B6B6B",
        foreground: "var(--foreground)",
        sideBarBg:"#036666"
      },
      width: {
        '648': "648px",
        '550': "550px"
      },
      fontSize: {
        h1: "44px",
        h2:'30px',


      },
      screens: {
        'xxs': '420px',
        'xs': '540px',
      },
    },
  },
  plugins: [],
};

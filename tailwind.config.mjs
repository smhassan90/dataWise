/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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

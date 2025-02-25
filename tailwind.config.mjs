/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      width: {
        648: "648px",
      },
      fontSize: {
        h1: "52px",
        h2:'32px'
      },
      screens: {
        'xxs': '420px',
        'xs': '540px',
      },
    },
  },
  plugins: [],
};

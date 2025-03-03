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
        primary:'#FFFEEC',
        secondary:'#036666',
        Tertiary :'#171717',
        // Quaternary :''
        white: "#ffff",
        gray: "#6B6B6B",
      },
      width: {
        '648': "648px",
        '550': "480px"
      },
      fontSize: {
        large: "38px",
        medium:'26px',
        small:'16px',
        labelSize:'14px'
      },
      screens: {
        'xxs': '420px',
        'xs': '540px',
      },
      fontFamily: {
        manrope: ['Manrope'],
        poppins: ['Poppins',],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        large : '700',
      },
      borderRadius:{
        large:'15px'
      }
    },
  },
  plugins: [],
};

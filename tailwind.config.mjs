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
        Quaternary :'#D9D9D9',
        Quinary :"#ff8548",
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
        ExtraSmall:'14px',
        labelSize:'13px'
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
        large:'15px',
        normal:'10px'
      },
      margin: {
        'normal': '12px',
      },
      padding: {
        'normal': '12px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'default': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};

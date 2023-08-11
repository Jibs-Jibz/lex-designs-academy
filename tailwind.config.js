/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
      },
      backgroundImage: {
        'courseBgGraphics': 'url("../../public/images/course-header-graphics.png")',
        'courseBgDigital': 'url("../../public/images/course-header-digital.png")',
        'courseBgUiUx': 'url("../../public/images/course-header-uiux.png")',
        'contactHeader': 'url("../../public/images/contact-header.png")',
        'aboutBgDesign': 'url("../../public/images/about-bg-design.png")',
      },
      colors: {
        lexPrimary: "#671355",
        lexSecondary: "#F0E7F1",
        lexAccent: "#F7CB00",
      },
      boxShadow: {
        'lex-nav': '0px 6px 15px 0px rgba(0, 0, 0, 0.15)',
        'lex-course-card': '0px -3.4092929363250732px 3.4092929363250732px 0px rgba(0, 0, 0, 0.05)',
        'lex-num-count': '0px 6px 20px 0px rgba(0, 0, 0, 0.15',
        'lex-section3': ' 0px 5.733193874359131px 28.665971755981445px 0px rgba(0, 0, 0, 0.15)',
      },
    },
    screens: {
      // custom size

      "2xl": { max: "1665px" },
      // => @media (max-width: 1535px) { ... }
      "cs1": { "max": "1356px" },
      // => @media (max-width: 1356px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
      "xxs": { "max": "380px" },
      // => @media (max-width: 380px) { ... }
      "3xs": { "max": "350px" },
      // => @media (max-width: 350px) { ... }

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)',
                    ...fontFamily.sans
                ],
  			inter: [
  				'var(--font-inter)',
                    ...fontFamily.sans
                ],
  			manrope: [
  				'var(--font-manrope)',
                    ...fontFamily.sans
                ]
  		},
  		backgroundImage: {
  			courseBgGraphics: 'url("../../public/images/course-header-graphics.png")',
  			courseBgDigital: 'url("../../public/images/course-header-digital.png")',
  			courseBgUiUx: 'url("../../public/images/course-header-uiux.png")',
  			contactHeader: 'url("../../public/images/contact-header.png")',
  			aboutBgDesign: 'url("../../public/images/about-bg-design.png")'
  		},
  		colors: {
  			lexPrimary: '#671355',
  			lexSecondary: '#F0E7F1',
  			lexAccent: '#F7CB00',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'lex-nav': '0px 6px 15px 0px rgba(0, 0, 0, 0.15)',
  			'lex-course-card': '0px -3.4092929363250732px 3.4092929363250732px 0px rgba(0, 0, 0, 0.05)',
  			'lex-num-count': '0px 6px 20px 0px rgba(0, 0, 0, 0.15',
  			'lex-section3': ' 0px 5.733193874359131px 28.665971755981445px 0px rgba(0, 0, 0, 0.15)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		'2xl': {
  			max: '1665px'
  		},
  		cs1: {
  			max: '1356px'
  		},
  		xl: {
  			max: '1279px'
  		},
  		lg: {
  			max: '1023px'
  		},
  		md: {
  			max: '767px'
  		},
  		sm: {
  			max: '639px'
  		},
  		xs: {
  			max: '479px'
  		},
  		xxs: {
  			max: '380px'
  		},
  		'3xs': {
  			max: '350px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

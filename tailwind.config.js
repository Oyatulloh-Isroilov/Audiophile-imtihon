/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.815rem',
      base: '15px',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '3.5rem',
    },
    colors: {
      orange: '#D87D4A',
      darkGray: '#101010',
      gray: '#101010b3',
      lightGray: '#F1F1F1',
      offWhite: '#FAFAFA',
      lightOrange: '#FBAF85',
      white: '#FFFFFF',
      black: '#000000',
      red: '#CD2C2C',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        md: '8px',
      },
      backgroundImage: {
        'hero-image-sm':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198063/audiophile/home/mobile/image-header_lshoqz.jpg')",
        'hero-image-md':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198064/audiophile/home/tablet/image-header_ldh984.jpg')",
        'hero-image-lg':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198062/audiophile/home/desktop/image-hero_qvyzuf.jpg')",
        'pattern-circles':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198063/audiophile/home/desktop/pattern-circles_fz5sow.svg')",
      },
      letterSpacing: {
        lg: '0.4em',
        xl: '0.6em',
      },
      margin: {
        lg: '88px',
        xl: '120px',
        '2xl': '160px',
      },
      padding: {
        xl: '120px',
        '2xl': '165px',
      },
      gap: {
        xl: '125px',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-300px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.6s linear forwards',
      },
      boxShadow: {
        blurred: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};

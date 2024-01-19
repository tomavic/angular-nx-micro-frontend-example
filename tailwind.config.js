/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/shell/src/**', './apps/login/src/**'],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      spacing: {
        100: '16px',
        125: '20px',
        150: '24px',
        175: '28px',
        200: '32px',
        225: '36px',
        250: '40px',
        300: '48px',
        350: '56px',
        400: '64px',
        450: '72px',
        500: '80px',
        525: '84px',
        600: '96px',
      },
      colors: {
        primary: {
          100: '#e60000',
          200: '#bd0000',
          300: '#820000',
        },
        secondary: {
          100: '#00697c',
          200: '#5e2750',
          300: '#eb6100',
          400: '#fecb00',
          500: '#008a00',
          600: '#005ea5',
        },
        monochrome: {
          100: '#ffffff',
          200: '#f2f2f2',
          300: '#bebebe',
          400: '#7e7e7e',
          500: '#262626',
          600: '#0d0d0d ',
        },
        gray: {
          100: '#F8F8F8',
          200: '#EAEAEA',
          300: '#D2D2D2',
          400: '#A6A6A6',
          500: '#7F7F7F',
          600: '#525252',
          700: '#393939',
          800: '#262626',
          900: '#171717',
        },
      },
      boxShadow: {
        xs: '0 1px 3px 0 rgba(0,0,0,0.6)',
        sm: '0 1px 4px 0 rgba(0,0,0,0.2)',
        md: '0 2px 8px 0 rgba(0,0,0,0.2)',
        lg: '0 4px 10px 0 rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};

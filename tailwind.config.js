module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          100: '#93c69e',
          200: '#83be90',
          300: '#74b682',
          400: '#64ae74',
          500: '#5a9d68',
          600: '#508b5d',
          700: '#467a51',
          800: '#3c6846',
          900: '#32573a',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

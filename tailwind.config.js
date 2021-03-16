module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#cbd4d9',
          200: '#C2C7D6',
          300: '#8490B3',
          400: '#4F5F92',
          500: '#314172',
          600: '#222D4E',
          700: '#121B36',
          800: '#0C1223',
          900: '#090C15',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

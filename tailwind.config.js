module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Kaushan': ['Kaushan Script'],
      'Ubuntu':['Ubuntu'],
      'Averia':['Averia Libre']
     },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
       },
        indigo: {
          light: '#b3bcf5',
          DEFAULT: '#5c6ac4',
          dark: '#202e78',
        },
        black: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181D',
          300: '#16181D',
          500: '#0f1115',
          700: '#202125',
       },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

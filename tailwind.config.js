module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: '#4115BA',
        lightBlue: '#541BF1',
        softRed: '#00E6A7',
        purpleCustom:'#6E41F5',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: '#150a42',
      },
      backgroundImage: () => ({
        dots: "url('../public/bg-dots.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

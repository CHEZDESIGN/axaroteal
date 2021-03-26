module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#97ce6e",
        'ternary': {
          DEFAULT: '#192A61',
          '50': '#8197DF',
          '100': '#6D86D9',
          '200': '#4465CF',
          '300': '#2E4DB2',
          '400': '#233C8A',
          '500': '#192A61',
          '600': '#0F1838',
          '700': '#040710',
          '800': '#000000',
          '900': '#000000'
        },
        'main': {
          DEFAULT: '#08A851',
          '50': '#9BFAC7',
          '100': '#83F9B9',
          '200': '#52F79D',
          '300': '#22F482',
          '400': '#0AD968',
          '500': '#08A851',
          '600': '#06773A',
          '700': '#034722',
          '800': '#01160B',
          '900': '#000000'
        },
      },
    }, 
  },
  variants: {
    extend: {
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
      gap: ["responsive", "hover", "focus"],
      container: ["responsive"],
    },
  },
  plugins: [],
};

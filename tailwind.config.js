module.exports = {
  mode:'jit',
  purge: [
    './**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Playfair Display', 'serif'],
        'heading' : ['Fira Sans Condensed', 'serif'],
        'sans' : ['Overpass', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

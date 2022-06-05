module.exports = {
  mode:'jit',
  purge: [
    './**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Lora', 'sans-serif'],
        'heading' : ['PT Sans', 'sans-serif'],
        'sans' : ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

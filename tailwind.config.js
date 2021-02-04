module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}

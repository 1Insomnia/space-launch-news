module.exports = {
  purge: [],
  jit: 'true',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      light: {
        white: '#fff',
        transparent: 'rgba(250, 250, 250, .25)',
        DEFAULT: '#fafafa'
      },
      dark: {
        black: '#111',
        transparent: 'rgba(32, 32, 35, .25)',
        DEFAULT: '#202023'
      },
      teal: {
        DEFAULT: '#4fd1c5'
      }
    },
    extend: {
      zIndex: {
        1000: '1000'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

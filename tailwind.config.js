module.exports = {
  purge: [],
  jit: 'true',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '728px'
      }
    },
    colors: {
      light: {
        transparent: 'rgba(250, 250, 250, .25)',
        DEFAULT: '#fafafa'
      },
      dark: {
        transparent: 'rgba(17, 17, 17, .25)',
        DEFAULT: '#111'
      },
      teal: {
        DEFAULT: '#4fd1c5'
      },
      accents: {
        1: 'rgba(32, 32, 35, 0.90)',
        2: 'rgba(32, 32, 35, 0.80)',
        2: 'rgba(32, 32, 35, 0.70)',
        2: 'rgba(32, 32, 35, 0.60)',
        2: 'rgba(32, 32, 35, 0.50)',
        2: 'rgba(32, 32, 35, 0.40)',
        2: 'rgba(32, 32, 35, 0.30)',
        8: 'rgba(32, 32, 35, 0.20)',
        9: 'rgba(32, 32, 35, 0.1)'
      }
    },
    extend: {
      zIndex: {
        1000: '1000'
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('/hero-2.jpg')"
      },
      height: {
        'screen-offset': 'calc(100vh - 64px)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '60': '20rem',
        '30':'10rem',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      fontSize: {
        'micro':'.5rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '0.5': '0.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '40' : '40px'
    },
  },
  variants: {
    extend: {
      height: ["responsive", "hover", "focus"],
      width: ["responsive", "hover", "focus"],
      textColor: ['active','focus','hover'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }){
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.h-fill':{
          'height': '-webkit-fill-available',
        },
      })
    })
  ],
}

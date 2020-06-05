const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#ffece6',
          200: '#ffd1bf',
          300: '#ffb599',
          400: '#ff7d4d',
          500: '#ff4500',
          600: '#e63e00',
          700: '#992900',
          800: '#731f00',
          900: '#4d1500',
        },
      },
      spacing: {
        '2px': '2px',
        '1.5': '0.333rem',
        '14': '3.5rem',
        '56': '14rem',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: theme => ({
        outline: `0 0 0 2px ${theme('colors.brand.500')}60`,
      }),
      fontSize: {
        '2xs': '0.667rem',
      },
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.md'),
          backgroundColor: theme('colors.gray.100'),
          borderColor: theme('colors.gray.200'),
          fontSize: theme('fontSize.sm'),
          outline: 'none',
          '&:hover': {
            backgroundColor: theme('colors.white'),
            boxShadow: theme('shadow.none'),
            outline: 'none',
          },
          '&:focus': {
            backgroundColor: theme('colors.white'),
            borderColor: theme('colors.blue.500'),
            boxShadow: theme('shadow.none'),
            outline: 'none',
          },
        },
      },
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.vue',
    './public/**/*.html',
  ],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#cceaff',
          200: '#99d5ff',
          300: '#66c0ff',
          400: '#33abff',
          500: '#0096ff',
          600: '#0078cc',
          700: '#005a99',
          800: '#003c66',
          900: '#001e33',
        }
      },
      fontFamily: {
        sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
      },
      boxShadow: theme => ({
        outline: `0 0 0 2px ${theme('colors.brand.500')}60`,
      }),
    },

    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.md'),
          borderColor: theme('colors.gray.400'),
          paddingTop: '0.5625rem',
          paddingBottom: '0.5625rem'
        },

        'input, textarea, multiselect, select, checkbox, radio': {
          '&:focus': {
            borderColor: theme('colors.brand.400'),
            boxShadow: theme('boxShadow.outline'),
            transition: 'box-shadow 100ms ease-in-out',
          },
        },

        'checkbox, radio': {
          '&:checked:focus': {
            borderColor: theme('colors.brand.500'),
            backgroundColor: theme('colors.brand.500'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}

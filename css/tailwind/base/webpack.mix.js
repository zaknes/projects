const mix = require('laravel-mix')

mix.setPublicPath('public')
  .js('src/js/app.js', 'public/js')
  .postCss('src/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer')
  ])

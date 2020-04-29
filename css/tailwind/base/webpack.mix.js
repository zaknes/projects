const mix = require('laravel-mix')

mix.setPublicPath('public')
  .postCss('src/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer')
  ])
  .js('src/js/app.js', 'public/js')

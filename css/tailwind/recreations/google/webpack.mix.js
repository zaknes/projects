let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
  .less('src/less/app.less', 'public/css')
  .js('src/js/app.js', 'public/js')
  .options({
    postCss: [
      tailwind('./tailwind.js'),
    ]
  });

if (mix.inProduction()) {
  mix.purgeCss({
    globs: [
      path.join(__dirname, 'public/*.html'),
    ],
  });
}

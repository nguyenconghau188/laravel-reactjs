const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/backend/js/app.js', 'public/backend/js')
   .sass('resources/backend/sass/app.scss', 'public/backend/css')
   .copyDirectory('resources/backend/js/resources', 'public/backend/resources')
   .react('resources/client/js/app.js', 'public/client/js')
   .sass('resources/client/sass/app.scss', 'public/client/css');

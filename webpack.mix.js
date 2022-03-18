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

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.copy([
    'node_modules/simplebar/dist/simplebar.css',
    'resources/css/style.css',
    'node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css'
], 'public/css');
mix.copy([
    'node_modules/@coreui/coreui/dist/js/coreui.bundle.min.js',
    'node_modules/simplebar/dist/simplebar.min.js',
    'node_modules/chart.js/dist/chart.min.js',
    'node_modules/@coreui/chartjs/dist/js/coreui-chartjs.js',
    'node_modules/@coreui/utils/dist/coreui-utils.js',
    'resources/js/main.js'
], 'public/js');

mix.copy('resources/css/vendors/simplebar.css', 'public/css/vendors');
mix.copy('resources/assets', 'public/assets');
mix.copy('node_modules/@coreui/icons/sprites/', 'public/icons/sprites');


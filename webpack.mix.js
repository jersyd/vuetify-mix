const mix = require('laravel-mix');

require('vuetifyjs-mix-extension');

mix.js('./src/app.js', 'dist/js/script.js')
    .vuetify('vuetify-loader')
    .vue({ version: 2 })
    .sass('./src/app.scss', 'dist/css/style.css');
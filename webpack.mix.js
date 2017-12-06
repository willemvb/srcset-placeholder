const mix = require('laravel-mix');

mix.config.postCss = require('./postcss.config').plugins;

mix
    .js('resources/js/app.js', 'examples/assets/app.js')
    .js('resources/js/app-lazy.js', 'examples/assets/app-lazy.js')
    .postCss('resources/css/app.css', 'examples/assets/app.css')
    .options({
        processCssUrls: false,
    });

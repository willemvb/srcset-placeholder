const mix = require('laravel-mix');

mix.config.uglify.compress.drop_console = false;
mix.config.postCss = require('./postcss.config').plugins;

mix
    .version()

    .js('assets/js/app.js', 'build/js')
    .postCss('assets/css/app.css', 'build/css')
    .options({
        processCssUrls: false,
    });

let postcssNested = require('postcss-nested');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
let customSelector = require('postcss-custom-selectors');

module.exports = {
    plugins: [
        postcssNested,
        autoprefixer({
            browsers: ["last 2 versions"]
        }),
        customSelector,
        cssnano
    ],
};
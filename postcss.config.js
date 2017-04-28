let postcssNested = require('postcss-nested');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

module.exports = {
    plugins: [
        postcssNested,
        autoprefixer({
            browsers: ["last 2 versions"]
        }),
        cssnano
    ],
};
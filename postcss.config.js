let postcssNested = require('postcss-nested');
let autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postcssNested,
        autoprefixer({
            browsers: ["last 2 versions"]
        }),
    ],
};
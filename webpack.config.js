const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: path.resolve(__dirname, './static/js'),
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.styl$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'stylus-loader'
                },
                {
                    loader: "postcss-loader"
                }
            ]
        }
        ]
    }
};
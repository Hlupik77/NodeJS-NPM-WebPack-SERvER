let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    // entry:'./test.js'
    devServer: {
        contentBase: './dist',
        overlay: true
    },

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    };

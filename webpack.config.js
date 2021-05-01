const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.scss$/,
            use: [

              {loader: MiniCSSExtractPlugin.loader},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}

            ]
          }
        ]
    },
    plugins: [
         new HtmlWebpackPlugin(
             {
                 inject: true,
                 template: './public/index.html',
                 filename: './index.html'
             }
         ),
         new CopyWebpackPlugin({
            patterns: [
              {from: './src/img/',to:'src/img'}
            ]
         }),
         new MiniCSSExtractPlugin({
          filename: "./src/styles/styles.css"
         })
    ]
}
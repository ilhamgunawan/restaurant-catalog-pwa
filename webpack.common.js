/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new WorkboxPlugin.GenerateSW({
      skipWaiting: true,
      clientsClaim: true,
      swDest: 'sw.js',
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/list'),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/detail/'),
          handler: 'NetworkFirst',
        },
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/images/'),
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
  ],
};
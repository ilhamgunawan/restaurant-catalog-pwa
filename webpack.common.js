/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    // new WorkboxPlugin.GenerateSW({
    //   swDest: 'sw.js',
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'CariResto-V1-RestaurantAPI',
    //       },
    //     },
    //     {
    //       urlPattern: new RegExp('https://fonts.googleapis.com'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'CariResto-V1-GoogleFonts',
    //       },
    //     },
    //   ],
    // }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
      include: [
        /\.html$/,
        /\.js$/,
        /\.css$/,
        /\.json$/,
        /\.jpg$/,
        /\.png$/,
        /\.svg$/,
      ],
    }),
  ],
};
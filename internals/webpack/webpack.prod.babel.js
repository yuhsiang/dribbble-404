// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { appDir } = require('./config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: {
    app: path.join(process.cwd(), `${appDir}/app.js`),
    setting: path.join(process.cwd(), `${appDir}/setting_app.js`),
  },
  mode: 'production',

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*[\\/].*js$/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },

    // runtimeChunk: {
    //   name: 'runtime',
    // },
    minimizer: [
      new TerserPlugin({
      }),
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /zh-tw/
    ),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: `${appDir}/index.pug`,
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },

      chunks: ['app', 'vendor', 'runtime'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${appDir}/index.pug`,
      filename: 'setting_app.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      chunks: ['setting', 'vendor', 'runtime'],
      // chunks: ['setting'],
      inject: true,
    }),
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});

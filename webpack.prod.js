const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const config = require('./config-loader.js').load();

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[hash:8].bundle.css',
    }),
    new BabelMinifyPlugin(),
    new CopyPlugin([{from: 'public/favicon.png', to: 'favicon.png'}]),
  ],
});

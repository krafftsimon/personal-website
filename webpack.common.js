const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[hash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'public'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Images larger than 10 KB won’t be inlined
              limit: 10 * 1024,
              name: '[hash:8].[ext]',
              outputPath: 'images',
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-optipng')(),
                require('imagemin-svgo')(),
                require('imagemin-mozjpeg')({
                  progressive: true,
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
};

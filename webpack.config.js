const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      middlewares: path.resolve(__dirname, 'src', 'middlewares'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'api'), to: path.resolve(__dirname, 'dist', 'api') },
      {
        from: path.resolve(__dirname, 'src', 'assets', 'images'),
        to: path.resolve(__dirname, 'dist', 'images'),
      },
      { from: path.resolve(__dirname, 'src', 'sw.js'), to: path.resolve(__dirname, 'dist') },
      {
        from: path.resolve(__dirname, 'src', 'manifest.json'),
        to: path.resolve(__dirname, 'dist'),
      },
      {
        from: path.resolve(__dirname, 'src', 'favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
  },
};

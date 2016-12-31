const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  context: __dirname,
  entry: './src/client/app.jsx',
  output: {
    path: path.join(__dirname, '/src/client/static/dist/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  }
}
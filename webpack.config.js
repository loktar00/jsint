var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src.js'],
  output: {
    path: __dirname + "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0',
      }
    ],
  },
  resolve: {
    extensions: ['', '.js']
  }
}
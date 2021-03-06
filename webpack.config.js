/**
 * Created by realm on 2017/2/15.
 */
const path = require('path');

module.exports = {
  entry: {
    'tqb-data-picker': './app/main.js',
    dev: './app/dev.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, './config/dev.js')
    }
  }
};
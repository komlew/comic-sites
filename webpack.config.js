var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    '/dist/bundle.min': './index.js',
    '/docs/index.min': './docs/index.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        output: {
          comments: false,
          beautify: false
        },
        warnings: false
      }
    })
  ]
};

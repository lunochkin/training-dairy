let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.common');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  cache: true,
  plugins: [
    new webpack.ProgressPlugin(function() {}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    })
  ]
});
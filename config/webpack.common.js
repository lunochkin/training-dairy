let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

let root = function (args) {
  let _root = path.resolve(__dirname);
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
};

module.exports = {
  entry: {
    // vendor: './client/vendor.js',
    bundle: root('../client/index.js')
  },
  output: {
    filename: '[name].[chunkHash].js',
    path: root('../static/dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ["", ".js"],
    root: ["static"],
    modulesDirectories: ["node_modules"]
    // alias: {'react/lib/ReactMount': 'react-dom/lib/ReactMount'}
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest']
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['bundle', 'vendor'],
    //   minChunks: Infinity
    // }),
    new HtmlWebpackPlugin({
      template: root('../client/index.html'),
      filename: '../index.html'
    })
  ]
};

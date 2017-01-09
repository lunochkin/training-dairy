let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let path = require('path');

let root = function (args) {
  let _root = path.resolve(__dirname);
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
};

module.exports = {
  entry: {
    style: root('../client/entry/style.js'),
    'vendor.style': root('../client/entry/vendor.style.js'),
    vendor: root('../client/entry/vendor.js'),
    index: root('../client/index.js')
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
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)([a-z0-9]+)?$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['index', 'vendor'],
      minChunks: Infinity
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: root('../client/index.html'),
      filename: '../index.html'
    })
  ]
};

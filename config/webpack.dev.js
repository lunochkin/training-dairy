'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  cache: true
});
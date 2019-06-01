const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')

const config = {
  ...baseConfig,
  plugins: [
    new WriteFileWebpackPlugin(),
    // new webpack.HotModulereplacementPlugin(),
    ...baseConfig.plugins
  ],
  mode: 'development',
  devtool: 'cheap-module-inline-source-map'
}

module.exports = config
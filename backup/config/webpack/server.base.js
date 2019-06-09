const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('../index')

module.exports = {
  name: 'server',
  target: 'node',

  resolve: {
    alias: {
      '@config': path.resolve('config'),
      '@modules': path.resolve('src/app/modules'),
      '@components': path.resolve('src/app/components'),
      '@actions': path.resolve('src/app/actions'),
      '@reducers': path.resolve('src/app/store/reducers'),
      '@utils': path.resolve('src/app/common')
    }
  },

  entry: {
    app: [
      './src/server/index'
    ]
  },

  externals: [
    nodeExternals({
      whiteList: /\.css$/,
    })
  ],

  output: {
    path: path.resolve(__dirname, '../../dist/server'),
    filename: 'server.js',
    publicPath: config.publicPath + '/'
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `css/locals`,
            options: {
              modules: true,
              localIdentName: config.classScopedName,
            }
          },
          { loader: `sass`}
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: `css/locals`}
        ]
      },
      { test: /\.(png|jpg|gif)$/, loader: 'url' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'true',
      __CLIENT__: 'false',
    }),

  ]
}
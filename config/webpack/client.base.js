const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OfflinePlugin = require('offline-plugin')

const config = require('../index')
const devMode = process.env.NODE_ENV == 'development'

module.exports = {
  name: 'client',
  target: 'web',

  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@config': path.resolve('config'),
      '@modules': path.resolve('src/app/modules'),
      '@components': path.resolve('src/app/components'),
      '@actions': path.resolve('src/app/actions'),
      '@reducers': path.resolve('src/app/reducers'),
      '@utils': path.resolve('src/app/common')
    }
  },

  entry: {
    app: [
      '@babel/polyfill',
      'bootstrap/dist/css/bootstrap.min.css',
      'jquery',
      'popper.js',
      'bootstrap/dist/js/bootstrap.min.js',
      './src/client/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../../dist/client'),
    filename: devMode ? `[name].bundle.js`: `[name].[hash].js`,
    publicPath: config.publicPath + '/'
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /(\.css|\.scss)$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css',
            options: {
              modules: true,
              localIdentName: config.classScopedName,
              minimize: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: ['last 2 versions']
                })
              ]
            }
          },
          { loader: 'sass' }
        ]
      },

      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader:require.resolve('less-loader'),
            options: {
              modules: false,
              modifyVars: {
                "@primary-color": "#f9c700"
              }
            }
          }
        ],
      },

      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: ['last 2 versions']
                })
              ]
            }
          }
        ]
      },

      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },

      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: 'url?limit=8192'}
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new webpack.DefinePlugin({
      __SERVER__: 'false',
      __CLIENT__: 'true',
    }),

    new MiniCssExtractPlugin({
      filename: devMode? `[name].css`: `[name].[hash].css`
    }),

    new OfflinePlugin({
      autoUpdate: 1000 * 60 * 5,
      ServiceWorker: {
        publicPath: '/sw.js'
      }
    }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/server/index.ejs'),
      template: 'src/app/views/index.html',
      theme: '<%- theme %>',
      metaDom: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>',
      head: config.head,
    })
  ]
}
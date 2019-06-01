const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OfflinePlugin = require('offline-plugin')
const autoprefixer = require('autoprefixer');
const config = require('./index')
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    main: './src/app/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: devMode ? '[name].bundle.js' : '[name].[hash].js',
    publicPath: config.publicPath + '/'
  },
  resolve: {
    alias: {
      '@modules': path.resolve('src/app/modules'),
      '@config': path.resolve('config')
    }
  },
  // resolveLoader: {
  //   moduleExtensions: ["-loader"]
  // },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /(\.css|\.scss|\.less)$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
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
          { loader: `css` },
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'public/index.html'
    })
  ],
}
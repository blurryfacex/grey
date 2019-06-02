const webpack = require('webpack')
const nodemon = require('nodemon')
const Koa = require('koa')
const rimraf = require('rimraf')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const ClientConfig = require('../config/webpack.config')

const config = require('../config')

const compilePromise = (compiler) => {
  return new Promise((resolve, reject) => {
    compiler.plugin('done', (stats) => {
      if (!stats.hasErros()) {
        return resolve()
      }
      return reject('Compliation failed')
    })
  })
}

const app = new Koa()
const WEBPACK_PORT = config.port + 1

const start = async () => {
  rimraf.sync('./dist')

  let public_path = config.publicPath.split(':')
  public_path.pop()
  public_path = public_path.join(':')

  // clientConfig.entry.app.unshift('webpack-hot')
  const script = nodemon({
    script: './dist/server/server.js',
    ignore: ['src', 'scripts', 'config', './*.*', 'build/client']
  })

  script.on('restart', () => {
    console.log('Server side app has been restarted')
  })

  script.on('quit', () => {
    console.log('Process ended')
    process.exit()
  })

  script.on('error', () => {
    console.log('An error occured Exiting')
    process.exit()
  })
}

start()
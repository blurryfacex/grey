const webpack = require('webpack')
const nodemon = require('nodemon')
const Koa = require('koa')
const koaStatic = require('koa-static')
const rimraf = require('rimraf')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const clientConfig = require('../config/webpack/client.dev')
const serverConfig = require('../config/webpack/server.dev')

const config = require('../config')

const compilePromise = (compiler) => {
  return new Promise((resolve, reject) => {
    compiler.plugin('done', (stats) => {
      if (!stats.hasErros()) {
        return resolve()
      }
      return reject('Compilation failed')
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

  clientConfig.entry.app.unshift(`webpack-hot-middleware/client?path=${public_path}:${WEBPACK_PORT}/__webpack_hmr`)

  clientConfig.output.hotUpdateMainFilename = `[hash].hot-update.json`
  clientConfig.output.hotUpdateChunkFilename = `[id].[hash].hot-update.js`
  clientConfig.output.publicPath = `${public_path}:${WEBPACK_PORT}/`

  serverConfig.output.publicPath = `${public_path}:${WEBPACK_PORT}/`

  const clientCompiler = webpack([clientConfig, serverConfig])

  const _clientCompiler = clientCompiler.compilers[0]
  const _serverCompiler = clientCompiler.compilers[1]

  const clientPromise = compilePromise(_clientCompiler)
  const serverPromise = compilePromise(_serverCompiler)

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    return next()
  })

  app.use(webpackDevMiddleware(_clientCompiler), {
    publicPath: clientConfig.output.publicPath
  })

  app.use(webpackHotMiddleware(_clientCompiler))

  app.use(koaStatic('../dist/client'))

  app.listen(WEBPACK_PORT)

  _serverCompiler.watch({ ignored: /node_modules/ }, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(serverConfig.stats))
      return
    }
    if (error) {
      console.log(error, 'error')
    }
  })

  await serverPromise
  await clientPromise

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
    process.exit(1)
  })
}

start()
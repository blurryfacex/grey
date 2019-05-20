const Koa = require('koa')
const mongoose = require('mongoose')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchema } = require('./database/init')
const R = require('ramda')

const MIDDLEWARES = [ 'router']

const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middleware/${name}`)
    )
  )(MIDDLEWARES)
}

async function start () {
  await connect()
  initSchema()

  const app = new Koa()
  await useMiddlewares(app)

  app.listen(4555)
}

start()

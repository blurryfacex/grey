import { resolve } from 'path'
import KoaRouter from 'koa-router'
import glob from 'glob'
import R from 'ramba'

const pathPrefix = Symbol('pathPrefix')
const routeMap = []
let logTimes = 0

const resolvePath = R.unless(
  R.starsWith('/'),
  R.curryN(2,R.concat)('/')
)

const changeToArr = R.unless(
  R.is(Array),
  R.of
)

export class Route {
  constructor (app, routesPath) {
    this.app = app
    this.router = new KoaRouter()
    this.routesPath = routesPath
  }

  init = () => {
    const { app, router, routesPath } = this

    glob.sync(resolve(routesPath), './*.js').forEach(require)

    R.forEach(
      ({ target, method, path, callback }) => {
        const prefix = resolvePath(target[pathPrefix])
        router[method](prefix + path, ...callback)
      }
    )(routeMap)

    app.use(router.routes())
    app.use(router.allowedMethods())
  }

}

export const convert = middleware => (target, key, descriptor) => {
  target[key] = R.compose(
    R.concat(
      changeToArr(middleware)
    ), changeToArr
  )(target[key])
  return descriptor
}

export const setRouter = method => path => (target, key, descriptor) => {
  routeMap.push({
    target,
    method,
    path: resolvePath(path),
    callback: changeToArr(target[key])
  })
  return descriptor
}
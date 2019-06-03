import Koa from 'koa'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import koaStatic from 'koa-static'

import { port } from '@config'
import render from './render'

const app = new Koa()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(koaStatic('./dist/client'))
app.use(koaStatic('./public'))

app.use(function (req, res, next) {
  if (req && req.headers && req.headers['user-agent']) {
    global.ua = req.headers['user-agent']
  }

  var exec_start_at = Date.now()
  var _send = res.send
  res.send = function () {
    res.set('X-Execution-Time', String(Date.now() - exec_start_at) + 'ms')
    return _send.apply(res, arguments)
  }
  next()
})

app.listen(port)
console.log('server started on port' + port)
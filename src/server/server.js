import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'

import { port } from '@config'
import render from './render'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(express.static('./dist/client'))
app.use(express.static('./public'))

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

app.get('*', async function (req, res) {

  let { context, html, meta, reduxState, user } = await render(req, res);

  res.status(context.code);

  if (context.redirect) {
    res.redirect(context.redirect);
  } else {
    res.render('../dist/server/index.ejs', {
      html,
      reduxState,
      meta,
      theme: user && user.theme == 2 ? 'dark-theme' : 'light-theme'
    });
  }

  res.end();

});

app.listen(port)
console.log('server started on port' + port)
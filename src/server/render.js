import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { Provider } from 'react-redux'
import MetaTagsServer from 'react-meta-tags/server'
import { MetaTagsContext } from 'react-meta-tags'

import createStore from '../app/store'
import createRouter from '../app/router'
import initData from '../app/init-data'
import { authCookieName } from '@config'

export default (req, res) => {
  return new Promise(async (resolve, reject) => {
    let params = {
      context: {
        code: 200
      },
      html: '',
      meta: '',
      reduxState: '{}'
    }

    let store = createStore()

    let [ err, user ] = await initData(store, req.cookies[authCookieName] || '')

    if (err && err.blocked) {
      res.clearCookie(authCookieName)
      params.context = { code: 403, redirect: '/notice?notice=block_account' }
      resolve(params)
      return;
    } else if (err && err.message && err.message == 'invalid token') {
      res.clearCookie(authCookieName)
      params.context = { code: 403, redirect: '/notice?notice=invalid_token' }
    }

    params.user = user || null
    const router = createRouter(user)

    let route = null, match = null

    router.list.some(_route => {
      let _match = matchPath(req.path, _route)
      if (_match) {
        _match.search = req._parseOriginalUrl.search || ''
        route = _route
        match = _match
      }
      return _match
    })

    if (route.enter == 'tourists' && user) {
      params.context = { code: 403, redirect: '/' }
      resolve(params)
      return;
    } else if (route.enter == 'member' && !user) {
      params.context = { code: 403, redirect: '/' }
      resolve(params)
      return;
    }

    if (route.loadData) {
      params.context = await route.loadData({ store, match, res, req, user})
    }

    const Router = router.dom
    const metaTagsInstance = MetaTagsServer()

    await route.component.preload()

    params.html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <MetaTagsContext extract={metaTagsInstance.extract}>
          <StaticRouter location={req.url} context={params.context}>
            <Router />
          </StaticRouter>
        </MetaTagsContext>
      </Provider>
    )

    params.meta = metaTagsInstance.renderToString()
    params.reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c')

    store = null
    resolve(params)
  })
}
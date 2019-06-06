import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { matchPath } from 'react-router'

import createRouter from '../app/router'

import * as offlinePluginRuntime from 'offline-plugin/runtime'

if (process.env.NODE_ENV != 'development') {
  offlinePluginRuntime.install()
}

(async function() {

  const router = createRouter()
  const RouterDom = router.dom

  let _route = null

  router.list.some(route => {
    let match = matchPath(window.location.pathname, route)
    if (match && match.path) {
      _route = route
      return true
    }
  })

  await _route.component.preload()

  ReactDOM.hydrate(
    <Provider>
      <BrowserRouter>
        {RouterDom()}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept()
    }
  }
}())
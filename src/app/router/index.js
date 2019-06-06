import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import Head from '@components/Header'
import routerList from './list'

export default (user, logPageView = () => {}) => {

  const enter = {
    everybody: (Layout, props, route) => {
      logPageView()
      return <Layout {...props} />
    }
  }



  let router = () => (
    <div>
      <Switch>
        {routerList.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.head}/>
          )
        )}
      </Switch>

      <Switch>
        {routerList.map((route, index) => {
          if (route.component) {
            return (<Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props => enter[router.enter](route.component, props, route)}
            />)
          }
        })}
      </Switch>

    </div>
  )

  return {
    list: routerList,
    dom: router
  }
}
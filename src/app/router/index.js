import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import Head from '@/components/head'
import Loading from '@/components/ui/loading'

export default user => {

  const triggerEnter = (Layout, props) => {
    return <Layout {...props} />
  }

  const routeArr = [
    {
      path: '/',
      exact: true,
      head: Head,
      component: Loadable({
        loader: () => import('@/app/pages/front/index'),
        // loading: () => <Loading />
      }),
      enter: triggerEnter
    }
  ]

  let router = () => (
    <div>
      <Switch>
        {routeArr.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.head}/>
          )
        )}
      </Switch>

      <Switch>
        {routeArr.map((route, index) => {
          if (route.component) {
            return <Route key={index} path={route.path} exact={route.exact} component={props => route.enter(route.component, props)}/>
          }
        })}
      </Switch>
    </div>
  )

  return {
    list: routeArr,
    dom: router
  }
}
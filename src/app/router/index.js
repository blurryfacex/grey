import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

// 生成异步加载组件
// import asyncRouteComponent from '../components/generateAsyncComponent.js';

import Head from '@components/head'
import Loading from '@components/ui/loading'

import HomeLoadData from '../pages/home/load-data'
import PostsDetailLoadData from '../pages/posts-detail/load-data'
import routeArr from './list'
/**
 * 创建路由
 * @param  {Object} userinfo 用户信息，以此判断用户是否是登录状态，并控制页面访问权限
 * @return {[type]}
 */
export default (user, logPageView = () => {}) => {
  // 登录用户才能访问
  const enter = {
    everybody: (Layout, props, route) => {
      logPageView()
      return <Layout {...props} />
    },
  }

  let router = () => (
    <>
      <Switch>
        {routeArr.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.head} />
        ))}
      </Switch>

      <div className="container">
        <Switch>
          {routeArr.map((route, index) => {
            if (route.component) {
              return(
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={props => enter[route.enter](route.component, props, route)}
                />)
            }
          })}
        </Switch>
      </div>

    </>
  )

  return {
    list: routeArr,
    dom: router
  }
}

import React from 'react'
import Head from '@components/head'
import Loadable from 'react-loadable'
import Loading from '@components/ui/loading'
export default [
  {
    path: '/',
    exact: true,
    head: Head,
    // component: asyncRouteComponent({
    //   loader: () => import('../pages/front/home')
    // }),
    component: Loadable({
      loader: () => import('../pages/front/home'),
      loading: () => <Loading />
    }),
    enter: 'everybody',
  },

  {
    path: '**',
    head: Head,
    // component: asyncRouteComponent({
    //   loader: () => import('../pages/front/not-found')
    // }),
    component: Loadable({
      loader: () => import('../pages/front/not-found'),
      loading: () => <Loading />
    }),
    enter: 'everybody'
  }
]
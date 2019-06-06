import React from 'react'
import Loadable from 'react-loadable'

import Head from '@components/Header'

export default [
  {
    path: '/',
    exact: true,
    head: Head,
    component: Loadable({
      loader: () => import('../pages/front/index'),
      // loading: () => <Loading />
    }),
    // loadData: HomeLoadData,
    enter: 'everybody'
  }
]
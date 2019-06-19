import React from 'react'
import { withRouter } from 'react-router-dom'
import ad from '@components/ad'
import Carousel from '@components/carousel'

// 壳组件
import Shell from '@components/shell'
import Meta from '@components/meta'
import PostsList from '@components/posts/list'


@Shell
@withRouter
export default class Home extends React.PureComponent {

  render() {
    return (
      <div>
        <Meta title="首页" />
        <Carousel />
        <div className="w">

        </div>
      </div>
    )
  }
}

import React from 'react'
import { withRouter } from 'react-router-dom'
import ad from '@components/ad'

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
        {/*<PostsList*/}
          {/*id={'home'}*/}
          {/*filter={{*/}
            {/*sort_by: 'create_at',*/}
            {/*deleted: false,*/}
            {/*weaken: false*/}
          {/*}}*/}
        {/*/>*/}
      </div>
    )
  }
}

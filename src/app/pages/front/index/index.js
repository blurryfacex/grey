import React from 'react'
import { withRouter } from 'react-router-dom'


import Shell from '@components/shell'
import Meta from '@components/meta'


@Shell
@withRouter
export default class index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <meta title="首页" />
        <p>123124</p>
      </div>
    )
  }
}
import React from 'react'
import './style.scss'

export default class Head extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="head_logo col-2">
            <a href={'/'}>
              <img src={require('../../../../public/logo.png')} />
            </a>
          </div>
          <div className="head_country col-1">
          12412412
          </div>
          <div className="head_search col-6">
          dfgsdfgdsf
          </div>
          <div className="head_right col-3">
          adsgadsjflkajs
          </div>
        </div>
      </header>
    )
  }
}
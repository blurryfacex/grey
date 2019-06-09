import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { chevronDown } from '@fortawesome/free-solid-svg-icons'
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
          <div className="head_country col-2">
            <span>123</span>
            <span>|</span>
            <span>English</span>

          </div>
          <div className="head_search col-5">
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
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import './index.scss'

@withRouter
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
              <img src='/logo.png' />
            </a>
          </div>
          <div className="head_country col-2">
            <span>123</span>
            <span>|</span>
            <span>English</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="head_search col-5">
            <div className="search">
              <div className="search_input">
                <div className="search_input_left">
                  <div className="options_list" >
                  </div>
                  <div className="">
                    <em>All</em>
                    <FontAwesomeIcon icon={faAngleDown}/>
                  </div>
                </div>
                <div className="search_input_middle">
                </div>
                <div className="search_input_right">
                </div>
              </div>
              <div className="search_click">
                <ul className='search'>
                  <li>xioami</li>
                  <li>xioami</li>
                  <li>xioami</li>
                  <li>xioami</li>
                  <li>xioami</li>
                  <li>xioami</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="head_right col-3">
            adsgadsjflkajs
          </div>
        </div>
      </header>
    )
  }
}
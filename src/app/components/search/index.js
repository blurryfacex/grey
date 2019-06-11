import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

export default class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
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
    )
  }

}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { withRouter } from 'react-router'
import './index.scss'

@withRouter
export default class Head extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      option: 'none'
    }
  }

  optionChange = () => {
    this.setState({
      options: this.state.options === 'none' ? 'block' : 'none'
    })
  }

  render() {
    return (
      <header className="w">
        <div className="head">
          <div className="head_logo">
            <a href={'/'}>
              <img src='/logo.png' />
            </a>
          </div>
          <div className="head_search">
            <div className="head_search_wrap">
              <div className="search_input">
                <div className="search_input_left">
                  <div className="options category" style={{display: this.state.option}}>
                    <ul>
                      <li>124421</li>
                      <li>124421</li>
                      <li>124421</li>
                      <li>124421</li>
                      <li>124421</li>
                      <li>124421</li>
                    </ul>
                  </div>
                  <span onClick={optionChange()}>All</span>
                  <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <div className="search_input_middle">
                  <input placeholder="what are you looking for" />
                </div>
                <div className="search_input_right">
                  <a type="button">
                    <FontAwesomeIcon icon={faSearch}/>
                  </a>
                </div>
              </div>
              <div className="search_btm">
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
                <a href="/"><span>xiaomi></span></a>
              </div>
            </div>
          </div>
          <div className="head_icons">
            <a href="/" className="icon">
              <FontAwesomeIcon className="item" icon={faUser} />
              <span>sign in</span>
            </a>
            <a href="/" className="icon">
              <FontAwesomeIcon className="item" icon={faHeart}/>
              <span>sign in</span>
            </a>
            <a href="/" className="icon">
              <FontAwesomeIcon className="item" icon={faShoppingCart}/>
              <span>sign in</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}
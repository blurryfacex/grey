import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faShoppingCart, faAlignJustify,	 } from '@fortawesome/free-solid-svg-icons'
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

  optionClick = () => {
    this.setState({
      option: this.state.option === 'none' ? 'block' : 'none'
    })
  }

  render() {
    return (
      <>
      <header className="w">
        <div className="head">
          <div className="head_logo">
            <a href={'/'}>
              <img src='/logo.png' />
            </a>
          </div>
          <div className="head_search">
            <div className="search_input">
              <div className="search_input_left" onClick={() => this.optionClick()}>
                <div className="options search_option" style={{display: this.state.option}}>
                  <ul>
                    <li>All</li>
                    <li>Cellphone & Accessories</li>
                    <li>Cameras & Photo Accessories</li>
                    <li>Toys & Hobbies</li>
                    <li>Smart Device & Safety</li>
                    <li>Sports & Outdoor</li>
                    <li>Apparel & Jewelry</li>
                    <li>Computer & Stationery</li>
                    <li>Video & Audio</li>
                    <li>Home & Garden</li>
                    <li>Health & Beauty</li>
                    <li>Car Accessories</li>
                    <li>Test Equipment & Tools</li>
                  </ul>
                </div>
                <span >All</span>
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
      <div className="navigation">
        <nav className="category w">
          <div className="nav_l">
            <div className="nav_title">
              <FontAwesomeIcon className="nav_icon" icon={faAlignJustify} />
              <h5>Shop By Department</h5>
            </div>
            <ul className="nav_bar">
              <li><a>New Arrivals</a></li>
              <li><a>New Arrivals</a></li>
              <li><a>New Arrivals</a></li>
              <li><a>New Arrivals</a></li>
              <li><a>New Arrivals</a></li>
            </ul>
          </div>
          <ul className="nav_r">
            <li><a><span>New Arrivals</span></a></li>
            <li><span>New Arrivals</span><FontAwesomeIcon className="rotate" icon={faAngleDown} /></li>
            <li><span>New Arrivals</span><FontAwesomeIcon icon={faAngleDown}/></li>
            <li><span>New Arrivals</span><FontAwesomeIcon icon={faAngleDown}/></li>
          </ul>
        </nav>
      </div>
      </>
    )
  }
}
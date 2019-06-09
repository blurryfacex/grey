import React from 'react'
import './index.less'

export default class explore extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {

  }

  _getList = () => {

  }

  render () {
    return (
        <div className="container explore">
          <div className="searchBar control-label">
            <div className="searchRight">
              <input type="text" className="search"/>
              <button className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="list">
            <div className="columns">
              <a className="column" >213</a>
              <a className="column" >123</a>
              <a className="column" >123</a>
              <a className="column" >123124</a>
              <a className="column" >123124</a>
              <a className="column" >123124</a>
              <a className="column" >123124</a>
            </div>
          </div>
        </div>
    )
  }
}
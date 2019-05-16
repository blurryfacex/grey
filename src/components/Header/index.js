import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'

import './index.less'

export default class Header extends React.Component {

  render () {
    return (
        <Navbar className="navbar-dark bg-dark " collapseOnSelect expand="lg" variant="dark" >
          <div className="container">
          <Navbar.Brand href="/">b&B</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#/" className="nav">首页</Nav.Link>
              <Nav.Link href="/#/explore" className="nav">探索</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
    )
  }
}
import React from 'react'
import App from './App'
import { HashRouter, Route } from 'react-router-dom'
import index from "./pages/index"
import Home from "./home"

export default class ERouter extends React.Component {

  render () {
    return (
      <HashRouter>
        <App>
            <Route path="/" render={() =>
              <Home>
                <Route path="/" component={index}/>
              </Home>
            }/>
        </App>
      </HashRouter>
    )
  }

}
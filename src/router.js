import React from 'react'
import App from './App'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import index from "./pages/front/index"
import Home from "./home"
import explore from "./pages/front/explore"

export default class ERouter extends React.Component {

  render () {
    return (
      <HashRouter>
        <App>
            <Route path="/" render={() =>
              <Home>
                <Switch>
                  <Route path="/explore" component={explore} />
                  <Route path="/" component={index} />
                </Switch>
              </Home>
            }/>
        </App>
      </HashRouter>
    )
  }
}
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import parseUrl  from '@utils/parse-url'

const Shell = Component => {
  if (!Component.loadData) {
    Component.loadData = ({ store, match }) => {
      return new Promise(async function(resolve, reject) {
        resolve({ code: 200})
      })
    }
  }

  class Shell extends React.Component {
    static defaultProps = {
      loadData: Component.loadData || null
    }

    constructor(props) {
      super(props)
      const { search } = props.location
      this.props.location.params = search ? parseUrl(search) : null
    }

    render() {
      return (
        <div>
          <Component { ...this.props }/>
        </div>
      )
    }
  }

  Shell.contextTypes = {}
  Shell.propTypes = {}

  const mapStateToProps = state => {
    return {}
  }

  const mapDispatchToProps = (dispatch, props) => {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Shell)
}

export default Shell
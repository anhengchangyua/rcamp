import React from 'react'
import Login from '../pages/LoginPage/Login'
import * as appCreators from '../actions/app'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = state => {
  const { app } = state
  return { app }
}
const mapDispathToProps = dispatch => {
  const appActions = bindActionCreators(appCreators, dispatch)
  return { appActions }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LoginContainer)

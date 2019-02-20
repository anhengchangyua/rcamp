import React from 'react'
import Register from '../pages/RegisterPage/Register'
import * as appCreators from '../actions/app'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class RegisterContainer extends React.Component {
  render() {
    return <Register {...this.props} />
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
)(RegisterContainer)

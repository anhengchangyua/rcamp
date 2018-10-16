import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Cover from '../pages/CoverPage/Cover'
import { connect } from 'react-redux'
import { Text } from 'react-native'
class CoverContainer extends React.Component {
  static navigationOptions = {
    title: '发现',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-pricetags" size={25} color={tintColor} />
    )
  }

  render() {
    return <Cover {...this.props} />
  }
}

const mapStateToProps = state => {
  const { cover } = state
  return { cover }
}
const mapDispathToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(CoverContainer)

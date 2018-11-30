import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Cover from '../pages/CoverPage/Cover';
import * as coverCreators from '../actions/cover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CoverContainer extends React.Component {
  static navigationOptions = {
    title: '发现',
    tabBarIcon: ({ tintColor }) => <Icon name="md-pricetags" size={25} color={tintColor} />,
  };

  render() {
    return <Cover {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { cover } = state;
  return { cover };
};
const mapDispathToProps = dispatch => {
  const coverActions = bindActionCreators(coverCreators, dispatch);
  return { coverActions };
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(CoverContainer);

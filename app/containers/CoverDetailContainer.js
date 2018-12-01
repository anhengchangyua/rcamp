import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coverCreators from '../actions/cover';
import CoverDetail from '../pages/CoverPage/CoverDetail';

class CoverDetailContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
  });

  render() {
    return <CoverDetail {...this.props} />;
  }
}
const mapStateToProps = state => {
  const { cover } = state;
  return { cover };
};

const mapDispathToProps = dispatch => {
  const coverDetailActions = bindActionCreators(coverCreators, dispatch);
  return { coverDetailActions };
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(CoverDetailContainer);

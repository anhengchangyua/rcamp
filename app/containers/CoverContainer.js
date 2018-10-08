import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
class CoverContainer extends React.Component {
  static navigationOptions = {
    title: '发现',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-pricetags" size={25} color={tintColor} />
    )
  };

  render() {
    return <Text>发现</Text>;
  }
}

export default CoverContainer;

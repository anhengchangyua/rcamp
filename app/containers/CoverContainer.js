import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
class CoverContainer extends React.Component {
  static navigationOptions = {
    title: '分类',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-pricetags" size={25} color={tintColor} />
    )
  };

  render() {
    return <Text>这是分类</Text>;
  }
}

export default CoverContainer;

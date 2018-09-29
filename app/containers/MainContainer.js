import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
class MainContainer extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} color={tintColor} />
    )
  };

  render() {
    return <Text>这是首页</Text>;
  }
}

export default MainContainer;

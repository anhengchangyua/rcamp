import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
class AboutContainer extends React.Component {
  static navigationOptions = {
    title: '关于',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-information-circle" size={25} color={tintColor} />
    )
  };

  render() {
    return <Text>这是关于</Text>;
  }
}

export default AboutContainer;

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

class CoverDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name
  });
  render() {
    return (
      <SafeAreaView>
        <Text> 测试中 </Text>
      </SafeAreaView>
    );
  }
}

export default CoverDetail;

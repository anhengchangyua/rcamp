import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
  ListView,
  View,
  Dimensions
} from 'react-native';
import Main from '../pages/MainPage/Main';

class MainContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={25} color={tintColor} />
      ),
      headerRight: (
        <TouchableWithoutFeedback onPress={navigation.getParam('imageOnclick')}>
          <Image
            style={{ width: 38, height: 38, marginRight: 12 }}
            source={require('../assets/search.png')}
          />
        </TouchableWithoutFeedback>
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ imageOnclick: this._imageOnclick });
  }

  _imageOnclick = () => {
    Alert.alert('onPressButton');
  };
  render() {
    return <Main />;
  }
}

export default MainContainer;

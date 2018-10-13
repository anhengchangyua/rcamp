import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  BackHandler,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
class AirticalDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.item.title,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" size={25} color={tintColor} />
    )
  });
  constructor(props) {
    super(props);
    this.state = {
      isShareModal: false
    };
  }

  render() {
    const { link } = this.props.navigation.state.params.item.item;
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          ref={ref => {
            this.webview = ref;
          }}
          style={styles.base}
          source={{ uri: link }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center',
    marginTop: 5
  },
  shareParent: {
    flexDirection: 'row',
    marginTop: 20
  },
  shareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});
export default AirticalDetail;

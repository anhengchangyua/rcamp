import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Animated,
  Dimensions
} from 'react-native'
import bgSrc from '../../assets/img/wallpaper.png'
import logoImg from '../../assets/img/logo.png'

import userName from '../../assets/img/username.png'
import passWord from '../../assets/img/password.png'
import UserInput from '../../components/UserInput'
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
const MARGIN = 40
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPass: true,
      press: false
    }
  }
  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false })
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <View style={styles.container}>
          <Image source={logoImg} style={styles.image} />
          <Text style={styles.text}>WAN ANDROID</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, alignItems: 'center' }}
        >
          <UserInput
            source={userName}
            placeholder="用户名"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <UserInput
            source={passWord}
            secureTextEntry={this.state.showPass}
            placeholder="密码"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </KeyboardAvoidingView>
        <View style={styles.container1}>
          <Animated.View style={styles.animated}>
            <TouchableOpacity
              style={styles.button}
              onPress={this._onPress}
              activeOpacity={1}
            >
              <Text style={styles.text}>登录</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  animated: {
    width: DEVICE_WIDTH - MARGIN
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})
export default Login

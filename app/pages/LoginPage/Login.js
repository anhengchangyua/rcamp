import React from 'react'
import request from '../../utils/request'
import { putUserInfo, loadAllInfo } from '../../realm/UserInfoSchema'
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
import ToastUtil from '../../utils/ToastUtil'
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
      press: false,
      passWord: null,
      userName: null
    }
  }

  componentDidMount() {
    const data = loadAllInfo('UserData')
    console.log(data[0])
    if (data[0]) {
      this.props.navigation.navigate('App')
    }
  }

  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false })
  }
  _onChangeText = inputData => {
    this.setState({
      passWord: inputData
    })
  }

  _onChangeText1 = inputData => {
    this.setState({
      userName: inputData
    })
  }
  _onPress = () => {
    const params = {
      username: this.state.userName,
      password: this.state.passWord
    }
    request.post('http://www.wanandroid.com/user/login', params).then(res => {
      if (res.errorCode < 0) {
        ToastUtil.showShort(res.errorMsg)
      } else {
        ToastUtil.showShort('登录成功')
        putUserInfo('UserData', res.data)
        this.props.navigation.navigate('App')
        console.log(loadAllInfo('UserData'))
      }
    })
  }

  _onHandleRegister = () => {
    this.props.navigation.navigate('register')
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
            _onChangeText={this._onChangeText1}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <UserInput
            source={passWord}
            secureTextEntry={this.state.showPass}
            placeholder="密码"
            _onChangeText={this._onChangeText}
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
            <View style={{ flexDirection: 'row', padding: 20, height: 60 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>没有账号?</Text>
              </View>
              <TouchableOpacity
                style={styles.register}
                onPress={this._onHandleRegister}
                activeOpacity={1}
              >
                <Text style={styles.textRegister}>注册</Text>
              </TouchableOpacity>
            </View>
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
  register: {
    height: MARGIN,
    alignItems: 'flex-end'
  },
  textRegister: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
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

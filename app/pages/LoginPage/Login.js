import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, KeyboardAvoidingView } from 'react-native';
import bgSrc from '../../assets/img/wallpaper.png';
import logoImg from '../../assets/img/logo.png';
import userName from '../../assets/img/username.png';
import passWord from '../../assets/img/password.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import UserInput from '../../components/UserInput';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
  }
  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  };
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <View style={styles.container}>
          <Image source={logoImg} style={styles.image} />
          <Text style={styles.text}>WAN ANDROID</Text>
        </View>
        <KeyboardAvoidingView behavior="position" style={{ flex: 2, alignItems: 'center' }}>
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
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
export default Login;

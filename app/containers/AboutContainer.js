/*
 * @Author: zhangwy 
 * @Date: 2018-10-08 11:03:10 
 * @Description:  关于我的container页面
 * @Last Modified by: zhangwy
 * @Last Modified time: 2018-10-08 11:04:55
 */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutMe from '../pages/MePage/AboutMe';
class AboutContainer extends React.Component {
  static navigationOptions = {
    title: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-information-circle" size={25} color={tintColor} />
    )
  };

  render() {
    return <AboutMe />;
  }
}

export default AboutContainer;

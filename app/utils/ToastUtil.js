/*
 * @Author: zhangwy 
 * @Date: 2018-10-09 19:30:11 
 * @Description: 
 * @Last Modified by:   zhangwy 
 * @Last Modified time: 2018-10-09 19:30:11 
 */

import { Alert, ToastAndroid, Platform } from 'react-native';

const showShort = (content, isAlert) => {
  if (!content) {
    return;
  }
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert('提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
  }
};

const showLong = (content, isAlert) => {
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert('提示', content.toString());
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.LONG);
  }
};

export default {
  showShort,
  showLong
};

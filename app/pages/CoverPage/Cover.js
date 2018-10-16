import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet, FlatList, View } from 'react-native'
import { List } from 'react-native-elements'
import CoverItem from '../../components/CoverItem'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]
class Cover extends Component {
  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={true} //是否显示垂直滚动条
        showsHorizontalScrollIndicator={false} //是否显示水平滚动条
        numColumns={1} //每行显示1个
        renderItem={this.renderRow} //每行显示一项
        enableEmptySections={true} //数据可以为空
        keyExtractor={(item, index) => (item.key = index)}
        data={list}
      />
    )
  }

  renderRow = item => {
    return <CoverItem navigation={this.props.navigation} item={item} />
  }
}

export default Cover

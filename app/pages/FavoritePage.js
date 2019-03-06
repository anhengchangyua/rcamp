import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import RequestUtil from '../utils/RequestUtils'
import { FAVORITE_LIST } from '../constants/Urls'
import { SafeAreaView } from 'react-navigation'
class FavoritePage extends Component {
  constructor() {
    super()
    this.state = {
      favoriteList: []
    }
  }
  componentDidMount() {
    RequestUtil.request(FAVORITE_LIST, 'GET').then(res => {
      console.log('resresres', res.data.datas)
      this.setState({
        favoriteList: res.data.datas
      })
    })
  }

  render() {
    const { favoriteList } = this.state
    return (
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          renderItem={this.renderRow}
          enableEmptySections={true}
          keyExtractor={(item, index) => (item.key = index)}
          data={favoriteList}
        />
      </SafeAreaView>
    )
  }

  renderRow = item => {
    console.log('item', item)
    return (
      <View>
        <Text>{item.item.link}</Text>
      </View>
    )
  }
}

export default FavoritePage

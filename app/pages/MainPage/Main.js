import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native'

import ListItem from '../../components/ListItem'

const { width } = Dimensions.get('window')

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
let pages = 0
class Main extends Component {
  //构造函数
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoreMoreing: 'LoreMoreing',
      lists: false,
      dataSource: []
    }
    this.responseData = []
  }

  componentDidMount() {
    this.setState({
      lists: true
    })
    this._Refresh()
  }

  _Refresh = () => {
    this.setState({
      refreshing: true
    })
    this.props.homeActions.requestHomeList(false, true, false, 0)
    this.responseData = this.props.home.homeList
    this.setState({
      refreshing: false,
      dataSource: this.responseData
    })
    this.isLoreMore = false
  }

  isLoreMore = false
  LoreMore = () => {
    if (this.isLoreMore == false) {
      this.setState({
        isLoreMoreing: 'LoreMoreing'
      })
      this.isLoreMore = true
      setTimeout(() => {
        this.setState({
          isLoreMoreing: 'LoreMoreEmpty'
        })
      }, 500)
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false} //是否显示垂直滚动条
            showsHorizontalScrollIndicator={false} //是否显示水平滚动条
            numColumns={1} //每行显示1个
            ListHeaderComponent={this.renderHeader} //头部
            ListFooterComponent={this.renderFooter} //尾巴
            renderItem={this.renderRow} //每行显示一项
            enableEmptySections={true} //数据可以为空
            keyExtractor={(item, index) => (item.key = index)}
            onEndReachedThreshold={0.2} //执行上啦的时候10%执行
            onEndReached={this.LoreMore}
            data={
              this.state.lists
                ? this.props.home.homeList
                : this.state.dataSource
            }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this._Refresh()}
                title="Loading..."
              />
            }
          />
        </View>
      </View>
    )
  }

  renderRow = item => {
    return <ListItem item={item} />
  }

  renderHeader = () => {
    return (
      <View
        style={{
          width: width,
          height: 160
        }}
      >
        <Swiper
          style={styles.wrapper}
          horizontal={true}
          autoplay={!__DEV__ ? true : false}
        >
          <View style={styles.slide1}>
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/1.jpg')}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/2.jpg')}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/3.jpg')}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    )
  }

  renderFooter = () => {
    if (
      // this.state.dataSource.length != 0 &&
      this.state.isLoreMoreing == 'LoreMoreing'
    ) {
      return (
        <View
          style={{
            height: 44,
            backgroundColor: 'rgb(200,200,200)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>{'正在加载....'}</Text>
        </View>
      )
    } else if (this.state.isLoreMoreing == 'LoreMoreEmpty') {
      return (
        <View
          style={{
            height: 22,
            marginTop: 10,
            backgroundColor: 'rgb(200,200,200)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>{'暂无更多'}</Text>
        </View>
      )
    } else {
      return null
    }
  }
}

export default Main

import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import {
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  View,
  Dimensions
} from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30
  }
})

var ITEM_HEIGHT = 100

class Main extends Component {
  _flatList

  _renderItem = item => {
    var txt = '第' + item.index + '个' + ' title=' + item.item.title
    var bgColor = item.index % 2 == 0 ? 'red' : 'blue'
    return (
      <Text
        style={[
          { flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor },
          styles.txt
        ]}
      >
        {txt}
      </Text>
    )
  }

  _header = () => {
    return (
      <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>
    )
  }

  _footer = () => {
    return (
      <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>
    )
  }

  _separator = () => {
    return <View style={{ height: 2, backgroundColor: 'yellow' }} />
  }

  render() {
    var data = []
    for (var i = 0; i < 100; i++) {
      data.push({ key: i, title: i + '' })
    }

    return (
      <View
        style={{
          width: width,
          flex: 1,
          backgroundColor: '#fff'
        }}
      >
        <Swiper
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide1}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/1.jpg')}
            />
          </View>
          <View
            style={styles.slide2}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/2.jpg')}
            />
          </View>
          <View
            style={styles.slide3}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/3.jpg')}
            />
          </View>
          <View
            style={styles.slide4}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              style={{ width: width, height: 160 }}
              resizeMode="stretch"
              source={require('../../assets/img/4.jpg')}
            />
          </View>
        </Swiper>

        <FlatList
          style={{
            width: width,
            flex: 1,
            backgroundColor: '#fff'
          }}
          ref={flatList => (this._flatList = flatList)}
          ListHeaderComponent={this._header}
          ListFooterComponent={this._footer}
          ItemSeparatorComponent={this._separator}
          renderItem={this._renderItem}
          data={data}
        />
      </View>
    )
  }
}

export default Main

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native';

import ListItem from '../../components/ListItem';

const { width } = Dimensions.get('window');

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
});
let pages = 0;
class Main extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentDidMount() {
    this._Refresh();
  }

  _Refresh = () => {
    this.setState({ page: 0 });
    this.props.homeActions.requestHomeList(true, false, false, 0);
    this.props.homeActions.requestBannerList(true);
  };

  _LoreMore = () => {
    const { loadmore, isEnd } = this.props.home;
    if (!loadmore) {
      if (!isEnd) {
        let page = this.state.page;
        page++;
        this.setState({ page: page });
        this.props.homeActions.requestHomeList(false, false, true, page);
      }
    }
  };

  render() {
    const { homeList, isRefreshing } = this.props.home;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={true} //是否显示垂直滚动条
            showsHorizontalScrollIndicator={false} //是否显示水平滚动条
            numColumns={1} //每行显示1个
            ListHeaderComponent={this.renderHeader} //头部
            ListFooterComponent={this.renderFooter} //尾巴
            renderItem={this.renderRow} //每行显示一项
            enableEmptySections={true} //数据可以为空
            keyExtractor={(item, index) => (item.key = index)}
            onEndReachedThreshold={0.1}
            onEndReached={() => this._LoreMore()}
            data={homeList}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this._Refresh}
              />
            }
          />
        </View>
      </View>
    );
  }

  renderRow = item => {
    return <ListItem navigation={this.props.navigation} item={item} />;
  };

  renderHeader = () => {
    const { bannerList } = this.props.home;
    return (
      <View style={{ width: width, height: 160 }}>
        <Swiper
          style={styles.wrapper}
          horizontal={true}
          autoplay={!__DEV__ ? true : false}
        >
          {bannerList.forEach((item, index) => (
            <View>
              <Image
                style={{ width: width, height: 160 }}
                resizeMode="stretch"
                source={{ uri: item.imagePath }}
              />
            </View>
          ))}

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
    );
  };

  renderFooter = () => {
    const { isLoadMore } = this.props.home;
    if (isLoadMore) {
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
      );
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
      );
    } else {
      return null;
    }
  };
}

export default Main;

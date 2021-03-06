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
  DeviceEventEmitter,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ListItem from '../../components/ListItem';

const { width } = Dimensions.get('window');

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
    this.props.homeActions.requestHomeList(true, true, false, 0);
    this.props.homeActions.requestBannerList(true);
  };

  _LoreMore = () => {
    const { isLoadmore, isEnd } = this.props.home;
    if (!isLoadmore) {
      if (!isEnd) {
        let page = this.state.page;
        this.setState({ page: page++ });
        this.props.homeActions.requestHomeList(false, true, true, page);
      }
    }
  };
  renderFooter = () => {
    const { isLoadMore, isEnd } = this.props.home;
    if (isLoadMore) {
      return (
        <View
          style={{
            height: 44,
            backgroundColor: 'rgb(200,200,200)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{'正在加载....'}</Text>
        </View>
      );
    } else if (isEnd) {
      return (
        <View
          style={{
            height: 22,
            marginTop: 10,
            backgroundColor: 'rgb(200,200,200)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{'暂无更多'}</Text>
        </View>
      );
    } else {
      return null;
    }
  };
  render() {
    const { homeList, isRefreshing } = this.props.home;

    return (
      <SafeAreaView style={{ flex: 1 }}>
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
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={this._Refresh} />}
        />
      </SafeAreaView>
    );
  }

  renderRow = item => {
    return <ListItem navigation={this.props.navigation} item={item} />;
  };

  handleBannerItemClick = item => {};

  renderHeader = () => {
    const { bannerList } = this.props.home;
    return (
      <View style={{ width: width, height: 160 }}>
        {bannerList.length > 0 && (
          <Swiper horizontal={true} autoplay={false}>
            {bannerList.map((item, index) => (
              <View key={index} onClick={this.handleBannerItemClick}>
                <Image
                  style={{ width: width, height: 160 }}
                  resizeMode="stretch"
                  source={{ uri: item.imagePath }}
                />
              </View>
            ))}
          </Swiper>
        )}
      </View>
    );
  };
}

export default Main;

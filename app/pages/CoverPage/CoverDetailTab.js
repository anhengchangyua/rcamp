import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  View,
  FlatList,
  Modal,
} from 'react-native';
import CoverDetailItem from '../../components/CoverDetailItem';

class CoverDetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentDidMount() {
    this._Refresh();
  }

  renderFooter = () => {
    const { isLoadMore } = this.props.cover;
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
    } else if (this.state.isLoreMoreing == 'LoreMoreEmpty') {
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
  _LoreMore = () => {
    const { isLoadmore, isEnd } = this.props.cover;
    const { tabIndex } = this.props;
    if (!isLoadmore) {
      if (!isEnd) {
        let page = this.state.page;
        page++;
        this.setState({ page: page });
        this.props.coverDetailActions.requestCoverDetail(false, true, false, page, tabIndex);
      }
    }
  };
  _Refresh = () => {
    const { tabIndex } = this.props;
    this.setState({ page: 0 });
    this.props.coverDetailActions.requestCoverDetail(false, true, false, 0, tabIndex);
  };

  renderRow = item => {
    return <CoverDetailItem navigation={this.props.navigation} item={item} />;
  };
  render() {
    const { tabIndex } = this.props;
    const { coverDetailList, isRefreshing } = this.props.cover;
    return (
      <View style={styles.base}>
        <FlatList
          showsVerticalScrollIndicator={true} //是否显示垂直滚动条
          showsHorizontalScrollIndicator={false} //是否显示水平滚动条
          numColumns={1} //每行显示1个
          renderItem={this.renderRow} //每行显示一项
          ListFooterComponent={this.renderFooter} //尾巴
          enableEmptySections={true} //数据可以为空
          keyExtractor={(item, index) => (item.key = index)}
          onEndReachedThreshold={0.1}
          onEndReached={this._LoreMore}
          data={coverDetailList[tabIndex] && coverDetailList[tabIndex]}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={this._Refresh} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
export default CoverDetailTab;

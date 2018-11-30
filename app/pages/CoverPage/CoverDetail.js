import React, { Component } from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CoverDetailItem from '../../components/CoverDetailItem';
class CoverDetail extends Component {
  componentDidMount() {
    const children = this.props.navigation.state.params.item.children;
    console.log('nnnn', children);
  }

  renderRow = item => {
    return <CoverDetailItem navigation={this.props.navigation} item={item} />;
  };

  render() {
    const { children } = this.props.navigation.state.params.item;
    const ListsView =
      children &&
      children.map((item, index) => {
        return (
          <View key={item.id} tabLabel={item.name} style={styles.base}>
            {this.renderFlatLst(item.id)}
          </View>
        );
      });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar tabStyle={styles.tab} textStyle={styles.tabText} />}
          tabBarBackgroundColor="#fcfcfc"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
          {ListsView}
        </ScrollableTabView>
      </SafeAreaView>
    );
  }

  renderFlatLst(titleId) {
    this.props.coverDetailActions.requestCoverDetail(true, titleId);
    console.log('SDSD', titleId);
    const { coverDetailList } = this.props.cover;
    return (
      <FlatList
        showsVerticalScrollIndicator={true} //是否显示垂直滚动条
        showsHorizontalScrollIndicator={false} //是否显示水平滚动条
        numColumns={1} //每行显示1个
        renderItem={this.renderRow} //每行显示一项
        enableEmptySections={true} //数据可以为空
        keyExtractor={(item, index) => (item.key = index)}
        onEndReachedThreshold={0.1}
        data={coverDetailList}
      />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  drawerTitleContent: {
    height: 120,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#3e9ce9',
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  drawerTitle: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fcfcfc',
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    color: 'black',
  },
  timeAgo: {
    fontSize: 14,
    color: '#aaaaaa',
    marginTop: 5,
  },
  refreshControlBase: {
    backgroundColor: 'transparent',
  },
  tab: {
    paddingBottom: 0,
  },
  tabText: {
    fontSize: 16,
  },
  tabBarUnderline: {
    backgroundColor: '#3e9ce9',
    height: 2,
  },
});

export default CoverDetail;

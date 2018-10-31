import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CoverDetailItem from '../../components/CoverDetailItem';
class CoverDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
  });
  renderRow = item => {
    return <CoverDetailItem navigation={this.props.navigation} item={item} />;
  };
  render() {
    this.props.typeNames.map(name => {
      const ListsView = (
        <View tabLabel={name} style={{ flex: 1 }}>
          this.renderFlatLst()
        </View>
      );
      return ListsView;
    });

    return (
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableTabBar tabStyle={styles.tab} textStyle={styles.tabText} />
        )}
        tabBarBackgroundColor="#fcfcfc"
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarActiveTextColor="#3e9ce9"
        tabBarInactiveTextColor="#aaaaaa"
      >
        {Lists}
      </ScrollableTabView>
    );
  }

  renderFlatLst() {
    return (
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={true} //是否显示垂直滚动条
          showsHorizontalScrollIndicator={false} //是否显示水平滚动条
          numColumns={1} //每行显示1个
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
      </SafeAreaView>
    );
  }
}

export default CoverDetail;

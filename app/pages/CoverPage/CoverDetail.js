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
import CoverDetailTab from './CoverDetailTab';
class CoverDetail extends Component {
  render() {
    const { children } = this.props.navigation.state.params.item;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar tabStyle={styles.tab} textStyle={styles.tabText} />}
          tabBarBackgroundColor="#fcfcfc"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
          {children &&
            children.map((item, index) => {
              return (
                <CoverDetailTab
                  key={index}
                  tabIndex={item.id}
                  tabLabel={item.name}
                  {...this.props}
                />
              );
            })}
        </ScrollableTabView>
      </SafeAreaView>
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

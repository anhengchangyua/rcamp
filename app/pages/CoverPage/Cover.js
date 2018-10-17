import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import CoverItem from '../../components/CoverItem';

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
];
class Cover extends Component {
  componentDidMount() {
    this.props.coverActions.requestCoverList(true);
  }

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
    );
  }

  renderRow = item => {
    return <CoverItem navigation={this.props.navigation} item={item} />;
  };
}

export default Cover;

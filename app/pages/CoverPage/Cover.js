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
    const { coverList } = this.props.cover;
    return (
      <FlatList
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        renderItem={this.renderRow}
        enableEmptySections={true}
        keyExtractor={(item, index) => (item.key = index)}
        data={coverList}
      />
    );
  }

  renderRow = item => {
    return <CoverItem navigation={this.props.navigation} item={item} />;
  };
}

export default Cover;

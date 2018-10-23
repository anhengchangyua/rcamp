import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import CoverItem from '../../components/CoverItem';

import { SafeAreaView } from 'react-navigation';
class Cover extends Component {
  componentDidMount() {
    this.props.coverActions.requestCoverList(true);
  }

  render() {
    const { coverList } = this.props.cover;
    return (
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          renderItem={this.renderRow}
          enableEmptySections={true}
          keyExtractor={(item, index) => (item.key = index)}
          data={coverList}
        />
      </SafeAreaView>
    );
  }

  renderRow = item => {
    return <CoverItem navigation={this.props.navigation} item={item} />;
  };
}

export default Cover;

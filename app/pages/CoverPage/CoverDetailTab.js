import React, { Component } from 'react';
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
import CoverDetailItem from '../../components/CoverDetailItem';

class CoverDetailTab extends Component {
  componentDidMount() {
    const { tabIndex } = this.props;
    this.props.coverDetailActions.requestCoverDetail(true, tabIndex);
  }
  renderRow = item => {
    return <CoverDetailItem navigation={this.props.navigation} item={item} />;
  };
  render() {
    const { tabIndex } = this.props;
    const { coverDetailList } = this.props.cover;
    console.log('bbbb', coverDetailList[tabIndex]);
    return (
      <View style={styles.base}>
        <FlatList
          showsVerticalScrollIndicator={true} //是否显示垂直滚动条
          showsHorizontalScrollIndicator={false} //是否显示水平滚动条
          numColumns={1} //每行显示1个
          renderItem={this.renderRow} //每行显示一项
          enableEmptySections={true} //数据可以为空
          keyExtractor={(item, index) => (item.key = index)}
          onEndReachedThreshold={0.1}
          data={coverDetailList[tabIndex] && coverDetailList[tabIndex]}
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

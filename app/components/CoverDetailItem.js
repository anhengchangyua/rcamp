import React, { PureComponent } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
class CoverDetailItem extends PureComponent {
  _onItemClick(item) {
    const { navigate } = this.props.navigation;
    console.log('1111111', item);
    navigate('Web', { item });
  }
  render() {
    let rowData = this.props.item.item;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this._onItemClick(this.props.item)}
      >
        <Card>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>作者: </Text>
              <Text style={{ color: '#83c9f8' }}>{rowData.author}</Text>
              <Text style={{ position: 'absolute', right: 0 }}>
                {rowData.niceDate}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
                {rowData.title}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: '#83c9f8', fontSize: 16 }}>
                {rowData.superChapterName}
              </Text>
              <Icon
                name="heart"
                type="font-awesome"
                color="#f56"
                style={{ width: 10, height: 10 }}
                onPress={() => console.log('hello')}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default CoverDetailItem;

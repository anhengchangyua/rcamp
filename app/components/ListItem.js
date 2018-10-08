import React, { PureComponent } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
class ListItem extends PureComponent {
  _onItemClick(item) {
    console.log('page' + item);
  }
  render() {
    let rowData = this.props.item.item;
    let index = rowData.key;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this._onItemClick(this.props.item)}
      >
        <Card>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>作者: </Text>
              <Text style={{ color: '#83c9f8' }}>ONGHANGhAI</Text>
              <Text style={{ position: 'absolute', right: 0 }}>七分钟前</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
                设置padding相同于同时...
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#83c9f8', fontSize: 16 }}>创意会</Text>
              <Icon
                name="heart"
                type="font-awesome"
                color="#f56"
                style={{
                  width: 10,
                  height: 10
                }}
                onPress={() => console.log('hello')}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default ListItem;

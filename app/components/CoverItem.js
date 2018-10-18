import React, { PureComponent } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
class CoverItem extends PureComponent {
  _onItemClick(item) {
    // const { navigate } = this.props.navigation
    // navigate('Web', { item })
    console.log(item);
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
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
              <Text style={{ color: '#83c9f8' }}>{rowData.name}</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                marginTop: 5
              }}
            >
              {rowData.children.map(children => (
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  {children.name}
                </Text>
              ))}
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default CoverItem;

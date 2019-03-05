import React, { PureComponent } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import request from '../utils/request'
import ToastUtil from '../utils/ToastUtil'
import { Card, Icon } from 'react-native-elements'
class ListItem extends PureComponent {
  _onItemClick(item) {
    const { navigate } = this.props.navigation
    navigate('Web', { item })
  }
  _handleOnpress(params) {
    request
      .post(`http://www.wanandroid.com/lg/collect/${params.id}/json`)
      .then(res => {
        if (res.errorCode < 0) {
          ToastUtil.showShort(res.errorMsg)
        } else {
          ToastUtil.showShort('收藏成功！')
        }
      })
  }
  render() {
    let rowData = this.props.item.item

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
                justifyContent: 'space-between'
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
                onPress={() => this._handleOnpress(this.props.item.item)}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default ListItem

import React, { PureComponent } from 'react'
import { Tile, List, ListItem, Icon } from 'react-native-elements'
import { View, Alert } from 'react-native'
import { removeAllInfo } from '../../realm/UserInfoSchema'
import request from '../../utils/request'

class AboutMe extends PureComponent {
  constructor(props) {
    super(props)
  }

  _listPress = item => {
    switch (item.id) {
      case 3:
        Alert.alert('确定退出 ?', '', [
          {
            text: '取消',
            onPress: () => {
              console.log('qxl')
            },
            style: 'cancel'
          },
          {
            text: '确定',
            onPress: () => {
              request
                .get('http://www.wanandroid.com/user/logout/json')
                .then(res => {
                  if (res.errorCode == 0) {
                    removeAllInfo('UserData')
                    this.props.navigation.navigate('Login')
                  }
                })
            }
          }
        ])
        break
      case 4:
        const { navigate } = this.props.navigation
        navigate('codepush')
        break

      default:
        break
    }
  }
  render() {
    const list = [
      {
        id: 1,
        title: '喜欢的文章',
        icon: 'heart',
        color: '#f57'
      },
      {
        id: 2,
        title: '关于我们',
        icon: 'user-md',
        color: '#3e9ce8'
      },
      {
        id: 3,
        title: '退出登录',
        icon: 'power-off',
        color: '#999999'
      },
      {
        id: 4,
        title: '检查更新',
        icon: 'update',
        color: '#999999'
      }
    ]

    return (
      <View style={{ flex: 1 }}>
        <Tile
          height={250}
          imageSrc={require('../../assets/img/1.jpg')}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />
        <List>
          {list.map(item => (
            <ListItem
              key={item.title}
              title={item.title}
              titleStyle={{ marginLeft: 10 }}
              onPress={() => this._listPress(item)}
              leftIcon={
                <Icon name={item.icon} type="font-awesome" color={item.color} />
              }
            />
          ))}
        </List>
      </View>
    )
  }
}

export default AboutMe

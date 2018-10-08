/*
 * @Author: zhangwy 
 * @Date: 2018-10-08 11:03:10 
 * @Description:  关于我的page页面
 * @Last Modified by: zhangwy
 * @Last Modified time: 2018-10-08 12:17:32
 */
import React, { PureComponent } from 'react';
import { Tile, List, ListItem, Icon } from 'react-native-elements';
import { View } from 'react-native';

class AboutMe extends PureComponent {
  constructor(props) {
    super(props);
  }
  _listPress = item => {
    console.log(item);
  };
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
      }
    ];

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
    );
  }
}

export default AboutMe;

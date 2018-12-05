import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MainContainer from './MainContainer';
import CoverContainer from './CoverContainer';
import AboutContainer from './AboutContainer';
import AirticalDetail from '../pages/MainPage/AirticalDetail';
import CoverDetailContainer from './CoverDetailContainer';
import LoginContainer from './LoginContainer';
const TabContainer = TabNavigator(
  {
    Main: { screen: MainContainer },
    Cover: { screen: CoverContainer },
    About: { screen: AboutContainer },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3e9ce9',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        opacity: 0,
      },
      tabStyle: {
        padding: 0,
      },
    },
  },
);

const App = StackNavigator(
  {
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null,
      },
    },
    Web: { screen: AirticalDetail },
    slide: { screen: CoverDetailContainer },
    login: {
      screen: LoginContainer,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
      },
      headerTintColor: '#fff',
    },
  },
);

export default App;

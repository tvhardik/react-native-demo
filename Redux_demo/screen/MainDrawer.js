import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import MainTab from './MainTab';
import Profile from './Profile';
import Home from './Home';
const Drawer = createDrawerNavigator();
const MainDrawer = () => {
  return (
    <Drawer.Navigator nitialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

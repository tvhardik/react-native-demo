import {View, Text} from 'react-native';
import React from 'react';
import Tab from './Navigation/Tab';
import StackNavigation from './Navigation/StackNavigation';
StackNavigation;
const Main = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StackNavigation /> */}
      <Tab />
    </View>
  );
};

export default Main;

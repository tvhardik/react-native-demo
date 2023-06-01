import {View} from 'react-native';
import React from 'react';
// import Tab from './Navigation/Tab';
import StackNavigation from './Navigation/StackNavigation';
StackNavigation;
const Main = () => {
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  );
};

export default Main;

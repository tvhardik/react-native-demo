import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './screen/MainTab';
import MainDrawer from './screen/MainDrawer';
import MainStack from './screen/MainStack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
      {/* <MainStack/>
      <MainDrawer/> */}
    </NavigationContainer>
  );
};

export default App;

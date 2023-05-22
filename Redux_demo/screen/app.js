import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from './screen/MainDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};
export default App;
//combined navigation App.js
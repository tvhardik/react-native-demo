import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from './MainTab';
import Contactscreen from './Contactscreen';

const Drawer = createDrawerNavigator();
const MainDrawer = () => {
  return ( 
    <Drawer.Navigator initialRouteName="Home Page" >
      <Drawer.Screen name="Home screen" component={MainTab} />
      <Drawer.Screen name="About Page" component={Contactscreen} />
    </Drawer.Navigator>
  );
};
export default MainDrawer;
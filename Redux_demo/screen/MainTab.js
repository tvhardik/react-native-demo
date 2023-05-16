import React from 'react';
import Contect from './Contect';
import MainStack from './MainStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
const TabBottom = createBottomTabNavigator();
const MainTab = () => {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen
        name="Home"
        component={MainStack}
        options={{headerShown: false}}
      />
      <TabBottom.Screen name="Contect" component={Contect} />
    </TabBottom.Navigator>
  );
};

export default MainTab;

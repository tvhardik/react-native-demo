import React from 'react';
import Contactscreen from './Contactscreen';
import MainStack from './MainStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
const TabBottom = createBottomTabNavigator();
const MainTab = () => {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" color={'black'} size={25} />,
        }}
      />
      <TabBottom.Screen
        name="Contact Page"
        component={Contactscreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="adduser" color={'black'} size={25} />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
};
export default MainTab;

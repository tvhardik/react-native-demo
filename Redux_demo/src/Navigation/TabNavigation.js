import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Productpage from '../screen/Productpage';
import Profile from '../screen/Profile';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Productscreen" component={Productpage} />
          <Tab.Screen name="Profilescreen" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default TabNavigation;

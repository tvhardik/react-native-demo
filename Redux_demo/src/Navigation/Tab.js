import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import Profile from '../screen/profile';
import Productpage from '../screen/Productpage';

const TabNavigate = createBottomTabNavigator();
const Tab = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer >
        <TabNavigate.Navigator initialRouteName="Productscreen">
          <TabNavigate.Screen
            name="Productscreen"
            component={StackNavigation}
            options={{headerShown: false}}
          />
          <TabNavigate.Screen
            name="Profilescreen"
            component={Profile}
            options={{title: 'Your Profile'}}
          />
        </TabNavigate.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Tab;

import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import Profile from '../screen/profile';
import Icon from 'react-native-vector-icons/AntDesign';
const TabNavigate = createBottomTabNavigator();
const Tab = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <TabNavigate.Navigator
          initialRouteName="Productscreen"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Productscreen') {
                iconName = focused ? 'plussquareo' : 'plussquareo';
              } else if (route.name === 'Profilescreen') {
                iconName = focused ? 'user' : 'user';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          // tabBarOptions={{
          //   activeTintColor: 'blue',
          //   inactiveTintColor: 'gray',
          // }}
          >
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

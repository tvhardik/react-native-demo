import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screen/profile';
import Icon from 'react-native-vector-icons/AntDesign';
import Productpage from '../screen/Productpage';
import Addtocart from '../screen/Addtocart';
const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const TabNavigate = createBottomTabNavigator();
const Tab = () => {
  return (
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
      })
      }
      >
      {/* <TabNavigate.Navigator
        name="addtocartscreen"
        options={{headerShown: false}}
      />
      {props => <Stack {...props} />} */}
      <TabNavigate.Screen
        name="Productscreen"
        component={Productpage}
        options={{headerShown: false}}
      />
      <TabNavigate.Screen
        name="Profilescreen"
        component={Profile}
        options={{title: 'Your Profile'}}
      />
    </TabNavigate.Navigator>
  );
};

export default Tab;

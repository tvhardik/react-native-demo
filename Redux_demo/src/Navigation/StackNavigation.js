import React, {useContext} from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Loginpage from '../screen/Loginpage';
import Tab from './Tab';
import Profile from '../screen/profile';
import Addtocart from '../screen/Addtocart';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Loginpage}
            options={{title: 'Login'}}
          />
          <Stack.Screen name="Tabs" options={{headerShown: false}}>
            {props => <Tab {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="addtocart"
            component={Addtocart}
            options={{title: 'Your Cart'}}
          />
          <Stack.Screen name="Profilescreen" component={Profile}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};    

export default StackNavigation;

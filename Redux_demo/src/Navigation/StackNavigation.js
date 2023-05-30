import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Loginpage from '../screen/Loginpage';
import Productpage from '../screen/Productpage';
import Addtocart from '../screen/Addtocart';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Loginpage}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Productscreen"
            component={Productpage}
            options={{headerShown: false, title: 'Product'}}
          />
          <Stack.Screen
            name="addtocart"
            component={Addtocart}
            options={{title: 'Your Cart'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default StackNavigation;

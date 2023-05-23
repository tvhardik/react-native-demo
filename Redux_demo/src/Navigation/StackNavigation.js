import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Loginpage from '../screen/Loginpage';
import Productpage from '../screen/Productpage';
import Addtocart from '../screen/Addtocart';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={Loginpage} />
          <Stack.Screen
            name="Productscreen"
            component={Productpage}
            options={{headerShown: false, title: 'Product'}}
          />
          <Stack.Screen
            name="addtocart"
            component={Addtocart}
            options={{ title: 'Your Cart'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigation;

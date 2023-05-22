import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/components/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from './src/Index';
import Loginpage from './src/screen/Loginpage';
import Productpage from './src/screen/Productpage';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={Loginpage} />
        <Stack.Screen name="Productscreen" component={Productpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

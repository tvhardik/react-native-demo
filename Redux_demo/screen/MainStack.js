import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Aboutscreen from './Aboutscreen';
import Homescreen from './Homescreen';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home screen"
        component={Homescreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="About Page" component={Aboutscreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

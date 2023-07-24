import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditScreen from './EditScreen';
import ResponsiveApi from './ResponsiveApi';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SaveScreen"
            component={ResponsiveApi}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditScreen"
            component={EditScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectionsScreen from './ConnectionsScreen';
import Setting from './Setting';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="connectionsScreen">
          <Stack.Screen
            name="connectionsScreen"
            component={ConnectionsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="settingScreen"
            component={Setting}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

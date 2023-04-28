/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View, Button, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 25}}> login page</Text>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Email ID</Text>
        <TextInput placeholder="Enter Your id" />
        <View>
          <Text style={{fontSize: 25, textAlign: 'center'}}>Password</Text>
          <TextInput placeholder="Enter Your Password" />
        </View>
        <Button title="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default App;

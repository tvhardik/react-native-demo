/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View, Button, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        margin: 40,
      }}>
      <View>
        {/* <ImageBackground
          source={{
            uri: 'https://e0.pxfuel.com/wallpapers/465/213/desktop-wallpaper-simple-mobile-flat-android.jpg',
          }}></ImageBackground> */}
      </View>
      <View>
        {/* <Text style={{fontSize: 25}}> login page</Text> */}
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

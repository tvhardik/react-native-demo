/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login Screen</Text>
        <View style={styles.View}>
          <TextInput
            style={styles.inputView}
            placeholder="Enter your email"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputView}
            placeholder="Password"
            autoCapitalize="none"
          />
          <View style={styles.Stylebutton}>
            <TouchableOpacity style={styles.Touchablebutton}>
              <Text style={{fontSize: 20, textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{margin: 10}}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
  },
  inputView: {
    margin: 15,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  Stylebutton: {
    borderRadius: 25,
    color: 'black',
    alignItems: 'center',
  },
  View: {
    marginTop: 10,
  },
  Touchablebutton: {
    backgroundColor: '#deb887',
    borderRadius: 5,
    margin: 10,
    width: 150,
    height: 30,
  },
});
export default App;

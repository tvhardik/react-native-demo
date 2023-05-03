import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Signup" component={Login} />
//         <Stack.Screen name="Login" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const Stack = createNativeStackNavigator();

const Login = () => {
  const [username, setUserNameError] = useState('');
  const [password, setPasswordError] = useState('');
  const [error, setError] = useState({field: '', message: ''});

  const Submit = () => {
    let LoginError = {field: '', message: ''};
    if (username === '') {
      LoginError.field = 'username';
      LoginError.message = 'Email is Required';
      setError(LoginError);
    } else if (password === '') {
      LoginError.field = 'Password';
      LoginError.message = 'Password is Required';
      setError(LoginError);
    } else {
      setError({field: '', message: ''});
      alert('Login successfulluy');
    }
  };
  return (
    <View style={styles.container1}>
      <View>
        <View
          style={[
            {
              borderRadius: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              height: 100,
              width: 100,
            },
          ]}>
          <Image
            style={styles.logo1}
            source={{
              uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            }}
          />
        </View>
        <Text style={styles.title1}>Welcome, Back GitHub</Text>
        <View style={styles.View}>
          <TextInput
            style={styles.inputView1}
            placeholder="User Name"
            autoCapitalize="none"
            value={username}
            onChangeText={name => setUserNameError(name)}
          />
          {error.field === 'username' && (
            <Text style={styles.error}>{error.message}</Text>
          )}
          <TextInput
            style={styles.inputView1}
            placeholder="Password"
            autoCapitalize="none"
            value={password}
            onChangeText={data => setPasswordError(data)}
          />
          {error.field === 'Password' && (
            <Text style={styles.error}>{error.message}</Text>
          )}
          <View style={styles.Stylebutton1}>
            <TouchableOpacity>
              <Text style={{padding: 10}}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              title="Login"
              color="black"
              onPress={Submit}
              // onPressIn={() => e.navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
    color: 'black',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  inputView1: {
    margin: 15,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  Stylebutton1: {
    borderRadius: 25,
    color: 'black',
    alignItems: 'center',
  },
  View: {
    marginTop: 10,
  },
  Touchablebutton: {
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 10,
    width: 150,
    height: 30,
  },
  logo1: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
  },
  error: {
    marginLeft: 16,
    color: 'red',
  },
});
export default Login;

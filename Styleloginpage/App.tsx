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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './home';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const Signup = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <View style={styles.container}>
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
          style={styles.logo}
          source={{
            uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          }}
        />
      </View>
      <Text style={styles.text}>Welcome to GitHub</Text>
      <Text style={{textAlign: 'center'}}>Create account</Text>
      <View style={styles.textinputsall}>
        <TextInput
          style={[styles.textinputs, {marginEnd: 10}]}
          placeholder="First Name"
        />
        <TextInput style={styles.textinputs} placeholder="Last Name" />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email id"
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          textContentType="password"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Number"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
      <View>
        <View>
          <Button
            title="Signup"
            color="black"
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
        <Text style={{textAlign: 'center', padding: 10}}>
          Allready have an account?
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => props.navigation.navigate('Login')}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

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
      Alert.alert('Login successfulluy');
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
            <Button title="Login" color="black" onPress={Submit} />
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
    marginTop: 180,
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 30,
    paddingBottom: 150,
  },
  logo: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  textinputs: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    flex: 0.5,
  },
  textinputsall: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signuptext: {
    textAlign: 'center',

    fontSize: 25,
    borderRadius: 10,
    backgroundColor: '#000000',
    color: '#fff',
    width: 340,
    height: 45,
  },
  buttonstyle: {
    borderRadius: 15,
  },
  error: {
    color: 'red',
    paddingLeft: 15,
  },
});

export default App;

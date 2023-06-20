import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {Login} from '../Redux/Actions';
import {AuthContest} from '../Authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Loginpage = props => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      props.navigation.navigate('Tabs');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const {loginscreen} = useContext(AuthContest);
  const [email, setEmail] = useState('hardik@gmail.com');
  const [password, setPassword] = useState('123456');

  const userSignIn = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          props.navigation.navigate('Tabs');
        })
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/wrong-password') {
            alert('Invalid password');
          } else {
            alert('Invalid email or password');
          }
        });
    } else {
      alert('Email and Password should not be empty');
      console.log('Email and Password should not be empty');
    }
  };

  const dispatch = useDispatch();

  const asyncLogin = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogin = () => {
    const strongRegex = new RegExp('^[a-zA-Z0-9._%+-]+@gmail.com$');
    if (!strongRegex.test(email)) {
      Alert.alert('Email is invalid');
      return;
    } else if (password.length < 5) {
      Alert.alert('Password is invalid');
      return;
    }
    const data = {
      email,
      password,
    };
    dispatch(Login(data));
    asyncLogin();
    userSignIn();
    props.navigation.navigate('Tabs');
    loginscreen();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            justifyContent: 'center',
            alignSelf: 'center',
            height: 80,
            width: 100,
          },
        ]}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/3421/PNG/512/bag_cart_shop_online_shopping_ios_icon_218562.png',
          }}
        />
      </View>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.View}>
        <TextInput
          style={styles.inputView}
          placeholder="User Name"
          autoCapitalize="none"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.inputView}
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <View style={styles.Stylebutton}>
          <TouchableOpacity
            style={styles.inputView}
            onPress={() => {
              userSignIn();
            }}>
            <Text style={{textAlign: 'center', fontSize: 15}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputView}
            onPress={() => {
              props.navigation.navigate('CreateUserScreen');
            }}>
            <Text style={{textAlign: 'center'}}>Create User</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{padding: 15, textAlign: 'center'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={googleLogin}>
              <Image
                style={styles.googlelogo}
                source={{
                  uri: 'https://raw.githubusercontent.com/react-native-google-signin/google-signin/master/img/signin-button.png',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                    props.navigation.navigate('Tabs');
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
            <View style={{padding: 15}}>
              <TouchableOpacity
                style={
                  {
                    // height: 30,
                    // width: '100%',
                    // backgroundColor: 'black',
                    // borderRadius: 10,
                  }
                }>
                <Text>Select language</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputView: {
    margin: 15,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  googlelogo: {
    width: 195,
    height: 30,
    borderRadius: 10,
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
  },
});
export default Loginpage;

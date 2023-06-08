import React, {useState, useContext} from 'react';
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
import {useDispatch} from 'react-redux';
import {Login} from '../Redux/Actions';
import {AuthContest} from '../Authentication';

const Loginpage = props => {
  const {loginscreen} = useContext(AuthContest);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    } else if (password.length < 8) {
      Alert.alert('Password is invalid');
      return;
    }
    const data = {
      email,
      password,
    };
    dispatch(Login(data));
    asyncLogin();
    loginscreen();

    props.navigation.navigate('Tabs');
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
          <TouchableOpacity style={styles.inputView} onPress={handleLogin}>
            <Text style={{textAlign: 'center', fontSize: 15}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{padding: 10, textAlign: 'center'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
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
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
  },
});
export default Loginpage;

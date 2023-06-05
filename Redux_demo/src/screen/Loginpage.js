import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
const Loginpage = ({navigation}) => {
  // console.log('props!!!!!!!!', props);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    const strongRegex = new RegExp( // Login Validation
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    if (!strongRegex.test(email)) {
      Alert.alert('Email is invalid');
      return false;
    } else if (password.length < 8) {
      Alert.alert('Password is invalid');
      return false;
    }
    if (strongRegex.test(email)) {
      navigation.navigate('Tabs', {email: email});
    }
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
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />

        <View style={styles.Stylebutton}>
          <TouchableOpacity>
            <Text style={{padding: 10, textAlign: 'center'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView} onPress={() => signIn()}>
            <Text style={{textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

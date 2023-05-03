import React from 'react';
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

const Signup = props => {
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
          // value={fname}
        />
        <TextInput
          style={styles.textinputs}
          placeholder="Last Name"
          // value={lname}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email id"
          keyboardType={'email-address'}
          // value={emailid}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          textContentType="password"
          secureTextEntry={true}
          // value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Number"
          keyboardType="numeric"
          maxLength={10}
          // value={number}
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
const styles = StyleSheet.create({
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
export default Signup;

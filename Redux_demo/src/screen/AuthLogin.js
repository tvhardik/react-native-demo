import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {};
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={styles.inputView}
        value={email}
        placeholder="User Name"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          borderRadius: 20,
          marginTop: 15,
        }}>
        <Text
          style={{
            textAlign: 'center',
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}>
          Create Id
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    // padding: 10,
    width: '90%',
    paddingLeft: 10,
  },
});
export default AuthLogin;

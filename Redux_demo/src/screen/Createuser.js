import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const Createuser = () => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('123456');
  const navigation = useNavigation();

  const CreateUserId = () => {
    if (LName && FName && Email && Password) {
      try {
        auth()
          .createUserWithEmailAndPassword(Email, Password, FName, LName)
          .then(response => {
            const {user} = response;
            const userId = user.uid;
            firestore().collection('user').doc(userId).set({
              firstName: FName,
              lastName: LName,
              email: Email,
              id: userId,
            });
            console.log('User account created & signed in!');
            Alert.alert('User ID created');
            navigation.navigate('LoginScreen');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            console.error(error);
          });
      } catch (e) {
        console.log('Error creating user:', e);
      }
    } else {
      alert('empty');
    }
  };
  return (
    <View
      style={{flex: 1, backgroundColor: '#d3d3d3', justifyContent: 'center'}}>
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          value={FName}
          onChangeText={FName => setFName(FName)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          value={LName}
          onChangeText={LName => setLName(LName)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email ID"
          value={Email}
          onChangeText={Email => setEmail(Email)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={Password => setPassword(Password)}
        />

        <TouchableOpacity style={styles.Button}>
          <Text
            style={{
              padding: 14,
              textAlign: 'center',
              color: '#ffffff',
            }}
            onPress={CreateUserId}>
            Create User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 14,
    padding: 10,
  },
  Button: {
    backgroundColor: 'black',
    height: 50,
    width: '93%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
export default Createuser;

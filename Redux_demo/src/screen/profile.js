import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContest} from '../Authentication';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {Login} from '../Redux/Actions';

const Profile = () => {
  const {logoutscreen} = useContext(AuthContest);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('email');
    setEmail(email);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('password');

    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('Google account logged out successfully');
    } catch (error) {
      console.error('Error logging out from Google account:', error);
    }

    dispatch(Login(null));
    logoutscreen();
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.avatarContainer}></View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Your ID</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <View style={{padding: 15}}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  body: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
  logoutButton: {
    height: 35,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
  },
});

export default Profile;

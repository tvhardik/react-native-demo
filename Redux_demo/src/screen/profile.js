import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
const Profile = props => {
  // console.log('email>>>', email);
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.avatarContainer}></View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Your ID</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          {/* <Text style={styles.infoText}>{route.params.email}</Text> */}
        </View>
        <View style={{padding: 15}}>
          <TouchableOpacity
            style={{
              height: 35,
              backgroundColor: '#1e90ff',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
            }}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: '#ffffff',
              }}>
              Back to login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
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
});

export default Profile;

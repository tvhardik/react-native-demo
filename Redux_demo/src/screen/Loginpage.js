import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
const Loginpage = props => {

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
      <Text style={styles.title}>Welcome to shop</Text>
      <View style={styles.View}>
        <TextInput
          style={styles.inputView}
          placeholder="User Name"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputView}
          placeholder="Password"
          autoCapitalize="none"

        />
    
        <View style={styles.Stylebutton}>
          <TouchableOpacity>
            <Text style={{padding: 10, textAlign: 'center'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputView}
      
            onPress={() => props.navigation.navigate('Productscreen')}>
            <Text style={{textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
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

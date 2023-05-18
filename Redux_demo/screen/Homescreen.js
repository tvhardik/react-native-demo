import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Homescreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <FontAwesome.Button
        onPress={() => props.navigation.navigate('About Page')}
        name="share"
        size={25}
      />
    </View>
  );
};

export default Homescreen;

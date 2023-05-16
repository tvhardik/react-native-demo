import {View, Text, Button} from 'react-native';
import React from 'react';

const Home = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
      <Button
        title="Go to About screen"
        onPress={() => props.navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;

import {ActivityIndicator, View} from 'react-native';
import React, {useContext} from 'react';
import StackNavigation from './Navigation/StackNavigation';
import {AuthContest} from './Authentication';
import Tab from './Navigation/Tab';
import {NavigationContainer} from '@react-navigation/native';
const Main = () => {
  const {isLoading, userToken} = useContext(AuthContest);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <Tab /> : <StackNavigation />}
      {/* <StackNavigation /> */}
    </NavigationContainer>
  );
};

export default Main;

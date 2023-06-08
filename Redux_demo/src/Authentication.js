import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContest = createContext();
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const loginscreen = () => {
    setIsLoading(true);
    setUserToken('123');
    AsyncStorage.setItem('userToken', '123');
    setIsLoading(false);
  };
  const logoutscreen = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };
  const isLoadingIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log('isLoadingIn is error');
    }
  };
  useEffect(() => {
    isLoadingIn();
  }, []);
  return (
    <AuthContest.Provider
      value={{loginscreen, logoutscreen, isLoading, userToken}}>
      {children}
    </AuthContest.Provider>
  );
};

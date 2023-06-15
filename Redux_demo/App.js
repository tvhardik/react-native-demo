import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Settings} from 'react-native-fbsdk-next';
import Main from './src/Main';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {store} from './src/Redux/Store';
import {AuthProvider} from './src/Authentication';
import RemotePushController from './src/screen/Notification';
import messaging from '@react-native-firebase/messaging';
import {
  Notificationbackground,
  requestUserPermission,
} from './src/screen/Notification';

const persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    requestUserPermission();
    Notificationbackground();
  }, []);
  useEffect(() => {
    messaging().requestPermission();
    messaging()
      .getToken()
      .then(token => {
        // console.log('Device Token:', token);
      })
      .catch(error => {
        // console.log('Error getting device token:', error);
      });
  }, []);

  Settings.initializeSDK();

  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
          {/* <RemotePushController /> */}
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default App;

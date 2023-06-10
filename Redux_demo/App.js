import React from 'react';
import {Provider} from 'react-redux';
import {Settings} from 'react-native-fbsdk-next';
import Main from './src/Main';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {store} from './src/Redux/Store';
import {AuthProvider} from './src/Authentication';

const persistor = persistStore(store);
const App = () => {
  Settings.initializeSDK();

  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default App;

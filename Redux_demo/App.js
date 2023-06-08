import React from 'react';
import Main from './src/Main';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {store} from './src/Redux/Store';
import {AuthProvider} from './src/Authentication';

const persistor = persistStore(store);
const App = () => {
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

import React from 'react';
import Main from './src/Main';
import {Provider} from 'react-redux';
import {mystore} from './src/Redux/Store';
const App = () => {
  return (
    <Provider store={mystore}>
      <Main/>
    </Provider>
  );
};

export default App;

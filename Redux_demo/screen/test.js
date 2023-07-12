import React from 'react';
import {View} from 'react-native';
import RadioButton from './Test/RadioButton';

const App = () => {
  const options = [
    {key: 1, value: 'option1', name: 'Option 1'},
    {key: 2, value: 'option2', name: 'Option 2'},
  ];

  return (
    <View>
      <RadioButton options={options} />
    </View>
  );
};

export default App;

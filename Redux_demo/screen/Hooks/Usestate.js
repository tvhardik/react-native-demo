import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const CountExample = () => {
  const [count, setCount] = useState(0);

  const Count = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Count" onPress={Count} />
    </View>
  );
};
export default CountExample;
//UseState 

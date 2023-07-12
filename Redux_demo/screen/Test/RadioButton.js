import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const RadioButton = ({options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = option => {
    setSelectedOption(option.value);
    onChange(option.value);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
      }}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleOptionSelect(option)}
          style={{
            flex: 1,
            height: 50,
            // borderRadius: 10,
            backgroundColor:
              selectedOption === option.value ? '#20d6be' : '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{option.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;

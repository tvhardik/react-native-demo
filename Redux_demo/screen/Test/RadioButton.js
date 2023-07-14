import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const RadioButton = ({options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const Select = option => {
    setSelectedOption(option.value);
    onChange(option.value);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 15,
      }}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => Select(option)}
          style={{
            flex: 1,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation: 15,
            backgroundColor:
              selectedOption === option.value ? '#20d6be' : '#f5f5f5',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'YsabeauInfant-SemiBold',
            }}>
            {option.value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;

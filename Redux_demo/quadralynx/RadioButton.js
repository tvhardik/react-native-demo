import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

const RadioButton = ({label, selected, onSelect}) => {
  const handlePress = () => {
    onSelect(label);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          marginVertical: 13,
          fontFamily: 'Anybody-Regular',
        }}>
        {label}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selected ? '#02476F' : '#9F9F9F',
          }}>
          {selected && (
            <Image
              tintColor={'white'}
              source={require('./assets/logo/right.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

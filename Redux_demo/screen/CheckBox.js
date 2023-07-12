import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const CheckBox = ({label, value, onValueChange}) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleCheckboxToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity
      onPress={handleCheckboxToggle}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        margin: 2,
      }}>
      <Text style={{fontSize: 20}}>{label}</Text>
      <Icon
        name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;

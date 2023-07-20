import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const CheckBox = ({label, checked, onValueChange}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const CheckboxToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity
      onPress={CheckboxToggle}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 2,
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

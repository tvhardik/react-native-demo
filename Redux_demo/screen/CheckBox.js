import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const CheckBox = ({label, value, onValueChange}) => {
  const [checkBoxValue, setCheckBoxValue] = useState(value);

  useEffect(() => {
    setCheckBoxValue(value);
  }, [value]);

  const CheckboxToggle = () => {
    let newValue;
    if (checkBoxValue === 'checked') {
      newValue = 'unchecked';
    } else if (checkBoxValue === 'unchecked') {
      newValue = 'indeterminate';
    } else {
      newValue = 'checked';
    }

    setCheckBoxValue(newValue);
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
        name={
          checkBoxValue === 'checked'
            ? 'checkbox-active'
            : checkBoxValue === 'unchecked'
            ? 'checkbox-passive'
            : 'indeterminate'
        }
        size={20}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;

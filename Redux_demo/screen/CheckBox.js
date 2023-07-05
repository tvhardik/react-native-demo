import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckBox = ({label, value, onValueChange}) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleCheckboxToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxToggle}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={isChecked ? 'check-square-o' : 'square-o'}
          size={20}
          color={isChecked ? 'green' : 'gray'}
        />
        <Text style={{marginLeft: 8}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

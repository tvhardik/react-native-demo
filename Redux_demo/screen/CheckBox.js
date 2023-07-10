// import React, {useState} from 'react';
// import {TouchableOpacity, View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Fontisto';

// const CheckBox = ({label, value, onValueChange}) => {
//   const [isChecked, setIsChecked] = useState(value);

//   const handleCheckboxToggle = () => {
//     const newValue = !isChecked;
//     setIsChecked(newValue);
//     onValueChange(newValue);
//   };

//   return (
//     <TouchableOpacity onPress={handleCheckboxToggle}>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Icon
//           name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
//           size={20}
//         />
//         <Text style={{marginLeft: 8}}>{label}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default CheckBox;

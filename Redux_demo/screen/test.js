import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Apidata = [
  {
    id: 3,
    name: 'Progress',
    field_type: 'range_input',
    option: '1-100',
    option_type: 'string',
    created_at: '2023-06-26T07:42:18.633Z',
    updated_at: '2023-06-26T07:43:08.816Z',
  },
  {
    id: 4,
    name: 'Date',
    field_type: 'date_input',
    option: '',
    option_type: 'string',
    created_at: '2023-06-26T07:42:50.086Z',
    updated_at: '2023-06-26T07:42:50.086Z',
  },
  {
    id: 5,
    name: 'SelectInput',
    field_type: 'select_input',
    option: ['value1', 'value2', 'value3'],
    option_type: 'json',
    created_at: '2023-06-26T07:43:48.658Z',
    updated_at: '2023-06-26T07:43:48.658Z',
  },
  {
    id: 6,
    name: 'InputText',
    field_type: 'input_text',
    option: '',
    option_type: 'string',
    created_at: '2023-06-26T07:44:18.960Z',
    updated_at: '2023-06-26T07:44:18.960Z',
  },
  {
    id: 7,
    name: 'TextArea',
    field_type: 'text_area',
    option: '',
    option_type: 'string',
    created_at: '2023-06-26T07:46:43.958Z',
    updated_at: '2023-06-26T07:46:43.958Z',
  },
  {
    id: 8,
    name: 'SwitchTag',
    field_type: 'toggle_switch',
    option: '',
    option_type: 'string',
    created_at: '2023-06-26T07:47:31.075Z',
    updated_at: '2023-06-26T07:47:31.075Z',
  },
  {
    id: 9,
    name: 'Gender',
    field_type: 'radio_button',
    option: [
      {
        value: 'Male',
        isCheck: false,
      },
      {
        value: 'Female',
        isCheck: false,
      },
    ],
    option_type: 'json',
    created_at: '2023-06-26T07:47:59.938Z',
    updated_at: '2023-06-26T07:48:17.869Z',
  },
  {
    id: 10,
    name: 'Checked',
    field_type: 'check_box',
    option: [
      {
        value: 'value1',
        isCheck: false,
      },
      {
        value: 'value2',
        isCheck: false,
      },
      {
        value: 'value3',
        isCheck: false,
      },
      {
        value: 'value4',
        isCheck: false,
      },
    ],
    option_type: 'json',
    created_at: '2023-06-26T07:48:44.232Z',
    updated_at: '2023-06-26T07:48:44.232Z',
  },
];
// console.log(data);
const Test = () => {
  return (
    <View>
      {Apidata.map((item, index) => (
        <View key={index}>
          <Text>{item.field_type}</Text>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};
export default Test;

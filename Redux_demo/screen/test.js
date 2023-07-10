// import React from 'react';
import {View, Text} from 'react-native';

const data1 = {id: 3, value: 'text'};

const data2 = {
  id: 3,
  name: 'Progress',
  field_type: 'range_input',
  option: '1-100',
  option_type: 'string',
  created_at: '2023-06-26T07:42:18.633Z',
  updated_at: '2023-06-26T07:43:08.816Z',
};

const test = () => {
  const {id: id1, value} = data1;
  const {
    id: id2,
    name,
    field_type,
    option,
    option_type,
    created_at,
    updated_at,
  } = data2;

  return (
    <View>
      <Text>Data 1</Text>
      <Text>ID: {id1}</Text>
      <Text>Value: {value}</Text>

      <Text>Data 2</Text>
      <Text>ID: {id2}</Text>
      <Text>Name: {name}</Text>
      <Text>Field Type: {field_type}</Text>
      <Text>Option: {option}</Text>
      <Text>Option Type: {option_type}</Text>
      <Text>Created At: {created_at}</Text>
      <Text>Updated At: {updated_at}</Text>
    </View>
  );
};

export default test;

// const Test = () => {
//   const data = Apidata.data.map(item => ({
//     name: item.name,
//     field_type: item.field_type,
//   }));

//   return (
//     <View>
//       {data.map((item, index) => (
//         <View key={index}>
//           <Text>Field Type: {item.field_type}</Text>
//           <Text>Name: {item.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };
const Test = () => {
  const data = Apidata.data.map(item => ({
    name: item.name,
    field_type: item.field_type,
    option: item.option,
  }));

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>Field Type: {item.field_type}</Text>
          <Text>Name: {item.name}</Text>
          <Text>
            Option:{' '}
            {Array.isArray(item.option) ? item.option.join(', ') : item.option}
          </Text>
        </View>
      ))}
    </View>
  );
};
//----------------------------------
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import CheckBox from '../CheckBox';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const YourComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  Apidata = {
    data: [
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
    ],
  };
  const renderField = field => {
    if (field.field_type === 'date_input') {
      // date input
      return (
        <View>
          <Text>{field.name}</Text>
          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpen(false)}
          />
        </View>
      );
    }
  };
  // console.log(date, 'date pic>>>>>');
  const radioOptions = Apidata.data
    .filter(item => item.field_type === 'radio_button')[0] // radio
    .option.map(option => ({
      label: option.value,
      value: option.value,
    }));

  const radio = value => {
    setSelectedValue(value);
  };
  //   console.log(Apidata.data, '>>>>>>>>>>>');
  console.log(radioOptions);
  return (
    <View style={{flex: 1, margin: 10}}>
      <RadioForm // radio button
        style={{margin: 5}}
        initial={1}
        onPress={radio}
        buttonSize={10}
        buttonOuterSize={30}
        buttonColor={'#000'}
        selectedButtonColor={'green'}
        radio_props={radioOptions}
      />
      <View>
        {Apidata.data.map(field => (
          <View key={field.id}>{renderField(field)}</View> // date
        ))}
      </View>
    </View>
  );
};

export default YourComponent;
) : field.field_type === 'input_text' ? (
  <TextInput
    style={styles.inputView}
    placeholder="Input"
    autoCapitalize="none"
  />
) : null}
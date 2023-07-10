import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';

import DatePicker from 'react-native-date-picker';
import ToggleSwitch from 'toggle-switch-react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from 'react-native-checkbox';
import SwitchToggle from 'react-native-switch-toggle';
// import Slider from 'react-native-slider';
import RadioButtonRN from 'radio-buttons-react-native';

const main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedValue, setSelectedValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);

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

  const Submit = () => {
    const newData = Apidata.map(field => {
      let value;
      switch (field.field_type) {
        case 'date_input':
          value = date.toLocaleDateString();
          break;
        case 'range_input':
          value = selectedLanguage;
          break;
        case 'text_area':
          value = '';
          break;
        case 'input_text':
          value = '';
          break;
        case 'toggle_switch':
          value = '';
          break;
        case 'radio_button':
          value = field.option.find(option => option.isCheck)?.value || '';
          break;
        case 'check_box':
          value = field.option
            .filter(option => option.isCheck)
            .map(option => option.value);
          break;
        default:
          value = '';
          break;
      }
      return {id: field.id, value};
    });

    setFormData(newData);
  };

  const renderField = field => {
    return (
      <View style={{}}>
        <Text>{field.name}</Text>

        {field.field_type === 'range_input' ? (
          <Slider
            style={{width: 380, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="black"
            maximumTrackTintColor="#000000"
          />
        ) : field.field_type === 'date_input' ? (
          <View>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        ) : field.field_type === 'select_input' ? (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}>
            {field.option.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        ) : field.field_type === 'input_text' ? (
          <TextInput
            style={styles.inputView}
            placeholder="Input"
            autoCapitalize="none"
          />
        ) : field.field_type === 'text_area' ? (
          <TextInput
            style={styles.textarea}
            placeholder="Textarea"
            multiline={true}
            numberOfLines={10}
          />
        ) : field.field_type === 'toggle_switch' ? (
          <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="red"
            label="Example label"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="large"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        ) : field.field_type === 'radio_button' ? (
          <RadioButtonRN
            data={field.option}
            selectedBtn={value => console.log(value)}
          />
        ) : field.field_type === 'check_box' ? (
          field.option.map((checkbox, index) => (
            <CheckBox
              key={index}
              label={checkbox.value}
              checked={checkbox.isCheck}
              onChange={isCheck => console.log('I am checked', isCheck)}
            />
          ))
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        {Apidata.map(field => (
          <View key={field.id}>{renderField(field)}</View>
        ))}
        <Button title="Submit" onPress={Submit} />
        <Text>{JSON.stringify(formData)}</Text>
      </ScrollView>
    </View>
  );
};

export default main;

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    margin: 10,
  },
  textarea: {
    borderWidth: 1,
    margin: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  main: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
     // case 'toggle_switch':
        //   value = '';
        //   break;
        // case 'select_input':
        //   value = selectedValue;
        //   break;
        // case 'radio_button':
        //   value = field.option.find(option => option.isCheck)?.value || '';
        //   break;
        // case 'check_box':
        //   value = field.option
        //     .filter(option => option.isCheck)
        //     .map(option => option.value);
        //   break;
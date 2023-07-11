import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Apidata} from '../Apidata';
import {Dropdown} from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '../CheckBox';
import RadioForm from 'react-native-simple-radio-button';
const ResponsiveApi = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [slider, setSlider] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedId, setSelectedId] = useState('');

  const [checkbox, setCheckBox] = useState([]);
  const checkboxbutton = (value, isChecked) => {
    if (isChecked) {
      setCheckBox(Stateupd => [...Stateupd, value]);
    } else {
      setCheckBox(Stateupd => Stateupd.filter(item => item !== value));
    }
  };

  const RadioChange = value => {
    const selectedOption = Apidata.find(
      field => field.field_type === 'radio_button',
    ).option[value];
    setSelectedId(selectedOption.value);
  };

  const submit = () => {
    const newData = Apidata.map(field => {
      let value;
      switch (field.field_type) {
        case 'range_input':
          value = slider;
          break;
        case 'date_input':
          value = date.toLocaleDateString();
          break;
        case 'input_text':
          value = inputValue;
          break;
        case 'text_area':
          value = inputArea;
          break;
        case 'toggle_switch':
          value = isEnabled;
          break;
        case 'select_input':
          value = selectedLanguage;
          break;
        case 'radio_button':
          value = selectedId;
          break;
        case 'check_box':
          value = checkbox;
          break;
        default:
      }
      return {id: field.id, value};
    });

    setFormData(newData);
    console.log(newData);
  };
  const renderField = field => {
    return (
      <View style={{margin: 10}}>
        <Text>{field.name}</Text>
        {field.field_type === 'range_input' ? (
          <Slider
            style={{width: 390, height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="black"
            maximumTrackTintColor="#000000"
            onValueChange={value => setSlider(value)}
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
            onChangeText={text => setInputValue(text)}
          />
        ) : field.field_type === 'text_area' ? (
          <TextInput
            style={styles.textarea}
            placeholder="Textarea"
            multiline={true}
            numberOfLines={10}
            onChangeText={text => {
              setInputArea(text);
            }}
          />
        ) : field.field_type === 'toggle_switch' ? (
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : field.field_type === 'radio_button' ? (
          <RadioForm
            style={{margin: 5}}
            initial={null}
            onPress={RadioChange}
            buttonSize={10}
            buttonOuterSize={20}
            buttonColor={'#000'}
            selectedButtonColor={'green'}
            radio_props={field.option.map((option, item) => ({
              label: option.value,
              value: item,
            }))}
          />
        ) : field.field_type === 'check_box' ? (
          field.option.map((option, index) => (
            <CheckBox
              key={index}
              label={option.value}
              checked={checkbox.includes(option.value)}
              onValueChange={isChecked =>
                checkboxbutton(option.value, isChecked)
              }
            />
          ))
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          {Apidata.map(field => (
            <View key={field.id}>{renderField(field)}</View>
          ))}
          <Button title="Submit" onPress={submit} />
          <Text style={{margin: 10, fontSize: 20}}>
            {JSON.stringify(formData)}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ResponsiveApi;

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
  textarea: {
    borderWidth: 1,
    margin: 10,
    height: 100,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

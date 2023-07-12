import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Apidata} from '../Apidata';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../CheckBox';
import SelectDropdown from 'react-native-select-dropdown';
import RadioForm from 'react-native-simple-radio-button';
import RadioButton from './RadioButton';
const ResponsiveApi = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedId, setSelectedId] = useState('');

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  const [checkbox, setCheckBox] = useState([]);
  const checkboxbutton = (value, isChecked) => {
    if (isChecked) {
      setCheckBox(Stateupd => [...Stateupd, value]);
    } else {
      setCheckBox(Stateupd => Stateupd.filter(item => item !== value));
    }
  };

  // const RadioChange = value => {
  //   const selectedOption = Apidata.find(
  //     field => field.field_type === 'radio_button',
  //   ).option[value];
  //   setSelectedId(selectedOption.value);
  // };
  // const RadioChange = value => {
  //   const radioField = Apidata.find(
  //     field => field.field_type === 'radio_button',
  //   );
  //   if (radioField && radioField.option) {
  //     const selectedOption = radioField.option[value];
  //     if (selectedOption) {
  //       setSelectedId(selectedOption.value);
  //     }
  //   }
  // };
  const RadioChange = value => {
    setSelectedId(value);
  };

  const submit = () => {
    const newData = Apidata.map(field => {
      let value;
      switch (field.field_type) {
        case 'range_input':
          value = sliderValue;
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
      <View style={{flex: 1, margin: 5}}>
        <Text style={{margin: 10, fontSize: 16}}>{field.name}</Text>
        {field.field_type === 'range_input' ? (
          <View style={{}}>
            <Slider
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#20d6be"
              onValueChange={value => handleSliderChange(value)}
            />
            <Text style={{textAlign: 'right', marginRight: 20}}>
              {sliderValue.toFixed(0)}
            </Text>
          </View>
        ) : field.field_type === 'date_input' ? (
          <View>
            <TouchableOpacity
              style={{borderBottomWidth: 1, margin: 10}}
              onPress={() => setOpen(true)}>
              <Text style={{fontSize: 16, marginBottom: 10, color: '#d3d3d3'}}>
                MM/DD/YYYY
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
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
          <SelectDropdown
            data={field.option}
            defaultValue={selectedLanguage}
            onSelect={selectedItem => setSelectedLanguage(selectedItem)}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
            dropdownStyle={{
              alignContent: 'center',
              borderRadius: 8,
            }}
            buttonStyle={{
              backgroundColor: '#ffffff',
              width: '95%',
              marginHorizontal: 10,
              borderBottomWidth: 1,
            }}
            buttonTextStyle={{
              color: '#d3d3d3',
              fontSize: 18,
              textAlign: 'left',
              marginLeft: -5,
            }}
            rowStyle={{
              backgroundColor: 'white',
              borderBottomColor: 'gray',
            }}
          />
        ) : field.field_type === 'input_text' ? (
          <TextInput
            style={styles.inputView}
            placeholder="Text Input"
            autoCapitalize="none"
            onChangeText={text => setInputValue(text)}
          />
        ) : field.field_type === 'text_area' ? (
          <TextInput
            style={styles.textarea}
            placeholder="Project attribute"
            multiline={true}
            numberOfLines={10}
            onChangeText={text => {
              setInputArea(text);
            }}
          />
        ) : field.field_type === 'toggle_switch' ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{fontSize: 18}}>Private Profile</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ) : field.field_type === 'radio_button' ? (
          <View>
            <RadioButton
              options={field.option}
              onChange={RadioChange}
              selectedOption={selectedId}
            />
          </View>
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
    <View style={{}}>
      <SafeAreaView>
        <ScrollView>
          {Apidata.map(field => (
            <View key={field.id}>{renderField(field)}</View>
          ))}
          <TouchableOpacity style={styles.SaveButton} onPress={submit}>
            <Text style={{fontSize: 20, padding: 10}}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.EditButton} onPress={submit}>
            <Text style={{color: 'red', fontSize: 20, padding: 10}}>Edit</Text>
          </TouchableOpacity>
          {/* <Text style={{margin: 10, fontSize: 20}}>
            {JSON.stringify(formData)}
          </Text> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ResponsiveApi;

const styles = StyleSheet.create({
  inputView: {
    borderBottomWidth: 1,
    margin: 10,
    // height: 40,
    fontSize: 18,
    // padding: 10,
    paddingBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    margin: 10,
    height: 100,
    padding: 10,
    fontSize: 18,
    textAlignVertical: 'top',
  },
  SaveButton: {
    height: 50,
    width: '90%',
    margin: 10,
    backgroundColor: '#20d6be',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  EditButton: {
    height: 50,
    width: '90%',
    margin: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
});

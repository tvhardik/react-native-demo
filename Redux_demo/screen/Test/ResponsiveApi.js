import React, {useEffect, useState} from 'react';
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
import RadioButton from './RadioButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ResponsiveApi = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  const [checkbox, setCheckBox] = useState([]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const SliderChange = value => {
    setSliderValue(value);
  };

  const updateRecord = (item, value) => {
    const data = Apidata.map((d, index) => {
      return {...d, option: d.id === item.id ? value : item.option};
    });
    setApiData(data);
  };

  const checkboxbutton = (item, value, isChecked) => {
    // if (isChecked) {
    //   setCheckBox(Stateupd => [...Stateupd, value]);
    // } else {
    //   setCheckBox(Stateupd => Stateupd.filter(item => item !== value));
    // }
    updateRecord(
      item,
      item.option.map(d => {
        return {...d, isCheck: d.value === value ? !d.isCheck : d.isCheck};
      }),
    );
  };

  const RadioChange = value => {
    setSelectedId(value);
  };

  const submit = async () => {
    const newData = Apidata.map(field => {
      let value;
      switch (field.field_type) {
        case 'range_input':
          value = sliderValue.toFixed(0);
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

    try {
      await AsyncStorage.setItem('formData', JSON.stringify(newData));
    } catch (error) {}
    setFormData(newData);
    setSelectedLanguage(-1);
    setDate(new Date());
    setOpen(false);
    setFormData([]);
    setInputValue('');
    setInputArea('');
    setIsEnabled(false);
    setSelectedId('');
    setSliderValue(0);
    setCheckBox([]);
  };
  useEffect(() => {
    edit();
  }, []);

  const edit = async () => {
    try {
      const storedData = await AsyncStorage.getItem('formData');
      const parsedData = JSON.parse(storedData);
      console.log('parsedData', parsedData);
      const updatedData = Apidata.map(field => {
        const storedField = parsedData.find(data => data.id === field.id);
        console.log(storedField);
        // if (storedField.id === field.id) {
        //   console.log('djshd');
        //   return {...field, value: storedField.value};
        // }
        // if (storedField) {
        //   switch (field.field_type) {
        //     case 'range_input':
        //       setSliderValue(parseInt(storedField.value));
        //       break;
        //     case 'date_input':
        //       const storedDate = new Date(storedField.value);
        //       if (isNaN(storedDate.getTime())) {
        //         setDate(new Date());
        //       } else {
        //         setDate(storedDate);
        //       }
        //       break;
        //     case 'input_text':
        //       setInputValue(storedField.value);
        //       break;
        //     case 'text_area':
        //       setInputArea(storedField.value);
        //       break;
        //     case 'toggle_switch':
        //       setIsEnabled(storedField.value);
        //       break;
        //     case 'select_input':
        //       setSelectedLanguage(storedField.value);
        //       break;
        //     case 'radio_button':
        //       setSelectedId(storedField.value);
        //       break;
        //     case 'check_box':
        //       setCheckBox(storedField.value);
        //       break;
        //     default:
        //       break;
        //   }
        //   return {id: field.id, value: storedField.value};
        // } else {
        //   return {id: field.id, value: updatedData.valuesss};
        // }
      });
      console.log('updatedData', updatedData);
      setFormData(updatedData);
    } catch (error) {}
  };

  useEffect(() => {
    submit();
  }, []);

  const renderField = field => {
    return (
      <View style={{margin: 5}}>
        <Text style={styles.MainText}>{field.name}</Text>
        {field.field_type === 'range_input' ? (
          <View>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={sliderValue}
              minimumTrackTintColor="#20d6b3"
              onValueChange={value => SliderChange(value)}
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
              <Text style={{fontSize: 18, marginBottom: 5}}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={selectedDate => {
                setOpen(false);
                setDate(selectedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        ) : field.field_type === 'select_input' ? (
          <SelectDropdown
            data={field.option}
            defaultButtonText={selectedLanguage}
            // defaultValue={selectedLanguage}
            // value={selectedLanguage}
            onSelect={(selectedItem, index) => {
              setSelectedLanguage(index);
            }}
            defaultValueByIndex={selectedLanguage}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            // rowTextForSelection={item => {
            //   return item;
            // }}
            // dropdownStyle={{
            //   alignContent: 'center',
            //   borderRadius: 8,
            // }}
            // buttonStyle={{
            //   backgroundColor: '#ffffff',
            //   width: '95%',
            //   marginHorizontal: 10,
            //   borderBottomWidth: 1,
            // }}
            // buttonTextStyle={{
            //   color: '#d3d3d3',
            //   fontSize: 18,
            //   textAlign: 'left',
            //   marginLeft: -5,
            // }}
            // rowStyle={{
            //   backgroundColor: 'white',
            //   borderBottomColor: 'gray',
            // }}
          />
        ) : field.field_type === 'input_text' ? (
          <TextInput
            style={styles.inputView}
            placeholder="Text Input"
            autoCapitalize="none"
            value={inputValue}
            onChangeText={text => updateRecord(item, text)}
          />
        ) : field.field_type === 'text_area' ? (
          <TextInput
            style={styles.textarea}
            placeholder="Project attribute"
            multiline={true}
            numberOfLines={10}
            value={inputArea}
            onChangeText={text => {
              setInputArea(text);
            }}
          />
        ) : field.field_type === 'toggle_switch' ? (
          <View style={styles.Switch}>
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
              checked={option.isCheck}
              onValueChange={isChecked =>
                checkboxbutton(field, option.value, isChecked)
              }
            />
          ))
        ) : null}
      </View>
    );
  };

  return (
    <View style={{margin: 5}}>
      <SafeAreaView>
        <ScrollView>
          {Apidata.map(field => (
            <View key={field.id}>{renderField(field)}</View>
          ))}
          <TouchableOpacity style={styles.SaveButton} onPress={submit}>
            <Text style={styles.SaveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.EditButton} onPress={edit}>
            <Text style={styles.EditButtonText}>Edit</Text>
          </TouchableOpacity>
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
    fontSize: 18,
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
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
  },
  EditButton: {
    height: 50,
    width: '90%',
    margin: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
  },
  SaveButtonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'YsabeauInfant-SemiBold',
    fontSize: 20,
    padding: 10,
  },
  EditButtonText: {fontWeight: '500', color: 'red', fontSize: 20, padding: 10},
  MainText: {
    margin: 10,
    fontSize: 20,
    fontFamily: 'YsabeauInfant-SemiBold',
    color: 'black',
  },
  Switch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

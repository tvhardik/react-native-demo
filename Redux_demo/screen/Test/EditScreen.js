import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../CheckBox';
import SelectDropdown from 'react-native-select-dropdown';
import RadioButton from './RadioButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const EditScreen = ({route}) => {
  const navigation = useNavigation();
  const {formData} = route.params;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [storedFormData, setStoredFormData] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [Apidata, setApiData] = useState([
    {
      id: 3,
      name: 'Progress',
      field_type: 'range_input',
      option: '0',
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
      option: [
        {
          value: 'Value1',
          isCheck: false,
        },
        {
          value: 'Value2',
          isCheck: false,
        },
        {
          value: 'Value3',
          isCheck: false,
        },
      ],
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
  ]);

  const updateRecord = (item, value) => {
    const updatedData = Apidata.map(data => {
      return data.id === item.id ? {...item, option: value} : data;
    });

    setApiData(updatedData);
    saveFormData(updatedData);
  };

  const saveFormData = async data => {
    try {
      await AsyncStorage.setItem('formData', JSON.stringify(data));
      // console.log('Form data saved successfully');
    } catch (error) {
      // console.log('Error saving form data:', error);
    }
  };

  // const checkboxbutton = (field, value, isChecked) => {
  //   const updatedOptions = field.option.map(option => {
  //     if (option.value === value) {
  //       return {...option, isCheck: isChecked};
  //     }
  //     return option;
  //   });

  //   const updatedData = Apidata.map(data => {
  //     if (data.id === field.id) {
  //       return {...data, option: updatedOptions};
  //     }
  //     return data;
  //   });

  //   setApiData(updatedData);
  // };
  // // checkboxbutton(field, option.value, isChecked);

  // const RadioButtonChange = (fieldId, selectedValue) => {
  //   const updatedData = Apidata.map(field => {
  //     if (field.id === fieldId) {
  //       const updatedOptions = field.option.map(option => ({
  //         ...option,
  //         isCheck: option.value === selectedValue,
  //       }));

  //       return {...field, option: updatedOptions};
  //     }
  //     return field;
  //   });

  //   setApiData(updatedData);
  //   setSelectedRadioButton(selectedValue);
  // };

  // const submitData = async () => {
  //   try {
  //     const formData = Apidata.map(field => {
  //       if (field.field_type === 'check_box') {
  //         const filteredadta = field.option
  //           .filter(option => option.isCheck)
  //           .map(option => option.value);
  //         // console.log('filteredadta>>>', filteredadta);
  //         return {
  //           id: field.id,
  //           option: filteredadta,
  //         };
  //       } else if (field.field_type === 'radio_button') {
  //         const selectedValue =
  //           field.option.find(option => option.isCheck)?.value || '';
  //         return {
  //           id: field.id,
  //           option: selectedValue,
  //         };
  //       } else if (field.field_type === 'select_input') {
  //         // const selectedOptions = field.option.filter(option => option.isCheck);
  //         // // console.log('selectedOptions>>>', selectedOptions);
  //         // return {
  //         //   id: field.id,
  //         //   option: selectedOptions.map(option => option.value),
  //         // };
  //         const filteredadta = field.option
  //           .filter(option => option.isCheck)
  //           .map(option => option.value);
  //         // console.log('filteredadta>>>', filteredadta);
  //         return {
  //           id: field.id,
  //           option: filteredadta,
  //         };
  //       } else {
  //         return {
  //           id: field.id,
  //           option: field.option,
  //         };
  //       }
  //     });

  //     await AsyncStorage.setItem('formData', JSON.stringify(formData));
  //     console.log('formData >>>>>>', formData);

  //     setSubmittedData(formData);
  //     clearFormData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const storeData = async () => {
    try {
      const formData = await AsyncStorage.getItem('formData');
      if (formData) {
        setTimeout(() => {
          setStoredFormData(JSON.parse(formData));
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    storeData();
  }, []);

  const editData = () => {
    setIsLoading(true);
    if (storedFormData) {
      const updatedData = Apidata.map(data => {
        const storedField = storedFormData.find(field => field.id === data.id);

        if (storedField) {
          if (data.field_type === 'check_box') {
            let isCheck = false;
            const updatedOptions = data.option.map(option => {
              // console.log('optionssss>>>', option);
              const storedOption = storedField?.option?.find(
                storedOpt => storedOpt === option?.value,
              );
              // console.log('storedOption>>>', storedOption);
              if (storedOption) {
                isCheck = true;
              } else {
                isCheck = false;
              }
              return {...option, isCheck};
            });
            return {
              ...data,
              option: updatedOptions,
            };
          } else if (data.field_type === 'radio_button') {
            const selectedValue = storedField.option;
            const updatedOptions = data.option.map(option => ({
              ...option,
              isCheck: option.value === selectedValue,
            }));
            return {
              ...data,
              option: updatedOptions,
            };
          } else if (data.field_type === 'select_input') {
            // const updatedOptions = data.option.map(option => {
            //   const storedOption = storedField.option.find(
            //     storedOpt => storedOpt.value === option.value,
            //   );
            //   // console.log('storedOption select_input>>>>', storedOption);
            //   const isCheck = storedOption ? storedOption.isCheck : false;
            //   return {...option, isCheck};
            // });
            // // console.log('updatedOptions select_input>>>>', updatedOptions);
            // return {
            //   ...data,
            //   option: updatedOptions,
            let isCheck = false;
            const updatedOptions = data.option.map(option => {
              // console.log('optionssss>>>', option);
              const storedOption = storedField?.option?.find(
                storedOpt => storedOpt === option?.value,
              );
              // console.log('storedOption>>>', storedOption);
              if (storedOption) {
                isCheck = true;
              } else {
                isCheck = false;
              }
              return {...option, isCheck};
            });
            return {
              ...data,
              option: updatedOptions,
            };
          } else {
            return {
              ...data,
              option: storedField.option,
            };
          }
        }
        return data;
      });
      navigation.goBack();
      setApiData(updatedData);
      setIsLoading(false);
    }
  };

  // const clearFormData = () => {
  //   const clearedData = Apidata.map(field => {
  //     if (field.field_type === 'check_box') {
  //       return {
  //         ...field,
  //         option: field.option.map(option => ({...option, isCheck: false})),
  //       };
  //     } else if (field.field_type === 'radio_button') {
  //       return {
  //         ...field,
  //         option: field.option.map(option => ({...option, isCheck: false})),
  //       };
  //     } else if (field.field_type === 'toggle_switch') {
  //       return {
  //         ...field,
  //         option: false,
  //       };
  //     } else if (field.field_type === 'range_input') {
  //       return {
  //         ...field,
  //         option: '0',
  //       };
  //     } else if (field.field_type === 'input_text') {
  //       return {
  //         ...field,
  //         option: '',
  //       };
  //     } else if (field.field_type === 'text_area') {
  //       return {
  //         ...field,
  //         option: '',
  //       };
  //     } else if (field.field_type === 'select_input') {
  //       return {
  //         ...field,
  //         option: field.option.map(option => ({...option, isCheck: false})),
  //       };
  //     } else {
  //       return field;
  //     }
  //   });

  //   setApiData(clearedData);
  // };

  const renderFiel = field => {
    if (field.field_type === 'range_input') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#20d6b3"
            value={parseFloat(field?.option)}
            onValueChange={value => updateRecord(field, value.toFixed(0))}
          />
          <Text style={{textAlign: 'right', marginRight: 20}}>
            {parseFloat(field?.option).toFixed(0)}
          </Text>
        </View>
      );
    } else if (field.field_type === 'date_input') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <TouchableOpacity
            style={{borderBottomWidth: 1, margin: 10}}
            onPress={() => setOpen(true)}>
            <Text style={{fontSize: 18, marginBottom: 5}}>
              {field.option ? new Date(field.option).toLocaleDateString() : ''}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={selectedDate => {
              setOpen(false);
              updateRecord(field, selectedDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      );
    } else if (field.field_type === 'select_input') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <SelectDropdown
            data={field.option}
            onSelect={selectedItem => {
              const selectOptions = field.option.map(data => {
                return {...data, isCheck: selectedItem.value === data.value};
              });
              updateRecord(field, selectOptions);
              // console.log('selectOptions >>>>>', field, selectOptions);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.value;
            }}
            rowTextForSelection={(item, index) => {
              return item.value;
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
        </View>
      );
    } else if (field.field_type === 'input_text') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <TextInput
            style={styles.inputView}
            placeholder="Text Input"
            autoCapitalize="none"
            value={field?.option}
            onChangeText={text => {
              updateRecord(field, text);
            }}
          />
        </View>
      );
    } else if (field.field_type === 'text_area') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Project attribute"
            multiline={true}
            numberOfLines={10}
            value={field?.option}
            onChangeText={text => {
              updateRecord(field, text);
            }}
          />
        </View>
      );
    } else if (field.field_type === 'toggle_switch') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <View style={styles.Switch}>
            <Text style={{fontSize: 18}}>Private Profile</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              ios_backgroundColor="#3e3e3e"
              onValueChange={value => updateRecord(field, value)}
              value={field?.option}
            />
          </View>
        </View>
      );
    } else if (field.field_type === 'radio_button') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          <RadioButton
            options={field.option}
            selectedValue={field.option.find(option => option.isCheck)?.value}
            onChange={selectedValue =>
              RadioButtonChange(field.id, selectedValue)
            }
          />
        </View>
      );
    } else if (field.field_type === 'check_box') {
      return (
        <View key={field.id}>
          <Text style={styles.MainText}>{field.name}</Text>
          {field.option.map((option, index) => (
            <CheckBox
              key={index}
              label={option?.value}
              checked={option?.isCheck}
              onValueChange={isChecked =>
                checkboxbutton(field, option?.value, isChecked)
              }
            />
          ))}
        </View>
      );
    } else {
      return null;
    }
  };
  return (
    <View style={{}}>
      {formData && (
        <View style={{marginTop: 20}}>
          {formData.map(data => (
            <View key={data.id}>
              <Text>{JSON.stringify(data.option)}</Text>
            </View>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.EditButton} onPress={editData}>
        <Text style={styles.EditButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

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

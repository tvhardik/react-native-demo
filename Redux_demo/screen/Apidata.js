import {StyleSheet, Text, TextInput, Switch, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import ToggleSwitch from 'toggle-switch-react-native';
import Slider from 'react-native-slider';
import CheckBox from './CheckBox';
const apiData = {
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
};
const Apidata = () => {
  const [radioOptions, setRadioOptions] = useState([]);
  // const ToggleSwitchExample = () => {
  //   const [isEnabled, setIsEnabled] = useState(false);

  //   const toggleSwitch = () => {
  //     setIsEnabled(previousState => !previousState);
  //   };
  // };
  // const [selectedLanguage, setSelectedLanguage] = useState();
  // const [date, setDate] = useState(new Date());
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    setRadioOptions(apiData.option);
  }, []);
  const RadioChange = index => {
    const updatedOptions = radioOptions.map((option, i) => {
      if (i === index) {
        return {
          ...option,
          isCheck: true,
        };
      } else {
        return {
          ...option,
          isCheck: false,
        };
      }
    });
    setRadioOptions(updatedOptions);
  };

  return (
    <View style={styles.main}>
      {/* <Slider /> */}
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
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="React Native" value="React Native" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="PHP" value="php" />
      </Picker>
      <TextInput
        style={styles.inputView}
        placeholder="Input"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.textarea}
        placeholder="Textarea"
        multiline={true}
        numberOfLines={10}
      /> */}
      {/* <ToggleSwitch
        style={{margin: 5}}
        isOn={false}
        onColor="green"
        offColor="red"
        labelStyle={{color: 'black', fontWeight: '900'}}
        size="large"
        onToggle={isOn => console.log('changed to : ', isOn)}
      /> */}
      <RadioForm
        style={{margin: 5}}
        initial={0}
        onPress={RadioChange}
        buttonSize={10}
        buttonOuterSize={20}
        buttonColor={'#000'}
        selectedButtonColor={'green'}
      />
      <View style={{margin: 5}}>
        {/* <CheckBox
          label="value 1"
          value={checkboxValue}
          onValueChange={handleCheckboxValueChange}
        />
        <CheckBox
          label="value 2"
          value={true}
          onValueChange={handleCheckboxValueChange}
        /> */}
      </View>
    </View>
  );
};

export default Apidata;

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

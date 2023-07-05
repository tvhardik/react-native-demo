import {StyleSheet, Text, TextInput, Switch, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import ToggleSwitch from 'toggle-switch-react-native';
import Slider from 'react-native-slider';
import CheckBox from './CheckBox';

const Apidata = () => {
  const ToggleSwitchExample = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    };
  };
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const radioProps = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];
  const handleRadioChange = value => {
    // console.log('Selected value:', value);
  };
  const handleCheckboxValueChange = newValue => {
    setCheckboxValue(newValue);
  };
  return (
    <View style={styles.main}>
      <Slider />
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
      />
      <ToggleSwitch
        style={{margin: 5}}
        isOn={false}
        onColor="green"
        offColor="red"
        labelStyle={{color: 'black', fontWeight: '900'}}
        size="large"
        onToggle={isOn => console.log('changed to : ', isOn)}
      />
      <RadioForm
        style={{margin: 5}}
        radio_props={radioProps}
        initial={0}
        onPress={handleRadioChange}
        buttonSize={10}
        buttonOuterSize={20}
        buttonColor={'#000'}
        selectedButtonColor={'#000'}
      />
      <View style={{margin: 5}}>
        <CheckBox
          label="value 1"
          value={checkboxValue}
          onValueChange={handleCheckboxValueChange}
        />
        <CheckBox
          label="value 2"
          value={true}
          onValueChange={handleCheckboxValueChange}
        />
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
    // margin: 5,
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

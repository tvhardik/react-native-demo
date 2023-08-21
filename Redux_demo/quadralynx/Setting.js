import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
import DataSharingSwitch from './DataSharingSwitch';
import RadioButton from './RadioButton';
import PaginationDots from './PaginationDots';

const Setting = () => {
  // const navigation = useNavigation();
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(false);
  const [switch3Value, setSwitch3Value] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = option => {
    setSelectedOption(option);
  };

  const options = [
    'Always',
    'During specific hours',
    'During specific intervals',
  ];
  const [activePage, setActivePage] = useState(0);
  const numScreens = 3; // Total number of screens/pages

  return (
    <SafeAreaView style={styles.maincontainer}>
      <TouchableOpacity style={styles.backbutton}>
        <Image
          source={require('./assets/logo/Backicon.png')}
          style={styles.backButtonImage}
        />
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Setting</Text>
      <View style={{flex: 1, marginHorizontal: 19}}>
        <Text style={styles.titleText}>Sharing</Text>
        <DataSharingSwitch
          labelText="Enable Data Sharing"
          value={switch1Value}
          onValueChange={value => setSwitch1Value(value)}
        />
        <Text
          style={{
            fontSize: 14,
            marginVertical: 10,
            fontFamily: 'Anybody-Italic',
          }}>
          Data is only shared with approved connections.
        </Text>
        <Text style={styles.titleText}>Notifications</Text>
        <DataSharingSwitch
          labelText="Enable Notifications"
          value={switch2Value}
          onValueChange={value => setSwitch2Value(value)}
        />
        <Text style={styles.titleText}>Notify Me About</Text>
        <DataSharingSwitch
          labelText="All new connections"
          value={switch3Value}
          onValueChange={value => setSwitch3Value(value)}
        />
        <Text style={styles.titleText}>Notification Frequency</Text>
        <View>
          {options.map(option => (
            <RadioButton
              key={option}
              label={option}
              selected={selectedOption === option}
              onSelect={handleSelect}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttomButton}>
        <TouchableOpacity style={styles.leftRightButtonView}>
          <Image
            source={require('./assets/logo/left-arrow.png')}
            style={styles.leftArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.paginationDots}>
          <PaginationDots
            numDots={numScreens}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </View>
        <TouchableOpacity style={styles.leftRightButtonView}>
          <Image
            source={require('./assets/logo/right-arrow.png')}
            style={styles.righArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  maincontainer: {flex: 1},
  backbutton: {
    backgroundColor: '#1770BE',
    borderRadius: 48,
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Anybody-Black',
  },
  backButtonImage: {
    width: 20,
    height: 15,
    marginRight: 10,
  },
  title: {
    margin: 10,
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Anybody-ExtraBold',
  },

  leftRightButtonView: {
    backgroundColor: '#00476F',
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomButton: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrow: {width: 35, height: 40, marginRight: 5},
  righArrow: {width: 35, height: 40, marginLeft: 5},
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: 16,
    marginVertical: 7,
    fontFamily: 'Anybody-ExtraBold',
  },
});

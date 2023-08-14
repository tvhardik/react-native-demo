import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import PaginationDots from './PaginationDots';
const ConnectionsScreen = ({numDots, activePage, setActivePage}) => {
  // const [activePage, setActivePage] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.maincontainer}>
      <TouchableOpacity style={styles.backbutton}>
        <Image
          source={require('./assets/logo/Backicon.png')}
          style={styles.backButtonImage}
        />
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Clinicians</Text>
      <View style={styles.groupView}>
        <TouchableOpacity style={styles.searchAndFlagView}>
          <Image
            source={require('./assets/logo/search.png')}
            style={styles.searchImage}
            resizeMode="contain"
          />
          <Text style={styles.searchText}>SEARCH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchAndFlagView}>
          <Image
            source={require('./assets/logo/flag.png')}
            style={styles.flagImage}
            resizeMode="contain"
          />
          <Text style={styles.sortByText}>SORT BY</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.detelisBox}>
          <Text style={styles.detelisBoxTitle}>Spokane Sip</Text>
          <Text style={styles.detelisText}>
            4407 N Division St, #303{'\n'}Spokane, WA 99207{'\n'}1.9 mi from
            your current location{'\n'}(509) 860-9539{'\n'}Medicare/Medicaid
            accepted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detelisBox}>
          <Text style={styles.detelisBoxTitle}>
            Early Life Speech & Language
          </Text>
          <Text style={styles.detelisText}>
            506 W 2nd Ave{'\n'}Spokane, WA 99201{'\n'}3.1 mi from your current
            location{'\n'}(509) 838-2310
          </Text>
        </TouchableOpacity>
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
            numDots={3}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </View>
        <TouchableOpacity
          style={styles.leftRightButtonView}
          onPress={() => {
            setActivePage(activePage + 1);

            if (activePage === 2) {
              navigation.navigate('settingScreen');
            }
          }}>
          <Image
            source={require('./assets/logo/right-arrow.png')}
            style={styles.righArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConnectionsScreen;

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
    fontSize: 28,
    color: '#1770BE',
    textAlign: 'center',
    fontFamily: 'Anybody-ExtraBold',
  },
  searchAndFlagView: {
    width: '48%',
    height: 43,
    backgroundColor: '#00476F',
    borderRadius: 48,
    paddingHorizontal: 3,
    marginTop: 21,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detelisBox: {
    marginHorizontal: 22,
    borderRadius: 20,
    borderColor: '#1770BE',
    borderWidth: 1,
    padding: 22,
    marginTop: 25,
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
  paginationDot: {
    width: 18,
    height: 18,
    borderRadius: 20,
    marginHorizontal: 15,
    borderWidth: 2,
    marginHorizontal: 4,
  },
  detelisText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Anybody-Regular',
    lineHeight: 23,
  },
  detelisBoxTitle: {
    fontSize: 16,
    color: '#1770BE',
    fontFamily: 'Anybody-ExtraBold',
  },
  groupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
  },
  searchText: {
    color: '#ffffff',
    fontSize: 15,
    flex: 0.9,
    fontFamily: 'Anybody-Black',
  },
  searchImage: {height: 40, width: '43%'},
  flagImage: {height: 35, width: '27%'},
  sortByText: {
    color: '#ffffff',
    fontSize: 15,
    flex: 0.85,
    fontFamily: 'Anybody-Black',
  },
  leftArrow: {width: 35, height: 40, marginRight: 5},
  righArrow: {width: 35, height: 40, marginLeft: 5},
});

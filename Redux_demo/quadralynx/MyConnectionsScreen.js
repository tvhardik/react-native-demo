import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PaginationDots from './PaginationDots';
import UserListItem from './UserListItem';
import Tooltip from 'react-native-walkthrough-tooltip';
import AnimatedTextInput from './AnimatedTextInput';
const MyConnectionsScreen = ({numDots, activePage, setActivePage}) => {
  const searchInputFocused = useRef(new Animated.Value(0)).current;
  const [searchVisible, setsearchVisibleVisible] = useState(false);
  const [soryby, setsorybyVisible] = useState(false);

  const createAnimation = (animation, targetValue) => {
    Animated.timing(animation, {
      toValue: targetValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const searchFocus = isFocused => {
    createAnimation(searchInputFocused, isFocused ? 1 : 0);
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <TouchableOpacity style={styles.backbutton}>
        <Image
          source={require('./assets/logo/Backicon.png')}
          style={styles.backButtonImage}
        />
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <Text style={styles.title}>My Connections</Text>
      <View style={styles.groupView}>
        <Tooltip
          isVisible={searchVisible}
          contentStyle={styles.tooltipContent}
          arrowSize={styles.tooltipArrow}
          content={
            <View style={styles.tooltipContainer}>
              <Text style={styles.tooltipText}>
                Enter your search term in the {'\n'}field below.
              </Text>
              <AnimatedTextInput
                inputFocused={searchInputFocused}
                placeholder="Search"
                onFocus={searchFocus}
                imageSource={require('./assets/logo/search.png')}
              />
            </View>
          }
          placement="bottom"
          onClose={() => setsearchVisibleVisible(false)}>
          <TouchableOpacity
            onPress={() => setsearchVisibleVisible(true)}
            style={styles.searchAndFlagView}>
            <Image
              source={require('./assets/logo/search.png')}
              style={styles.searchImage}
              resizeMode="contain"
            />
            <Text style={styles.searchText}>SEARCH</Text>
          </TouchableOpacity>
        </Tooltip>
        <Tooltip
          isVisible={soryby}
          contentStyle={styles.tooltipContent}
          arrowSize={styles.tooltipArrow}
          content={
            <View style={[styles.tooltipContainer, {width: 331, height: 284}]}>
              <TouchableOpacity style={styles.newestFirstButton}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Anybody-Black',
                    fontSize: 15,
                  }}>
                  NEWEST FIRST
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.oldestFirstButton}>
                <Text
                  style={{
                    color: '#00476F',
                    fontFamily: 'Anybody-Black',
                    fontSize: 15,
                  }}>
                  OLDEST FIRST
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alphabeticalButton}>
                <Text
                  style={{
                    color: '#00476F',
                    fontFamily: 'Anybody-Black',
                    fontSize: 15,
                  }}>
                  ALPHABETICAL: A - Z
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alphabeticalButton}>
                <Text
                  style={{
                    color: '#00476F',
                    fontFamily: 'Anybody-Black',
                    fontSize: 15,
                  }}>
                  ALPHABETICAL: Z - A
                </Text>
              </TouchableOpacity>
            </View>
          }
          placement="bottom"
          onClose={() => setsorybyVisible(false)}>
          <TouchableOpacity
            onPress={() => setsorybyVisible(!searchVisible)}
            style={styles.searchAndFlagView}>
            <Image
              source={require('./assets/logo/flag.png')}
              style={styles.flagImage}
              resizeMode="contain"
            />
            <Text style={styles.sortByText}>SORT BY</Text>
          </TouchableOpacity>
        </Tooltip>
      </View>
      <View style={styles.mainscrollView}>
        <View style={styles.scrollView}>
          <UserListItem
            imageSource={require('./assets/logo/userimage.jpg')}
            userName="<User Name>"
            usernameDetelis="Caregiver"
          />
          <UserListItem
            imageSource={require('./assets/logo/userImage2.webp')}
            userName="<User Name>"
            usernameDetelis="Caregiver"
          />
          <UserListItem
            imageSource={require('./assets/logo/userImage3.webp')}
            userName="<User Name>"
            usernameDetelis="Clinician"
          />
          <UserListItem
            imageSource={require('./assets/logo/userImage4.webp')}
            userName="<User Name>"
            usernameDetelis="Clinician"
          />
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
            numDots={3}
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
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.touchableButton}>
          <Text style={styles.addConnectionButtonText}>ADD CONNECTION</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyConnectionsScreen;

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
    margin: 5,
    color: '#1770BE',
    textAlign: 'center',
    fontFamily: 'Anybody-ExtraBold',
  },
  searchAndFlagView: {
    width: 145,
    height: 45,
    backgroundColor: '#00476F',
    borderRadius: 48,
    paddingHorizontal: 3,
    marginTop: 21,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 80,
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
  groupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 38,
  },
  searchText: {
    color: '#ffffff',
    fontSize: 15,
    flex: 0.95,
    justifyContent: 'center',
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
  scrollView: {flex: 1, marginHorizontal: 35, marginBottom: '40%'},
  mainscrollView: {flex: 1, marginVertical: 10},
  userList: {
    flex: 1,
    width: '100%',
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  userImage: {
    height: 70,
    width: '40%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  userText: {marginHorizontal: 15, fontSize: 18},
  buttonView: {flex: 1, position: 'absolute', bottom: 20, alignSelf: 'center'},
  touchableButton: {
    width: 223,
    height: 48,
    backgroundColor: '#1770BE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  tooltipContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    width: 310,
  },
  tooltipText: {
    fontSize: 16,
    // marginBottom: 5,
    fontFamily: 'Anybody-Regular',
    textAlign: 'center',
  },
  tooltipContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    // marginTop: 10,
  },

  tooltipArrow: {
    // position: 'absolute',
    width: 28,
    height: 28,
  },
  newestFirstButton: {
    width: '45%',
    height: 46,
    borderRadius: 48,
    backgroundColor: '#00476F',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  oldestFirstButton: {
    width: '40%',
    height: 46,
    borderRadius: 48,
    borderColor: '#00476F',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  alphabeticalButton: {
    width: '60%',
    height: 46,
    borderRadius: 48,
    borderColor: '#00476F',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  addConnectionButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Anybody-Black',
  },
});

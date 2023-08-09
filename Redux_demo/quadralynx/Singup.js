import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';
import AnimatedTextInput from './AnimatedTextInput';
const Signup = () => {
  const firstNameInputFocused = useRef(new Animated.Value(0)).current;
  const lastNameInputFocused = useRef(new Animated.Value(0)).current;

  const createAnimation = (animation, targetValue) => {
    // console.log('animation', animation);
    Animated.timing(animation, {
      toValue: targetValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // const reverseanimation = animation => {
  //   Animated.timing(animation, {
  //     toValue: 0,
  //     duration: 200,
  //     useNativeDriver: false,
  //   }).start();
  // };

  const FirstNameFocus = isFocused => {
    createAnimation(firstNameInputFocused, isFocused ? 1 : 0);
    // reverseanimation(lastNameInputFocused);
  };

  const LastNameFocus = isFocused => {
    createAnimation(lastNameInputFocused, isFocused ? 1 : 0);
    // reverseanimation(firstNameInputFocused);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.maincontainer}>
        <TouchableOpacity style={styles.backbutton}>
          <Image
            source={require('./assets/logo/Backicon.png')}
            style={styles.backButtonImage}
          />
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.title}>What is Your Name?</Text>
          <AnimatedTextInput
            inputFocused={firstNameInputFocused}
            placeholder="First Name"
            onFocus={FirstNameFocus}
            imageSource={require('./assets/logo/user.png')}
          />
          <AnimatedTextInput
            inputFocused={lastNameInputFocused}
            placeholder="Last Name"
            onFocus={LastNameFocus}
            imageSource={require('./assets/logo/user.png')}
          />
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
          <Text style={{margin: 5, fontSize: 15}}>
            By Continuing, you agree to our
          </Text>
          <Text>
            <Text style={styles.link}>Terms</Text>
            {'  '}
            and{'  '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1, padding: 25},
  title: {
    color: '#1770BE',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Anybody-ExtraBold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Anybody-Black',
  },
  nextButton: {
    backgroundColor: '#1770BE',
    borderRadius: 48,
    marginVertical: 15,
    paddingHorizontal: 27,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
  },
  backbutton: {
    backgroundColor: '#1770BE',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
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
  link: {
    color: '#1770BE',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  detelisView: {
    marginTop: 20,
  },
  backButtonImage: {
    width: 20,
    height: 15,
    marginRight: 10,
  },
});

export default Signup;

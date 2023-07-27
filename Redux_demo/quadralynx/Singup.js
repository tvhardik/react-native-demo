import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';

const Signup = () => {
  // const [isHidden, setIsHidden] = useState(false);
  // const animationValue = new Animated.Value(0);
  // const animateAndHideImage = () => {
  //   Animated.timing(animationValue, {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     setIsHidden(true);
  //   });
  // };

  // const moveLeft = {
  //   transform: [
  //     {
  //       translateX: animationValue.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, -200],
  //       }),
  //     },
  //   ],
  // };

  // const ImageStyle = {
  //   width: 67,
  //   height: 70,
  //   position: 'absolute',
  //   margin: 15,
  //   opacity: isHidden ? 0 : 1,
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Maincontainer}>
        <TouchableOpacity style={styles.Backbutton}>
          <Text style={styles.BackButtonText}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.Title}>What is Your Name?</Text>
          <View style={styles.TextInputContainer}>
            <Image
              source={require('./assets/logo/user.png')}
              style={styles.Icon}
              resizeMode="contain"
            />
            <TextInput style={styles.TextInput} placeholder="First Name" />
          </View>
          <View style={styles.TextInputContainer}>
            <Image
              source={require('./assets/logo/user.png')}
              style={styles.Icon}
              resizeMode="contain"
            />
            <TextInput style={styles.TextInput} placeholder="Last Name" />
          </View>
          <TouchableOpacity style={styles.NextButton}>
            <Text style={styles.NextButtonText}>NEXT</Text>
          </TouchableOpacity>
          <Text>By Continuing, you agree to our</Text>
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

export default Signup;

const styles = StyleSheet.create({
  Maincontainer: {flex: 1, padding: 25},
  Title: {color: '#1770BE', fontSize: 20},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#F1F1F1',
    borderWidth: 2,
    borderColor: '#E6E6E6',
    marginVertical: 10,
  },
  TextInput: {
    flex: 1,
    fontSize: 15,
  },
  Icon: {
    width: 64,
    height: 64,
    margin: 3,
  },
  NextButtonText: {color: '#ffffff', fontSize: 18},
  NextButton: {
    backgroundColor: '#1770BE',
    borderRadius: 48,
    elevation: 15,
    marginVertical: 15,
    paddingHorizontal: 27,
    paddingVertical: 10,
  },
  Details: {
    color: 'black',
    margin: 30,
  },
  Backbutton: {
    backgroundColor: '#1770BE',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  BackButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
  },
  link: {
    color: '#1770BE',
    textDecorationLine: 'underline',
  },
  DetelisView: {
    // backgroundColor: 'red',
    marginTop: 20,
  },
});

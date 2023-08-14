import React, {useState, useEffect} from 'react';
import {Animated, Image, StyleSheet, TextInput, View} from 'react-native';

const AnimatedTextInput = ({
  inputFocused,
  placeholder,
  onFocus,
  imageSource,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // const inputFocuse = new Animated.Value(!isFocused ? 1 : 0);
  const focusTextInput = () => {
    // console.log('focusTextInput');
    // console.log('isFocused', isFocused);
    // setIsFocused(!isFocused);
    // onFocus(isFocused);
    // Animated.timing(inputFocuse, {
    //   toValue: 1,
    //   duration: 200,
    //   useNativeDriver: !false,
    // }).start();
  };

  const blurTextInput = () => {
    // console.log('blurTextInput');
    // setIsFocused(false);
    // onBlur && onBlur();
    // Animated.timing(inputFocuse, {
    //   toValue: 0,
    //   duration: 200,
    //   useNativeDriver: !true,
    // }).start();
  };

  // console.log('isFocused', isFocused);

  return (
    <View
      style={[
        styles.textInputContainer,
        {borderColor: isFocused ? '#007AFF' : '#E6E6E6'},
      ]}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}>
        <Image source={imageSource} style={styles.icon} resizeMode="contain" />
      </Animated.View>

      <Animated.View
        style={[
          styles.placeholderContainer,
          {
            transform: [
              {
                translateX: inputFocused.interpolate({
                  inputRange: [0, 1],
                  outputRange: [40, -40],
                }),
              },
            ],
          },
        ]}>
        <TextInput
          style={styles.textInput}
          onPressIn={() => {
            onFocus(!isFocused);
            setIsFocused(!isFocused);
          }}
          placeholder={placeholder}
          onFocus={focusTextInput}
          onBlur={blurTextInput}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    marginVertical: 15,
    margin: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Anybody-Italic',
  },
  iconContainer: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 70,
    margin: 3,
    zIndex: 10,
    // backgroundColor: '#ffffff',
    borderRadius: 26,
    marginLeft: 33,
  },
  placeholderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AnimatedTextInput;

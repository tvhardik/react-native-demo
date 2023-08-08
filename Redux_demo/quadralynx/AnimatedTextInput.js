import React, {useState} from 'react';
import {Animated, Image, StyleSheet, TextInput, View} from 'react-native';

const AnimatedTextInput = ({
  inputFocused,
  placeholder,
  onFocus,
  imageSource,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const Focus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const Blur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

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
            marginLeft: inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [40, -40],
            }),
          },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onFocus={Focus}
          onBlur={Blur}
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
    marginVertical: 10,
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
    width: 59,
    height: 59,
    margin: 3,
    backgroundColor: '#ffffff',
    borderRadius: 26,
  },
  placeholderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AnimatedTextInput;

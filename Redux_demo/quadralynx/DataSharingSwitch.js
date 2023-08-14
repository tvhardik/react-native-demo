import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const CustomAnimatedSwitch = ({value, onValueChange, labelText}) => {
  const [animValue] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    const toValue = value ? 0 : 1;

    Animated.timing(animValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    onValueChange(!value);
  };

  return (
    <TouchableOpacity style={styles.switchContainer} onPress={toggleSwitch}>
      <Text style={styles.switchText}>{labelText}</Text>
      <Animated.View
        style={[
          styles.switch,
          {
            backgroundColor: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['gray', '#02476F'],
            }),
          },
        ]}>
        <Animated.View
          style={{
            ...styles.thumb,
            transform: [
              {
                translateX: animValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-3, 44],
                }),
              },
            ],
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  switchText: {
    fontSize: 16,
    fontFamily: 'Anybody-Regular',
  },
  switch: {
    width: 82,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});

export default CustomAnimatedSwitch;

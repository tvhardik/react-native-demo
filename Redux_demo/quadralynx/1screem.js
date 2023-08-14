import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PaginationDots from './PaginationDots';

const FirstScreen = ({numDots, activePage, setActivePage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1screem</Text>
      <PaginationDots
        numDots={numDots}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default FirstScreen;

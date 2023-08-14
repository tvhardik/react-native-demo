import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const PaginationDots = ({numDots, activePage, setActivePage}) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({length: numDots}).map((dot, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.paginationDot,
            {
              backgroundColor: i === activePage ? '#00476F' : 'transparent',
              borderColor: i === activePage ? 'transparent' : '#00476F',
            },
          ]}
          onPress={() => setActivePage(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 5,
  },
});

export default PaginationDots;

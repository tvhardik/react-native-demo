import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const SearchAndFlagButton = ({imageSource, buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.searchAndFlagView} onPress={onPress}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

SearchAndFlagButton.propTypes = {
  imageSource: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = {
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
  image: {height: 40, width: '43%'},
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    flex: 0.9,
    fontFamily: 'Anybody-Black',
  },
};

export default SearchAndFlagButton;

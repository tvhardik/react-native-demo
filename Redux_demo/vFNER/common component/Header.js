import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {scale, verticalScale} from '../../assets/fonts/Scale/Scalestyle';
const Header = ({
  title,
  departmentName,
  time,
  firstImageSource,
  lastImageSource,
}) => {
  return (
    <View style={styles.header}>
      <StatusBar hidden />
      <Image source={firstImageSource} style={styles.headerImage} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{departmentName}</Text>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>{time}</Text>
      </View>
      <View style={styles.linestyle}></View>
      <Image source={lastImageSource} style={styles.manuImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '13%',
    // paddigTop: 0,
    flexDirection: 'row',
    backgroundColor: '#E01522',
    // justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
    paddingHorizontal: 8,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'futura medium bt',
    fontSize: 16,
  },
  headerImage: {
    width: scale(13),
    resizeMode: 'contain',
    // marginHorizontal: scale(7),
  },
  linestyle: {
    // borderWidth: 1,
    width: 1,
    height: scale(14),
    // borderColor: '#fff',
    backgroundColor: '#fff',
    // marginHorizontal: scale(10),
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  manuImage: {
    width: scale(10),
    resizeMode: 'contain',
    marginLeft: 15,
  },
});

export default Header;

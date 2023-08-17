import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../assets/fonts/Scale/Scalestyle';
const TrainingScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  const bottom = screenHeight >= 812 ? 30 : 20;
  return (
    <ImageBackground
      source={require('./assets/logo/BackgroundImage.png')}
      style={styles.backgroundImage}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Image
              source={require('./assets/logo/alert.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.infoText}>Sustain Vowel</Text>
              <Text style={styles.infoTextLarge}>“A”</Text>
            </View>
          </View>
          <View style={styles.pointsContainer}>
            <View style={styles.ptsView}>
              <Text style={styles.ptsAndMinText}>87 Pts</Text>
            </View>
            <View style={styles.ptsView}>
              <Text style={styles.ptsAndMinText}>00:30</Text>
            </View>
          </View>
        </View>
        <Image
          source={require('./assets/logo/GroupImage.png')}
          style={styles.lineImage}
        />
        <View style={{flex: 1}}>
          <Image
            source={require('./assets/logo/bird.png')}
            style={styles.birdImage}
          />
          <Image
            source={require('./assets/logo/coin.png')}
            style={styles.coinImage}
          />
          <Image
            source={require('./assets/logo/stone.png')}
            style={styles.stoneImage}
          />
          <Image
            source={require('./assets/logo/diamond.png')}
            style={styles.diamondImage}
          />
        </View>
        <TouchableOpacity style={[styles.quitButton, {bottom: scale(bottom)}]}>
          <Text style={styles.quitButtonText}>QUIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  contentContainer: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    marginHorizontal: scale(38),
    top: scale(16),
    padding: scale(8),
    zIndex: 2,
  },
  infoContainer: {
    backgroundColor: '#fff',
    height: scale(63),
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  icon: {
    alignSelf: 'center',
    height: '100%',
    width: scale(40),
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 25,
  },
  infoText: {
    textAlign: 'center',
    color: '#1770BE',
    fontSize: 16,
    fontFamily: 'Anybody-ExtraBold',
  },
  infoTextLarge: {
    textAlign: 'center',
    color: '#1770BE',
    fontSize: 30,
    fontFamily: 'Anybody-ExtraBold',
  },
  pointsContainer: {
    marginTop: scale(9),
    marginVertical: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ptsView: {
    borderRadius: 10,
    paddingHorizontal: scale(23),
    paddingVertical: scale(5),
    backgroundColor: '#1770BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    bottom: 0,
    position: 'absolute',
  },
  lineImage: {
    flex: 1,
    height: verticalScale(480),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
  ptsAndMinText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Anybody-ExtraBold',
  },
  birdImage: {
    width: scale(128),
    height: scale(89),
    position: 'absolute',
    transform: [{translateX: scale(15)}, {translateY: verticalScale(185)}],
  },
  diamondImage: {
    width: scale(130),
    height: scale(130),
    position: 'absolute',
    transform: [{translateX: scale(220)}, {translateY: verticalScale(380)}],
  },
  coinImage: {
    width: scale(128),
    height: scale(130),
    position: 'absolute',
    transform: [{translateX: scale(130)}, {translateY: verticalScale(220)}],
  },
  stoneImage: {
    width: scale(128),
    height: scale(130),
    position: 'absolute',
    transform: [{translateX: scale(300)}, {translateY: verticalScale(110)}],
  },
  quitButton: {
    backgroundColor: '#1770BE',
    bottom: scale(20),
    alignSelf: 'center',
    paddingVertical: scale(13),
    paddingHorizontal: scale(23),
    borderRadius: 48,
    position: 'absolute',
  },
  quitButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Anybody-ExtraBold',
  },
});

export default TrainingScreen;

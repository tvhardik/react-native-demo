import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/logo/BackgroundImage.png')}
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
              <Image
                source={require('./assets/logo/alert.png')}
                style={styles.icon}
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
              <View style={styles.minView}>
                <Text style={styles.ptsAndMinText}>00:30</Text>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/logo/GroupImage.png')}
              style={styles.lineImage}
            />
            {/* <View style={styles.centeredImageContainer}> */}
            <Image
              source={require('./assets/logo/bird.png')}
              style={styles.birdImage}
            />
            <Image
              source={require('./assets/logo/diamond.png')}
              style={styles.diamondImage}
            />
            <Image
              source={require('./assets/logo/coin.png')}
              style={styles.coinImage}
            />
            <Image
              source={require('./assets/logo/stone.png')}
              style={styles.stoneImage}
            />
            {/* </View> */}
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.quitButton}>
              <Text style={styles.quitButtonText}>QUIT</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundImage: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    resizeMode: 'stretch',
  },
  contentContainer: {
    backgroundColor: '#F1F1F1',
    // position: 'absolute',
    // top: 20,
    borderRadius: 10,
    // paddingTop: 100,
    // width: '75%',
    marginHorizontal: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    width: '85%',
    alignSelf: 'center',
    top: 8,
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 15,
    marginLeft: 15,
    height: 35,
    width: 40,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 15,
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
    marginVertical: 15,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ptsView: {
    height: 35,
    width: 124,
    borderRadius: 10,
    backgroundColor: '#1770BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minView: {
    height: 35,
    width: 108,
    borderRadius: 10,
    backgroundColor: '#1770BE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  lineImage: {
    height: '70%',
    width: '100%',
    // top: 10,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  ptsAndMinText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Anybody-ExtraBold',
  },
  birdImage: {
    width: 128,
    height: 89,
    // position: 'absolute',
    transform: [{translateX: 10}, {translateY: 300}],
  },
  centeredImageContainer: {
    justifyContent: 'center',
  },
  diamondImage: {
    width: 120,
    height: 120,
    // position: 'absolute',
    transform: [{translateX: 250}, {translateY: 90}],
  },
  coinImage: {
    width: 128,
    height: 130,
    // position: 'absolute',
    transform: [{translateX: 130}, {translateY: 250}],
  },
  stoneImage: {
    width: 128,
    height: 130,
    // position: 'absolute',
    transform: [{translateX: 325}, {translateY: 50}],
  },
  quitButton: {
    backgroundColor: '#1770BE',
    bottom: 20,
    position: 'absolute',
    width: 96,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quitButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Anybody-ExtraBold',
  },
});

export default TrainingScreen;

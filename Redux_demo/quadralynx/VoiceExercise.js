import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const VoiceExercise = () => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={{flex: 2, justifyContent: 'space-around', zIndex: 100}}>
        <View style={styles.alertView}>
          <Image
            source={require('./assets/logo/alert.png')}
            style={styles.alertImage}
          />
          <Text style={styles.alertText}>
            “Good Morning! I Am Good,{'\n'}Thank You!”
          </Text>
        </View>
        <View style={styles.exerciseView}>
          <Image
            source={require('./assets/logo/Exercise.png')}
            style={styles.exerciseImage}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.rangeText}>Too{'\n'}Quiet</Text>
            <Text style={[styles.rangeText, {marginTop: -20}]}>
              Just{'\n'}Right
            </Text>
            <Text style={styles.rangeText}>Too{'\n'}Loud</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomImageView}>
        <Image
          source={require('./assets/logo/Group4869.png')}
          resizeMode="cover"
          style={styles.likeimage}
        />
        <Image
          source={require('./assets/logo/Group48911.png')}
          style={styles.backgroundImage}
        />
        <TouchableOpacity style={styles.quitButton}>
          <Text style={styles.quitButtonText}>QUIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VoiceExercise;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  alertView: {
    alignItems: 'center',
    // marginBottom: 35,
  },
  alertImage: {height: 63, width: 72},
  alertText: {
    textAlign: 'center',
    color: '#1770BE',
    marginTop: 35,
    fontFamily: 'Anybody-ExtraBold',
    fontSize: 20,
  },
  exerciseImage: {marginBottom: 15, height: 85, width: '80%'},
  exerciseView: {
    // width: 325,
    // height: 157,
    marginHorizontal: 25,
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingBottom: 15,
    paddingTop: 25,
    // zIndex: 10,
  },
  bottomImageView: {
    flex: 1,
    alignItems: 'center',
    // position: 'absolute',
    bottom: 0,
    // width: '100%',
  },
  quitButton: {
    backgroundColor: '#ffffff',
    bottom: 10,
    position: 'absolute',
    width: 106,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeimage: {
    width: '100%',
    height: 260,
    position: 'absolute',
    bottom: -80,
  },
  backgroundImage: {
    width: '100%',
    height: 400,
    position: 'absolute',
    bottom: 20,
  },
  quitButtonText: {
    fontSize: 20,
    color: '#1770BE',
    fontFamily: 'Anybody-ExtraBold',
  },
  rangeText: {textAlign: 'center', color: 'black'},
});

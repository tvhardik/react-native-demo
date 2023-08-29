import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  PanResponder,
  Animated,
  Alert,
} from 'react-native';
import Header from './common component/Header';
import {images} from './common component/MyImage';
import {scale} from '../assets/fonts/Scale/Scalestyle';

const boxesData = [
  {key: 'arrivals', text: 'Arrivals'},
  {key: 'exits', text: 'Exits'},
  {key: 'closed', text: 'Closed?'},
  {key: 'staffing', text: 'Staffing?'},
];

const EmergencyDepartment = () => {
  let initialXPosition = 0;
  let initialYPosition = 0;

  const pan = useRef(
    new Animated.ValueXY({x: initialXPosition, y: initialYPosition}),
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderStart: (e, gestureState) => {
        // console.log('gestureState start >>', gestureState);
      },
      onPanResponderEnd: (e, gestureState) => {
        console.log('gestureState end >>', gestureState);
        const Top = 0;
        const Bottom = 200;

        const finalPositionX = initialXPosition + gestureState.dx;
        const finalPositionY = initialYPosition + gestureState.dy;

        // let translateXArray = [];
        // let translateYArray = [];
        // translateXArray.push(finalPositionX);
        // translateYArray.push(finalPositionY);
        // console.log('finalPositionX >>>', finalPositionX);
        // console.log('finalPositionY >>>', finalPositionY);
        const isInsideFlatlistArea =
          finalPositionY >= Top && finalPositionY <= Bottom;
        finalPositionX >= Top && finalPositionX <= Top;
        // console.log(' drop area >>', isInsideFlatlistArea);

        if (
          isInsideFlatlistArea ||
          finalPositionX === initialXPosition ||
          finalPositionY === initialYPosition
        ) {
          // console.log('isInsideFlatlistArea >>> ', isInsideFlatlistArea);
          // console.log('translateXArray >>', translateXArray);
          // console.log('translateYArray >>', translateYArray);
          initialXPosition = finalPositionX;
          initialYPosition = finalPositionY;
          // console.log('initialXPosition >>', initialXPosition);
          // console.log('initialYPosition >>', initialYPosition);
        } else {
          Alert.alert('2112121212');
        }
      },

      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  const data = Array.from({length: 24}, (i, index) => index);
  return (
    <View style={styles.container}>
      <Header
        firstImageSource={require('./assets/Icons/aimbulanceIcon.png')}
        departmentName="Emergency Department"
        title="Friday Noon"
        time="58:06"
        lineImage={require('./assets/Icons/line.png')}
        lastImageSource={require('./assets/Icons/manu.png')}
      />
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={images.BlueDot}
            style={{
              width: scale(9),
              height: scale(9),
              position: 'absolute',
              zIndex: 1,

              left: scale(10),

              transform: [{translateX: pan.x}, {translateY: pan.y}],
            }}
            {...panResponder.panHandlers}
          />

          <Image source={images.Vector} style={styles.image} />
          <Image
            source={images.VectorAimbulance}
            style={styles.VectorAimbulanceImage}
          />
        </View>
        <View style={{flex: 1.1}}>
          <View style={styles.waitingView}>
            <Text>Waiting</Text>
          </View>
          <FlatList
            data={data}
            numColumns={6}
            renderItem={({item}) => (
              <View
                style={styles.boxItem}
                onLayout={event => {
                  // console.log('width height >>>', event.nativeEvent.layout);
                }}>
                <Image source={images.BlueDot} style={styles.BlueDot} />
                <Image source={images.WhiteDot} style={styles.WhiteDot} />
              </View>
            )}
            keyExtractor={item => item.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
          <View style={styles.bottomView}>
            <View style={styles.bottomstyle} />
            <Image source={images.Woking} style={styles.WokingImage} />
            <View style={styles.bottomstyle} />
          </View>
        </View>
        <View style={styles.hospitleManuView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.StethoscopeImage} style={styles.ManuImage} />
            <Image source={images.ManuImage} style={styles.ManuImage} />
          </View>
          <Image source={images.ScissorsImage} style={styles.scissorsImage} />
          <View style={{marginTop: 0}}>
            <View style={styles.dataView}>
              <Image source={images.MapImage} style={styles.mapimage} />
              <Text style={{color: '#fff', fontFamily: 'futura medium bt'}}>
                Hospital view
              </Text>
            </View>
            <View style={styles.dataView}>
              <Image source={images.DataImage} style={styles.dataimage} />
              <Text style={{color: '#fff', fontFamily: 'futura medium bt'}}>
                Data
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxesContainer}>
          {boxesData.map(box => (
            <TouchableOpacity style={styles.rectangleBox} key={box.key}>
              <Text style={styles.boxText}>{box.text}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.styleBox}>
            <Text style={styles.styleBoxText}>Paperwork</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E01522',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.2,
    top: scale(15),
  },
  VectorAimbulanceImage: {
    width: '100%',
    height: scale(40),
    top: scale(15),
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: scale(40),
    resizeMode: 'contain',
  },
  boxesContainer: {
    flex: 0.3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rectangleBox: {
    width: scale(39),
    height: '17%',
    backgroundColor: '#FDCF76',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBox: {
    width: scale(39),
    height: scale(23),
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 14,
    fontFamily: 'futura medium bt',
    color: 'black',
  },
  styleBoxText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'futura medium bt',
  },
  flatListContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: scale(10),
  },
  boxItem: {
    margin: 4,
    width: scale(22),
    height: scale(22),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  WokingImage: {
    width: '22%',
    height: scale(28),
    resizeMode: 'contain',
    bottom: 10,
  },
  BlueDot: {
    width: scale(9),
    height: scale(9),
    right: scale(4),
  },
  dragBlueIcon: {
    width: scale(9),
    height: scale(9),
    position: 'absolute',
    zIndex: 1,
    left: scale(10),
  },
  WhiteDot: {width: scale(9), height: scale(9), left: scale(4)},
  waitingView: {
    height: scale(99),
    width: scale(30),
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 5,
    marginTop: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomstyle: {
    height: scale(20),
    width: scale(60),
    backgroundColor: '#EC323E',
    borderRadius: 5,
  },
  hospitleManuView: {
    flex: 0.4,
    alignItems: 'center',
    marginHorizontal: scale(3),
    justifyContent: 'center',
  },
  twoRoundImage: {height: '50%', width: scale(70), resizeMode: 'contain'},
  scissorsImage: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(5),
    resizeMode: 'contain',
  },
  ManuImage: {
    height: scale(30),
    width: scale(30),
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  mapimage: {width: '20%', height: scale(8), resizeMode: 'contain'},
  dataimage: {width: '20%', height: scale(8), resizeMode: 'contain'},
  hospitelDetelisView: {flexDirection: 'row'},
  dataView: {flexDirection: 'row', marginTop: 20},
});

export default EmergencyDepartment;
// onPanResponderEnd: (event, gestureState) => {
//   // Boundaries of the flatlist's area
//   const flatlistTop = 0;
//   const flatlistBottom = 195;

//   // Get the final position of the animated view
//   const finalPositionX = pan.x._value + gestureState.dx;
//   const finalPositionY = pan.y._value + gestureState.dy;

//   // Check if the final position is within the flatlist's area
//   const isInsideFlatlistArea =
//     finalPositionY >= flatlistTop && finalPositionY <= flatlistBottom;

//   // Calculate the new translation values based on the decision
//   if (isInsideFlatlistArea) {
//     pan.setOffset({x: finalPositionX, y: finalPositionY});
//     pan.setValue({x: 0, y: 0});
//   } else {
//     // Move the animated view back to its original position
//     Animated.spring(pan, {
//       toValue: {x: 0, y: 0},
//       useNativeDriver: false,
//     }).start();
//   }
// },

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from './common component/Header';
import {images} from './common component/MyImage';
import {scale} from '../assets/fonts/Scale/Scalestyle';

const EmergencyDepartment = () => {
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
          <Image source={images.Vector} style={styles.image} />
          <Image
            source={images.VectorAimbulance}
            style={styles.VectorAimbulanceImage}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.waitingView}></View>
          <FlatList
            data={data}
            numColumns={6}
            renderItem={({item}) => (
              <View style={styles.boxItem}>
                <Image source={images.BlueDot} style={styles.BlueDot} />
                <Image source={images.WhiteDot} style={styles.WhiteDot} />
              </View>
            )}
            keyExtractor={item => item.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
          <View style={styles.bottomView}>
            <View style={styles.bottomstyle}></View>
            <Image source={images.Woking} style={styles.WokingImage} />
            <View style={styles.bottomstyle}></View>
          </View>
        </View>
        <View style={styles.hospitleManuView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.ScissorsImage} style={styles.scissorsImage} />
            <Image source={images.ScissorsImage} style={styles.scissorsImage} />
          </View>
          {/* <Image source={images.TwoRoundImage} style={styles.twoRoundImage} /> */}
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
          <TouchableOpacity style={styles.rectangleBox}>
            <Text style={styles.boxText}>Arrivals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rectangleBox}>
            <Text style={styles.boxText}>Exits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rectangleBox}>
            <Text style={styles.boxText}>Closed?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rectangleBox}>
            <Text style={styles.boxText}>Staffing?</Text>
          </TouchableOpacity>
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
    // height: scale(23),
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
    width: scale(8),
    height: scale(8),
    right: scale(4),
  },
  WhiteDot: {width: scale(8), height: scale(8), left: scale(4)},
  waitingView: {
    height: scale(99),
    width: scale(30),
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 5,
    marginTop: scale(12),
  },
  bottomView: {flexDirection: 'row', justifyContent: 'space-between'},
  bottomstyle: {
    height: scale(20),
    width: scale(60),
    backgroundColor: '#EC323E',
    borderRadius: 5,
  },
  hospitleManuView: {
    flex: 0.4,
    alignItems: 'center',
    left: 5,
    justifyContent: 'center',
  },
  twoRoundImage: {height: '50%', width: scale(70), resizeMode: 'contain'},
  scissorsImage: {
    height: scale(30),
    width: scale(30),
    marginHorizontal: 8,
    // position: 'absolute',
    resizeMode: 'contain',
  },
  mapimage: {width: '20%', height: scale(8), resizeMode: 'contain'},
  dataimage: {width: '20%', height: scale(8), resizeMode: 'contain'},
  hospitelDetelisView: {flexDirection: 'row'},
  dataView: {flexDirection: 'row', marginTop: 20},
});

export default EmergencyDepartment;

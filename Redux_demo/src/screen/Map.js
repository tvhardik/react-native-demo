import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
// import locationIcon from './locationIcon.png';
import Icons from 'react-native-vector-icons/Entypo';
const Map = () => {
  const [mLat, setMLat] = useState(0);
  const [mLong, setMLong] = useState(0);

  useEffect(() => {
    requestLocationPermission();
    getLocation();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setMLat(position.coords.latitude);
        // console.log(position.coords.latitude, 'latitude>>>>');
        setMLong(position.coords.longitude);
        // console.log(position.coords.longitude, 'longitude>>>>');
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={{flex: 1}}>
      {mLat !== 0 && mLong !== 0 && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: mLat,
            longitude: mLong,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onRegionChange={region => {
            // setMLat(region.latitude);
            // setMLong(region.longitude);
          }}>
          <Marker coordinate={{latitude: mLat, longitude: mLong}} />
        </MapView>
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={getLocation}>
        <Icons name="location-pin" size={25} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

export default Map;

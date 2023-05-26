import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Removeitemfromcart} from '../Redux/Actions';

const Addtocart = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeitem = Index => {
    dispatch(Removeitemfromcart(Index));
  };
  return (
    <View>
      <FlatList 
        data={items}
        renderItem={({item, index}) => {
          return (
            <View style={styles.FlatList}>
              <Image
                source={{uri: item.Image}}
                style={{width: 100, height: 100}}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                <Text style={{color: 'black'}}>{item.color}</Text>
                <Text style={{fontWeight: '500'}}>{item.specification}</Text>
                <TouchableOpacity
                  style={styles.Remove}
                  onPress={() => {
                    removeitem(index);
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                    }}>
                    Rmove
                  </Text>
                </TouchableOpacity>
                {/* <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 20,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text style={{fontSize: 15}}>+</Text>
                  </TouchableOpacity>
                  <Text style={{paddingLeft: 10}}>{'0'}</Text>
                  <TouchableOpacity
                    style={{
                      height: 20,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                      marginLeft: 10,
                    }}>
                    <Text style={{fontSize: 15}}>-</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    alignSelf: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 10,
  },
  Remove: {
    height: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  container: {
    backgroundColor: '#f5f5f5',
  },
});
export default Addtocart;

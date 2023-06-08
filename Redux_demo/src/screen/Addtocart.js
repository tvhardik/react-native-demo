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
import {Removeitemfromcart, Additemtocart} from '../Redux/Actions';

const Addtocart = props => {
  const {cartData} = useSelector(state => state.ProductReducers);
  const dispatch = useDispatch();

  const increament = item => {
    dispatch(Additemtocart(item));
  };
  const decreament = item => {
    dispatch(Removeitemfromcart(item));
  };

  const cartItems = cartData;

  const totalPrice = cartItems.reduce(
    (total, item) => (total = total + item.qty * item.price),
    0,
  );
  const itemCount = cartItems.reduce(
    (total, item) => (total = total + item.qty),
    0,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.FlatList}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 100, resizeMode: 'contain'}}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: 'black',
                  }}>
                  {item.title}
                </Text>
                <Text style={{color: 'green'}}>
                  {'$'}
                  {item.price}
                </Text>
                <Text style={{fontWeight: '500'}}>{item.category}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 4,
                    padding: 2,
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 22,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                    onPress={() => increament(item)}>
                    <Text style={{fontSize: 15, color: '#ffffff'}}>+</Text>
                  </TouchableOpacity>
                  <Text style={{paddingLeft: 10}}>{item.qty}</Text>
                  <TouchableOpacity
                    style={{
                      height: 22,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                      marginLeft: 10,
                    }}
                    onPress={() => decreament(item)}>
                    <Text style={{fontSize: 15, color: '#ffffff'}}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 0,
          padding: 5,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 500}}>{'Addeditem  ' + itemCount}</Text>
        <Text style={{fontWeight: 500, color: 'green'}}>
          {'Totel $' + totalPrice}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    padding: 10,
  },
  Remove: {
    height: 22,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
});
export default Addtocart;

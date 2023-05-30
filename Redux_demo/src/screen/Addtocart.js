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
  const {addtocart} = useSelector(state => state.ProductReducers);
  const dispatch = useDispatch();
  const removeitem = id => {
    dispatch(Removeitemfromcart(id));
  };
  const increaseQuantity = id => {
    dispatch(IncreaseQuantity(id));
  };

  const decreaseQuantity = id => {
    dispatch(DecreaseQuantity(id));
  };
  const cartItems = useSelector(state => state.ProductReducers.addtocart); //Product add to cart count itema
  const itemCount = cartItems ? cartItems.length : 0;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); //totel price
  return (
    <View style={styles.container}>
      <FlatList
        data={addtocart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.FlatList}>
              <Image
                source={{uri: item.image}}
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
                  {item.title}
                </Text>
                <Text style={{color: 'green'}}>
                  {'$'}
                  {item.price}
                </Text>
                <Text style={{fontWeight: '500'}}>{item.category}</Text>
                <TouchableOpacity
                  style={styles.Remove}
                  onPress={() => removeitem(item)}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 4,
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 20,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                    onPress={() => increaseQuantity(itemId)}>
                    <Text style={{fontSize: 15}}>+</Text>
                  </TouchableOpacity>
                  <Text style={{paddingLeft: 10}}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={{
                      height: 20,
                      backgroundColor: 'green',
                      width: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                      marginLeft: 10,
                    }}
                    onPress={() => decreaseQuantity(itemId)}>
                    <Text style={{fontSize: 15}}>-</Text>
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
        <Text style={{fontWeight: 500}}>
          {'Addeditem' + ' (' + itemCount + ')'}
        </Text>
        <Text style={{fontWeight: 500, color: 'green'}}>
          {'Totel $' + totalPrice}
        </Text>
      </View>
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
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
});
export default Addtocart;

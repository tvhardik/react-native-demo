import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Removeitemfromcart} from '../Redux/Actions';

const Addtocart = () => {
  const [productList, setProductList] = useState([]);
  const {addtocart} = useSelector(state => state.ProductReducers);
  const dispatch = useDispatch();
  const removeitem = item => {
    dispatch(Removeitemfromcart(item));
  };
  const increament = async (index, item) => {
    let itemData = item;
    itemData.qty = itemData?.qty ? itemData?.qty : 1;
    if (itemData.qty > 0) {
      itemData.qty = itemData.qty += 1;
      setProductList(productList);
      dispatch(Removeitemfromcart(productList));
    }
  };
  const decreament = async (index, item) => {
    let itemData = item;
    itemData.qty = itemData?.qty ? itemData?.qty : 1;
    if (itemData.qty !== 1) {
      itemData.qty = itemData.qty - 1;
      setProductList(productList);
      dispatch(Removeitemfromcart(productList));
    }
  };
  //item count and price
  const cartItems = useSelector(state => state.ProductReducers.addtocart);
  const itemCount = cartItems ? cartItems.length : 0;
  const totalPrice = cartItems.reduce(
    (total, item) => (total = total + item.qty * item.price),
    0,
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={addtocart}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        renderItem={({index, item}) => {
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
                <TouchableOpacity
                  style={styles.Remove}
                  onPress={() => removeitem(item)}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#ffffff',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
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
                    onPress={() => increament(index, item)}>
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
                    onPress={() => decreament(index, item)}>
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
          // flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 500}}>{'Addeditem  ' + itemCount}</Text>
        <Text style={{fontWeight: 500, color: 'green'}}>
          {'Totel $' + totalPrice}
        </Text>
        {/* <View>
          <TouchableOpacity
            style={{
              height: 20,
              width: 40,
              backgroundColor: 'green',
              paddingLeft: 20,
            }}>
            <Text>CheckOut</Text>
          </TouchableOpacity>
        </View> */}
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

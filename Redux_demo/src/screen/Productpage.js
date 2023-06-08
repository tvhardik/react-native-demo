import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Getitem, Additemtocart} from '../Redux/Actions';
import {useEffect} from 'react';

const Productpage = props => {
  const addItem = items => {
    dispatch(Additemtocart(items));
  };
  const {product} = useSelector(state => state.ProductReducers);
  const dispatch = useDispatch();
  const fetchProduct = () => {
    dispatch(Getitem());
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const cartItems = useSelector(state => state.ProductReducers.cartData); //Product add to cart count itema
  const dispatchitem = useDispatch();
  useEffect(() => {
    dispatchitem(Getitem());
  }, []);
  const itemCount = cartItems.reduce(
    (total, item) => (total = total + item.qty),
    0,
  );
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, color: '#000'}}>Products</Text>
        <TouchableOpacity
          style={styles.Viewcart}
          onPress={() => props.navigation.navigate('addtocart')}>
          <Text
            style={{
              fontSize: 20,
              padding: 2,
              textAlign: 'center',
              color: '#ffffff',
            }}>
            {itemCount}
          </Text>
          <Image
            style={{width: 30, height: 30}}
            source={require('../img/shopping-cart.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={product}
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
                  style={styles.Addtocart}
                  onPress={() => addItem(item)}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#ffffff',
                    }}>
                    ADD TO CART
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <StatusBar hidden={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
  },
  Header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#ffffff',
  },
  FlatList: {
    alignSelf: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    padding: 15,
  },
  Addtocart: {
    height: 25,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  Viewcart: {
    height: 30,
    width: 80,
    borderRadius: 20,
    backgroundColor: '#1e90ff',
    marginLeft: 165,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default Productpage;

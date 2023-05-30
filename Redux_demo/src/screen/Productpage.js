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

  const cartItems = useSelector(state => state.ProductReducers.addtocart); //Product add to cart count itema
  const dispatchitem = useDispatch();

  useEffect(() => {
    dispatchitem(Getitem());
  }, []);

  const itemCount = cartItems ? cartItems.length : 0;
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, color: '#000'}}>Products</Text>
        <TouchableOpacity
          style={styles.Viewcart}
          onPress={() => props.navigation.navigate('addtocart')}>
          <Text style={{fontSize: 20, padding: 2, textAlign: 'center'}}>
            {itemCount}
          </Text>
          <Image
            style={{width: '40%', height: '100%'}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/256/57/57629.png',
            }}
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
                <Text style={{color: 'black'}}>{item.price}</Text>
                <Text style={{fontWeight: '500'}}>{item.category}</Text>
                <TouchableOpacity
                  style={styles.Addtocart}
                  onPress={() => addItem(item)}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
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
    width: '100%',
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
    marginVertical: 10,
    padding: 10,
  },
  Addtocart: {
    height: 20,
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  Viewcart: {
    height: 30,
    borderRadius: 20,
    backgroundColor: '#1e90ff',
    marginLeft: 165,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default Productpage;

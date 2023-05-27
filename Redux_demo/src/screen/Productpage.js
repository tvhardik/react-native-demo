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
import {Getitem, Additemtocart, Removeitemfromcart} from '../Redux/Actions';
// import {ProductReducers} from '../Redux/Reducers';

let productList = [
  {
    name: 'Samsung S20',
    color: 'white',
    price: '40000',
    specification: '128GB',
    Image:
      'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg',
  },
  {
    name: 'Iphone 12 ',
    color: 'white',
    price: '80000',
    specification: '256GB',
    Image:
      'https://www.apple.com/v/iphone-12/k/images/meta/iphone-12_specs__uks7xn3l3yqa_og.png?202303230955',
  },
  {
    name: 'One Plus 10 Pro',
    color: 'white',
    price: '30000',
    specification: '128GB',
    Image: 'https://static.toiimg.com/photo/msid-93587897/93587897.jpg',
  },
  {
    name: 'MI 10T',
    color: 'white',
    price: '30000',
    specification: '64GB',
    Image: 'https://www.pngmart.com/files/22/Mi-PNG-Pic.png',
  },
  {
    name: 'Reamle 10 pro',
    color: 'white',
    price: '30000',
    specification: '64GB',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXqOsEQc5oLSfEO_w7D45eh5jndm2_ZGArQ&usqp=CAU',
  },
];

const Productpage = props => {
  const {product, addtocart} = useSelector(start => start.ProductReducers);
  return (
    // const Productpage = props => {
    // const dispatch = useDispatch();

    // const addItem = items => {
    //   dispatch(Additemtocart(items));
    // };
    // const item = useSelector(state => state);
    // let addedItem = [];
    // addedItem = item;
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, color: '#000'}}>Products</Text>
        <TouchableOpacity
          style={styles.Viewcart}
          onPress={() => props.navigation.navigate('addtocart')}>
          <Text style={{fontSize: 20, padding: 2, textAlign: 'center'}}>
            {/* {addedItem.length} */}
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
        data={productList}
        renderItem={({item}) => {
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
    backgroundColor: '#f5f5f5',
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

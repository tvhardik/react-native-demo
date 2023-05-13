import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
let productList = [
  {
    name: 'Samsung S20',
    color: 'white',
    price: '40000',
    Image:
      'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg',
  },
  {
    name: 'Iphone 12 ',
    color: 'white',
    price: '80000',
    Image:
      'https://www.apple.com/v/iphone-12/k/images/meta/iphone-12_specs__uks7xn3l3yqa_og.png?202303230955',
  },
  {
    name: 'One Plus 10 Pro',
    color: 'white',
    price: '30000',
    Image: 'https://static.toiimg.com/photo/msid-93587897/93587897.jpg',
  },
  {
    name: 'MI 10T',
    color: 'white',
    price: '30000',
    Image: 'https://www.pngmart.com/files/22/Mi-PNG-Pic.png',
  },
  {
    name: 'Reamle 10 pro',
    color: 'white',
    price: '30000',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXqOsEQc5oLSfEO_w7D45eh5jndm2_ZGArQ&usqp=CAU',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, color: '#000'}}>Products</Text>
        <TouchableOpacity style={styles.Viewcart}>
          <Text style={{color: '#ffffff', fontSize: 13}}>View Cart</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={productList}
        // contentContainerStyle={{}}
        renderItem={({item}) => {
          console.log('item', item);
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
                <Text style={{fontWeight: '500'}}>{'₹' + item.price}</Text>
                <TouchableOpacity style={styles.Addtocart}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#fff',
                    }}>
                    ADD TO CART
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <StatusBar 
      hidden={true}
       />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 20,
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginLeft: 155,
  },
});
export default App;

import React from 'react';
import {Text, View, Image, ScrollView, Button} from 'react-native';
import Header from './Redux/Header';
import Product from './Redux/Product';

const App = () => {
  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: '40000',
      Image:
        'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg',
    },
    {
      name: 'Iphone Mobile',
      color: 'white',
      price: '80000',
      Image:
        'https://www.apple.com/v/iphone-12/k/images/meta/iphone-12_specs__uks7xn3l3yqa_og.png?202303230955',
    },
    {
      name: 'One plus Mobile',
      color: 'white',
      price: '30000',
      Image: 'https://static.toiimg.com/photo/msid-93587897/93587897.jpg',
    },
    {
      name: 'MI Mobile',
      color: 'white',
      price: '15000',
      Image: 'https://www.pngmart.com/files/22/Mi-PNG-Pic.png',
    },
  ];
  return (
    <View>
      <Header />

      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Product = props => {
  const item = props.item;
  return (
    <View styles={styles.cotainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 200, height: 200, margin: 30}}
          source={{uri: item.Image}}
        />
        <View>
          <Text>{item.name}</Text>
          <Text>{item.color}</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            backgroundColor: '#1e90ff',
            padding: 80,
            margin: 30,
            borderRadius: 50,
            paddingVertical: 5,
          }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
});

export default Product;

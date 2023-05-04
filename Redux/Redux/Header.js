import {Text, TouchableOpacity, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../cart';

// const Stack = createNativeStackNavigator();
const Header = () => {
  return (
    <View>
      {/* <View>
        <TouchableOpacity>
          <Text
            onPress={() => props.navigation.navigate('Login')}
            style={{
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: '#1e90ff',
              margin: 30,
              borderRadius: 50,
              paddingVertical: 5,
            }}>
            Cart
          </Text>

        </TouchableOpacity> */}
        <Button title="Cart" />
      </View>
    </View>
  );
};
export default Header;

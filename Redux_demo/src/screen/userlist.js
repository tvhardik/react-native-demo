import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const UserList = ({navigation}) => {
  const getuser = async () => {
    // id = await AsyncStorage.getItem('id');
  };
  const user = useSelector(state => state.user);
  //   console.log(user, 'user>>>');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getuser();
    const fetchUsers = async () => {
      const usersSnapshot = await firestore().collection('user').get();

      //   console.log(id, 'id>>>');
      const userList = usersSnapshot.docs.map(doc => doc.data());
      setUsers(userList);
      //   console.log(userList, 'userList>>');
    };
    fetchUsers();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('MessageScreen', {user: item})}>
      <Text style={styles.username}>
        <Image
          source={require('../assets/person.png')}
          style={{height: 30, width: 40}}
        />
        {item.firstName}
        {``} {item.lastName}
        {/* {item.email} */}
      </Text>
    </TouchableOpacity>
  );

  // console.log(id, 'id>>>>>>>>>>>>');
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  userItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  username: {
    fontSize: 18,
    height: 50,
    // paddingLeft: 15,
    // paddingVertical,
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
});

export default UserList;

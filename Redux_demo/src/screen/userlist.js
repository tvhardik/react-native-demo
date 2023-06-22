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
import {firebase} from '@react-native-firebase/auth';
const UserList = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const currentUser = firebase.auth().currentUser;
      const usersSnapshot = await firestore()
        .collection('user')
        .where('id', '!=', currentUser.uid)
        .get();

      const userList = usersSnapshot.docs.map(doc => doc.data());

      setUsers(userList);
    };

    fetchUsers();
  }, []);
  const renderItem = ({item}) => (
    // console.log(item, 'item>>>>'),
    <TouchableOpacity
      style={styles.userItem}
      onPress={() =>
        navigation.navigate('MessageScreen', {
          firstName: item.firstName,
          id: item.id,
          currentUser: firebase.auth().currentUser,
        })
      }>
      <Text style={styles.username}>
        <Image
          source={require('../assets/person.png')}
          style={{height: 30, width: 40}}
        />{' '}
        {``}
        {item.firstName}
        {` `}
        {item.lastName}
      </Text>
    </TouchableOpacity>
  );

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
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 18,
    height: 50,

    backgroundColor: '#ffff',
    borderRadius: 10,
  },
});

export default UserList;

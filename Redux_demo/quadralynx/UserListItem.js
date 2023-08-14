// UserListItem.js
import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const UserListItem = ({imageSource, userName, usernameDetelis}) => {
  return (
    <TouchableOpacity style={styles.userList}>
      <Image source={imageSource} style={styles.userImage} />
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={styles.userText}>{userName}</Text>
        <Text style={styles.usernameDetelis}>{usernameDetelis}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userList: {
    flex: 1,
    width: '100%',
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  userImage: {
    height:70,
    width: '35%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  userText: {marginHorizontal: 15, fontSize: 18, fontFamily: 'Anybody-Black'},
  usernameDetelis: {
    marginHorizontal: 15,
    fontSize: 14,
    fontFamily: 'Anybody-Black',
  },
});

export default UserListItem;

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const Message = props => {
  const [messages, setMessages] = useState([]);
  const {id} = props.route.params;
  const {firstName} = props.route.params;
  const {currentUser} = props.route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const chatid =
      id > currentUser.uid
        ? currentUser.uid + '-' + id
        : id + '-' + currentUser.uid;

    const messagesRef = database()
      .ref('chats')
      .child(chatid)
      .child('messages')
      .orderByChild('createdAt');

    const handleMessageSnapshot = snapshot => {
      const allMessages = [];
      snapshot.forEach(childSnapshot => {
        const message = childSnapshot.val();
        const createdAt = message.createdAt
          ? new Date(message.createdAt)
          : null;
        allMessages.push({
          ...message,
          createdAt: createdAt,
        });
      });
      setMessages(allMessages.reverse());
    };

    messagesRef.on('value', handleMessageSnapshot);

    return () => messagesRef.off('value', handleMessageSnapshot);
  }, []);

  const onSend = newMessages => {
    const chatid =
      id > currentUser.uid
        ? currentUser.uid + '-' + id
        : id + '-' + currentUser.uid;

    const newMessage = newMessages[0];
    const myMessage = {
      ...newMessage,
      sender: currentUser.uid,
      receiver: id,
      createdAt: new Date().getTime(),
    };

    setMessages(previousMessages => [myMessage, ...previousMessages]);

    database()
      .ref('chats')
      .child(chatid)
      .child('messages')
      .push({
        ...myMessage,
        createdAt: database.ServerValue.TIMESTAMP,
      });
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        const newMessage = {
          image: image.uri,
          createdAt: new Date().getTime(),
          user: {
            _id: currentUser.uid,
          },
        };
        onSend([newMessage]);
      }
    });
  };

  const openImageLibrary = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        const messages = {
          image: image.uri,
          createdAt: new Date().getTime(),
          user: {
            _id: currentUser.uid,
          },
        };
        onSend([messages]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/left.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {`  `}
          {firstName}
        </Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: currentUser.uid,
        }}
        renderSend={props => {
          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{margin: 10}} onPress={openImageLibrary}>
                <Image
                  source={require('../assets/gallery.png')}
                  style={{height: 25, width: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{margin: 10}} onPress={openCamera}>
                <Image
                  source={require('../assets/camera.png')}
                  style={{height: 25, width: 29}}
                />
              </TouchableOpacity>
              <Send {...props} />
            </View>
          );
        }}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#ffffff',
              },
            }}
          />
        )}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  header: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

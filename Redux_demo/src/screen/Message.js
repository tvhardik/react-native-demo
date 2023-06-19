import {View, Text} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  useEffect(() => {
    const livechat = firestore()
      .collection('Chats')
      .doc(route.params.id + route.params.data.email)
      .collection('messages')
      .orderBy('createdAt', 'desc');
    livechat.onSnapshot(querysnapshot => {
      const allmessage = querysnapshot.docs.map(item => {
        return {...item.data, createdAt: Date.parse(new Date())};
      });
      setMessages(allmessage);
    });
    return () => livechat();
  }, []);

  const onSend = useCallback((messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.email,
      createdAt: Date.params(msg.createdAt),
    };
    console.log(route, 'asfasfasdfsd>>>>');
    // console.log(id, 'id>>>>>');
    // console.log(route.params.id, 'route.params.id>>>>>');
    // console.log(params.data.email, 'params.data.email>>>>>>');
    setMessages(previousMessages =>
      // console.log(previousMessages, 'previousMessages>>>>>>'),

      GiftedChat.append(previousMessages, myMsg),
    );
    console.log(route, 'route>>>>>>>>>');
    firestore().collection('Chats').collection('messages').add(myMsg);
    // firestore()
    //   .collection('Chats')
    //   .doc('' + route.params.data?.email + route.params.id)
    //   .collection('messages')
    //   .add(myMsg);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
      />
    </View>
  );
};
export default Message;

import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = async messagesArray => {
    const msg = messagesArray[0];

    const myId = route.params?.data?.myId;
    const userId = route.params?.data?.userId;

    if (myId && userId) {
      const myMsg = {
        ...msg,
        senderId: myId,
        receiverId: userId,
      };

      try {
        await firestore()
          .collection('chat')
          .doc('1234')
          .collection('message')
          .add({...myMsg, createdAt: new Date()});

        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, myMsg),
        );
      } catch (error) {
        console.log('Firestore Error:', error);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: route.params?.data?.myId,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'black',
                },
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Message;

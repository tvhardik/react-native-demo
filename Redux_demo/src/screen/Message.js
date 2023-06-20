import {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const Message = props => {
  const [messages, setMessages] = useState([]);
  const {id} = props.route.params;
  const {firstName} = props.route.params;
  // console.log(id, 'username>>>>>>');
  console.log('props>>>>>>>', props.route.params);
  useEffect(() => {
    const messagesRef = firestore()
      .collection('chats')
      .doc('1234')
      .collection('messages')
      .orderBy('createdAt', 'desc');

    const unsubscribe = messagesRef.onSnapshot(snapshot => {
      const allMessages = snapshot.docs.map(doc => {
        const data = doc.data();
        const createdAt =
          data.createdAt && data.createdAt.toDate
            ? data.createdAt.toDate()
            : null;
        return {
          ...data,
          createdAt: createdAt,
        };
      });
      setMessages(allMessages);
    });

    return () => unsubscribe();

  }, []);

  const onSend = newMessages => {
    const newMessage = newMessages[0];
    const myMessage = {
      ...newMessage,
      sentBy: id,
      sendTo: 'qA07YM9CpNgdTkwjE5OZIW84oZE3',
      createdAt: new Date(),
    };

    setMessages(
      previousMessages => GiftedChat.append(previousMessages, myMessage),
      console.log(myMessage, 'myMessage>>>>>>'),
    );

    firestore()
      .collection('chats')
      .doc('1234')
      .collection('messages')
      .add({
        ...myMessage,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {' '}
          {firstName}
        </Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: id,
        }}
      />
    </View>
  );
};

export default Message;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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

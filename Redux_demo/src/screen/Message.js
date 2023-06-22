import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Message = props => {
  const [messages, setMessages] = useState([]);
  const {id} = props.route.params;
  const {firstName} = props.route.params;
  const {currentUser} = props.route.params;
  const navigation = useNavigation();
  // console.log(currentUser, 'currentUser>>>>>>');

  useEffect(() => {
    const chatid =
      id > currentUser.uid
        ? currentUser.uid + '-' + id
        : id + '-' + currentUser.uid;
    const messagesRef = firestore()
      .collection('chats')
      .doc(chatid)
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
    const chatid =
      id > currentUser.uid
        ? currentUser.uid + '-' + id
        : id + '-' + currentUser.uid;
    const newMessage = newMessages[0];
    const myMessage = {
      ...newMessage,
      sender: currentUser.uid,
      receiver: id,
      createdAt: new Date(),
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMessage),
    );

    firestore()
      .collection('chats')
      .doc(chatid)
      .collection('messages')
      .add({
        ...myMessage,
        createdAt: firestore.FieldValue.serverTimestamp(),
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
          {`   `}
          {firstName}
        </Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: currentUser.uid,
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

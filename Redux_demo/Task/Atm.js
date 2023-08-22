import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Atm = () => {
  const [withdrawAmount, setwithdrawAmount] = useState('');
  const [totelAmount, setTotalAmount] = useState(5500);
  const [withdrawalInfo, setWithdrawalInfo] = useState(null);
  const [avalibleNotes, setAvalibleNote] = useState({
    2000: 1, //2000
    500: 2, //1000
    200: 10, //2000
    100: 0, //0
  });
  const notes = [2000, 500, 200, 100];

  const handelWithdraw = () => {
    if (withdrawAmount <= 0) {
      alert('plz enter valid withdraw amount');
      return;
    }
    if (withdrawAmount % 100 !== 0) {
      alert('must be 100 multiplication');
      return;
    }
    if (withdrawAmount > totelAmount) {
      alert('Not avalible amount in ATM');
      return;
    }

    const notecount = {};

    let RemainingAmount = withdrawAmount;

    for (const note of notes) {
      const count = Math.min(
        Math.floor(RemainingAmount / note),
        avalibleNotes[note],
      );
      // if (count === 0 && RemainingAmount >= note) {
      //   alert(`Note of ${note} and is not available in ATM`);
      //   return;
      // }
      RemainingAmount -= count * note;
      notecount[note] = count;
    }

    const updateNotes = {...avalibleNotes};
    for (const note of notes) {
      updateNotes[note] -= notecount[note];
    }

    setTotalAmount(totelAmount - withdrawAmount);
    setAvalibleNote(notecount);
    setwithdrawAmount;

    setWithdrawalInfo({
      withdrawnAmount: withdrawAmount,
      remainingBalance: totelAmount - withdrawAmount,
      notesCount: notecount,
    });
    // console.log('updateNotes >>>>', updateNotes);
    // console.log('Withdrawn Amount >>>', withdrawAmount);
    // console.log('Remaining Balance >>>>', totelAmount - withdrawAmount);
    // console.log('Notes >>>>', notecount);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={{margin: 20, fontSize: 30}}>ATM Withdraw</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Withdraw amount"
        keyboardType="numeric"
        value={withdrawAmount}
        onChangeText={amout => setwithdrawAmount(amout)}
      />
      <TouchableOpacity style={styles.Button} onPress={handelWithdraw}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
      {withdrawalInfo && (
        <View style={styles.withdrawalInfoContainer}>
          <Text style={styles.withdrawalInfoText}>Withdrawal</Text>
          <Text style={styles.text}>
            Withdrawn Amount: {withdrawalInfo.withdrawnAmount}
          </Text>
          <Text style={styles.text}>
            Remaining Balance: {withdrawalInfo.remainingBalance}
          </Text>
          <Text style={styles.text}>Notes Count:</Text>
          {notes.map(note => (
            <Text style={styles.text} key={note}>
              {note}: {withdrawalInfo.notesCount[note]}
            </Text>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Atm;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    height: 50,
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  Button: {
    marginVertical: 25,
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Anybody-ExtraBold',
  },
  withdrawalInfoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  withdrawalInfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {fontSize: 20},
});

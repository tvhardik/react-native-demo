import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Atm = () => {
  const [withdrawAmount, setwithdrawAmount] = useState('');
  const [totelAmount, setTotalAmount] = useState(50000);
  const avalibleNotes = {
    2000: 1, //30000
    500: 20, //10000
    200: 30, //6000
    100: 40, //4000
  };
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
    if (RemainingAmount > 0) {
      alert('notes not avalible in ATM');
      return;
    }
    const notes = [2000, 500, 200, 100];
    const notecount = {};

    let RemainingAmount = withdrawAmount;
    // console.log('withdrawAmount', withdrawAmount);
    for (const note of notes) {
      // console.log(note)
      // console.log('RemainingAmount', RemainingAmount);
      
      const count = Math.min(
        Math.floor(RemainingAmount / note),
        avalibleNotes[note],
      );

      RemainingAmount -= count * note;

      notecount[note] = count;
      // console.log(count, 'count >>');
      // console.log(note, 'note >>');
    }
    // console.log('notecount >>', notecount);
    // console.log('RemainingAmount >> ', RemainingAmount);
    // console.log('avalibleNotes >>>', avalibleNotes);

    const updateNotes = {...avalibleNotes};
    for (const note of notes) {
      updateNotes[note] -= notecount[note];
    }

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
      <TouchableOpacity
        style={{
          marginVertical: 25,
          width: '100%',
          height: 50,
          backgroundColor: 'black',
          borderRadius: 10,
          justifyContent: 'center',
        }}
        onPress={handelWithdraw}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'Anybody-ExtraBold',
          }}>
          Withdraw
        </Text>
      </TouchableOpacity>
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
});

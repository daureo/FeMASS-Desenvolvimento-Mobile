import { StyleSheet, TextInput, View } from 'react-native';
import Title from './resources/components/Title';

import styles from './App.style.js';


export default function App() {

  function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const ddd = cleaned.substring(0, 2);
    const firstPart = cleaned.substring(2, 7);
    const secondPart = cleaned.substring(7, 11);
    const formattedPhoneNumber = `(${ddd})${firstPart}-${secondPart}`;
    return formattedPhoneNumber;
  }

  function onTextChange(text){
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <Title></Title>
      <TextInput
      onChange={onTextChange}>

      </TextInput>
    </View>
  );
}


import { StyleSheet, View } from 'react-native';
import Title from './resources/components/Title';
import Form from './resources/components/Form';
import styles from './App.style.js';


export default function App() {

  return (
    <View style={styles.container}>
      <Title></Title>
      <Form></Form>
    </View>
  );
}


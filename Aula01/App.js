import { StyleSheet, View } from 'react-native';
import Title from './resources/components/Title';
import Form from './resources/components/Form';


export default function App() {


  

  return (
    <View style={styles.container}>
     
      <Title></Title>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
)
import { StyleSheet, View } from 'react-native';
import AppForm from './src/AppForm';
import AppItem from './src/AppItem';
import AppList from './src/AppList';


export default function App() {

 
  return (
    <View style={styles.container}>
      <AppForm></AppForm>
      <AppList></AppList>
      <AppItem></AppItem>
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
});

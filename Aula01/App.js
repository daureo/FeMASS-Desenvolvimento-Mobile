import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cálculo de IMC</Text>

      <Text>Peso</Text>
      <TextInput 
      style={styles.caixaTexto}
      
      />
      <Text>Altura</Text>
      <TextInput 
      style={styles.caixaTexto}
      />
    <TextInput style={{height:40}}/>
      <Button title="Calcular" onPress={() => {
        CalcIMC()
      }} />
      
      <StatusBar style="auto" />
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
  caixaTexto: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },
 
});

const CalcIMC = (altura, peso) => {
  return altura/(peso*peso)
}
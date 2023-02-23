import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Title() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState('');

    const CalcIMC = () => {
        const resultado = Number(peso) / (Number(altura) * Number(altura));
        setIMC(resultado.toPrecision(4));
        
    }

    return (
        <View>
            <Text>Peso</Text>
            <TextInput
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                style={styles.caixaTexto}

            />
            <Text>Altura</Text>
            <TextInput
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                style={styles.caixaTexto}

            />
            <TextInput
                value={imc}
                style={{ height: 40 }}

            />

            <Button title="Calcular" onPress={() => { CalcIMC() }} />

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
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
    },
   
  });
  
  


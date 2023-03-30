import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import AppItem from '../AppItem';


export default function AppList() {

    const [lista, setLIsta] = useState('');
    
    
    async function lerLista(){
        const response =  await AsyncStorage.getItem('itens');
       
        response ? lista.push(JSON.parse(response)) : setLIsta('');


        console.log(listaLida);
    }

    useEffect(() => {
      lerLista();
    });
    
  return (
    <View style={styles.container}>
      <Text>Tela de Listagem</Text>
      <StatusBar styele="light"></StatusBar>
      <ScrollView>
        {lerLista.map(item => {
            return <AppItem key={item.id} id={item.id} item={item.quantidade + ' de ' + item.descricao}></AppItem>
        })}
      </ScrollView>
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

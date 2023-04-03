import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import ItemLista from './ItemLista';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RefreshControl } from 'react-native-gesture-handler';

export default function AppLista() {


  const [listaContatos, setListaContatos] = useState([]);
  const [refresh, setRefresh] = useState(false);


  async function carregarLista(){
    const response = await AsyncStorage.getItem('listaContatos');
 
    if (response) setListaContatos(JSON.parse(response));    

  }

  function onRefresh(){
    setRefresh(!refresh);
  }

  useEffect(() => {

 
     carregarLista();
    


  }, [onRefresh]);

  function chamarDetalhes(){
    Alert.alert('Abrindo outra tela');onRefresh();
  }

  //selecionar do banco de dados e buscar o item com o ID fornecido e entao passar o obj
  //usar essa id para passar a identificacao do contato para a tela de vizualizacao, que ira ler do banco somente aquele contato
  return (
    <View style={styles.container} key={refresh}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
        >
        {listaContatos.map(item => {
          return <TouchableOpacity
          onPress={()=> chamarDetalhes()}
          key={item.id} 
          >
            <ItemLista id={item.id} nome={item.nome} sobrenome={item.sobrenome} foto={item.foto} />
          </TouchableOpacity>
        })}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

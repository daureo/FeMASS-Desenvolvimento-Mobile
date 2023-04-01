import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import ItemLista from './ItemLista';

export default function AppLista() {


  const [items, setItems] = useState([]);


  useEffect(() => {
    setItems([
      { id: 1, nome: 'Danielle', sobrenome: 'Araujo', fotoURI: '' },
      { id: 2, nome: 'Daureo', sobrenome: 'Silva', fotoURI: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' }
    ]);
  }, []);

  //selecionar do banco de dados e buscar o item com o ID fornecido e entao passar o obj
  //usar essa id para passar a identificacao do contato para a tela de vizualizacao, que ira ler do banco somente aquele contato
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        {items.map(item => {
          return <TouchableOpacity
          onPress={()=> Alert.alert('Chama na catraca! ' + item.id)}
          >
            <ItemLista id={item.id} nome={item.nome} sobrenome={item.sobrenome} foto={item.fotoURI} />
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

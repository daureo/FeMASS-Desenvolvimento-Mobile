import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AppForm(){
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
  
    function atualizarDescricao(descricao){
      setDescricao(descricao);
    }
  
    function atualizarQuantidade(quantidade){
      setQuantidade(parseInt(quantidade));
    }
  
    async function salvar(){
  
      const item = {descricao, quantidade, id: new Date().getTime()};
      let itens = [];
  
      const response = await AsyncStorage.getItem('itens');
  
      if (response) itens = JSON.parse(response);
      
      itens.push(item);
  
      //console.log(itens);
  
      await AsyncStorage.setItem('itens', JSON.stringify(itens));
  
      
      
    }
  
    return(
<View style={styles.container}>
      <Text>Tela de Cadastro</Text>
      
      <TextInput
      placeholder="O que deseja comprar?"
      clearButtonMode="always"
      onChangeText={atualizarDescricao}
      
      />
        <TextInput
      placeholder="Quantos deseja comprar?"
      clearButtonMode="always"
      onChangeText={atualizarQuantidade}
      
      />
      <TouchableOpacity
      onPress={salvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
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
  
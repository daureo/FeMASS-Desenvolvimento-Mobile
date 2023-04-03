import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import CompTelefone from '../AppCadastro/CompTelefone';
import CompEmail from '../AppCadastro/CompEmail';


export default function AppDetalhes(props) {

  const [id, setID] = useState();
const [foto, setFoto] = useState();
const [nome, setNome] = useState();
const [sobrenome, setSobrenome] = useState();
const telefone = [];
const email = [];
const [endereco, setEndereco] = useState();
const [numero, setNumero] = useState();
const [bairro, setBairro] = useState();
const [cidade, setCidade] = useState();
const [refresh, setRefresh] = useState(false);

async function carregarContato(id) {
  
  
  const response = await AsyncStorage.getItem('listaContatos');

  if (response) {

    let lista = JSON.parse(response);
    
    let contato = lista.find(obj => obj.id === id);

    setID(id);
    setFoto(contato.foto);
    setNome(contato.nome);
    setSobrenome(contato.sobrenome);
    //Telefone
    //Email
    setEndereco(contato.endereco);
    setNumero(contato.numero);
    setBairro(contato.bairro);
    setCidade(contato.cidade);

  }

  

}

function onRefresh() {
  setRefresh(!refresh);
}

useEffect(() => {


  carregarContato(props.detalhesContato);



}, []);

  return (
    <View style={styles.container} key={refresh}>
      <StatusBar style="light" />

      <ScrollView>
        <View style={styles.cabecalho}>
          <TouchableOpacity
         // onPress={()=> manipularImagem()}
          >
            <Image
            style={styles.foto}
            source={ foto ?  {uri: foto} : require('../../assets/photoIcon.png') }
            
          /></TouchableOpacity>
          <View style={styles.nomeContainer}>

            <Text style={styles.campoNome}> 
            {nome}               
              </Text>

            <Text style={styles.campoSobrenome}>    
            {sobrenome}            
              </Text>
          </View>
        </View>
        <View style={styles.camposContato}>
          <CompTelefone />
          <CompEmail />
          <Text
           
            style={[styles.campoTelefone, styles.campo]}
          
          >

              {endereco}
          </Text>
          <View style={styles.nrBairro}>
            <Text
             
              style={[styles.campoNr]}
            
            >{numero}</Text>
            <Text
            
              style={[styles.campoBairro]}
            
            >{bairro}</Text>
          </View>
          <Text
         
            style={[styles.campoTelefone, styles.campo]}
           
          >{cidade}</Text>
        </View>
       <TouchableOpacity onPress={props.onClose}><Text>Fechar</Text></TouchableOpacity>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30
  },
  foto: {
    width: 100,
    height: 100,
    marginTop: 30,
    borderRadius: 50,
  },
  nomeContainer: {
    width: '60%',
    marginTop: 20,
    height: '70%',
    marginLeft: 20,

  },
  campoNome: {
    textAlign: 'center',
    width: '100%',
    height: '40%',
    fontSize: 15,
    fontWeight: 'bold',

    borderColor: '#fff',
    borderWidth: 1,
  },
  campoSobrenome: {
    textAlign: 'center',
    width: '100%',
    height: '40%',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
  camposContato: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
    height: '100%',


  },
  campoTelefone: {
    textAlign: 'center',

  },
  nrBairro: {
    flexDirection: 'row',
  },
  campoBairro: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    width: '57%',
    height: 40,
    backgroundColor: '#D9D9D9',
    textAlign: 'center'
  },
  campoNr: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    width: '20%',
    height: 40,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
    textAlign: 'center',
  },
  campo: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    width: '80%',
    height: 40,
    backgroundColor: '#D9D9D9'
  },
  campoDinamico: {
    flexDirection: 'row',
  },
  btnAdd: {
    width: '5%',
    borderColor: '#fff',
    borderWidth: 1,
    height: 40,
  },
  btnSalvarTxt: {
    color: '#fff'
  },
  btnSalvar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    width: '50%',
    height: 40,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#747373'
  },
});

import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CompTelefone from './CompTelefone';
import CompEmail from './CompEmail';
import { useState } from 'react';

export default function AppCadastro() {

  function manipularImagem(){
    Alert.alert(
      "Adicionar Foto",
      "Informe de onde você quer adicionar a foto",
      [
        {
          text: "Galeria",
          onPress: () => console.log("Pegando da Galeria"),
          style: 'default'
        },
        {
          text: "Câmera",
          onPress: () => console.log("Abrindo camera"),
          style: 'default'
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("Cancelado"),
      }
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView>
        <View style={styles.cabecalho}>
          <TouchableOpacity
          onPress={()=> manipularImagem()}
          >
            <Image
            style={styles.foto}
            source={require('../../assets/photoIcon.png')
            }
          /></TouchableOpacity>
          <View style={styles.nomeContainer}>
            <TextInput style={styles.campoNome}
              placeholder='Nome'></TextInput>
            <TextInput style={styles.campoSobrenome}
              placeholder='Sobrenome'></TextInput>
          </View>
        </View>
        <View style={styles.camposContato}>
          <CompTelefone></CompTelefone>
          <CompEmail></CompEmail>
          <TextInput
            placeholder='Endereço'
            style={[styles.campoTelefone, styles.campo]}
          ></TextInput>
          <View style={styles.nrBairro}>
            <TextInput
              placeholder='Nº'
              style={[styles.campoNr]}
            ></TextInput>
            <TextInput
              placeholder='Bairro'
              style={[styles.campoBairro]}
            ></TextInput>
          </View>
          <TextInput
            placeholder='Cidade'
            style={[styles.campoTelefone, styles.campo]}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.btnSalvar}>
          <Text style={styles.btnSalvarTxt}>Salvar</Text>
        </TouchableOpacity>
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

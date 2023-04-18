import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CompTelefone(props) {

  const [numCampos, setNumCampos] = useState(1);

  function onAddBtn(){
    setNumCampos(numCampos + 1);
  }

  return (
    <View style={styles.container}>
      {[...Array(numCampos)].map((_, index) => {
        return (
          <View style={styles.campoDinamico} key={index}>
            <TextInput
              placeholder='Telefone'
              style={[styles.campoTelefone, styles.campo]}
            />
          </View>
        );
      })}
      <TouchableOpacity style={styles.btnAdd} onPress={onAddBtn}>
        <Text style={styles.btnAddText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  campoTelefone: {
    textAlign: 'center',
    marginRight: 20,
    width: '89%',
    

  },
  campo: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    
    height: 40,
    backgroundColor: '#D9D9D9'
  },
  campoDinamico: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnAdd: {
    width: '10%',
    borderColor: '#fff',
    borderWidth: 1,
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddText: {
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    width: '10%',
  },

});


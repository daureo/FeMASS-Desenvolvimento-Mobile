import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CompTelefone(props) {

  const listaTelefones = [1, 2];

  return (
    <View style={styles.campoDinamico}>
      {
        listaTelefones.map(item => {
          return <TouchableOpacity
            
            key={item}
            style={styles.campoDinamico}
          ><TextInput
            placeholder={props.idContato}
            style={[styles.campoTelefone, styles.campo]}
          ></TextInput><Text style={styles.btnAddText}>+</Text>

          </TouchableOpacity>

        })}

    </View>);
}

const styles = StyleSheet.create({
  campoTelefone: {
    textAlign: 'center',
    marginRight: 20,

  },
  campo: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    
    height: 40,
    backgroundColor: '#D9D9D9'
  },
  campoDinamico: {
    
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
  },

});


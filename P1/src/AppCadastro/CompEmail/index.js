import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CompEmail() {
    return (
        <View style={styles.campoDinamico}>
            <TextInput
                placeholder='E-mail'
                style={[styles.campoTelefone, styles.campo]}
            ></TextInput>
            <TouchableOpacity
                style={styles.btnAdd}
            ><Text style={styles.btnAddText}>+</Text></TouchableOpacity>
        </View>
    );
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
    width: '80%',
    height: 40,
    backgroundColor: '#D9D9D9'
  },
  campoDinamico: {
    flexDirection: 'row',
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
    
  },

});


import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ItemLista from './ItemLista';

export default function AppLista() {


  const [items, setItems] = useState([]);


    useEffect(() => {
      setItems(['A','B', 2, 3, 4, 5, 6, 7]);
    },[]);
    

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView
        style={ styles.scrollContainer}
        contentContainerStyle={ styles.itemsContainer}>
          {items.map(item => {
            return <TouchableOpacity><ItemLista /></TouchableOpacity>
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

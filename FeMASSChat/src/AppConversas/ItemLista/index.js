
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ItemLista(props) {
     
    
    return (
        <View style={styles.container}>
            <Image 
                style={styles.foto}
                source={ props.avatar ?  {uri: `data:image/png;base64,${props.avatar}`} : require('../../../assets/photoIcon.png') }
            />
            <View style={styles.nomeContainer}>
                <Text style={styles.campoNome}>{props.nome}</Text>       
                {/* Talvez adicionar as primeiras linhas da ultima conversa */}         
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopColor: '#000',
        borderTopWidth: 2,
        marginBottom: 5
    },
    foto: {
        width: 60,
        height: 60,
        marginTop: 20,
        borderRadius: 50,
    },
    nomeContainer: {
        width: '78%',        
        height: '100%',        
        marginLeft: 20,        
        justifyContent: 'center',
        
    },
    campoNome: {
        width: '100%',
        height: '50%',
        fontSize: 25,
        fontWeight: 'bold',      
        marginTop: 5
    },
});

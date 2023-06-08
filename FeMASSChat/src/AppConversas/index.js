import { StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { RefreshControl } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import ItemLista from "./ItemLista";
import axios from 'axios';

const API_URL = 'http://192.168.0.10:8080';

export default function AppConversas({ navigation, userID }) {
    const [listaContato, setListaContato] = useState([]);

    async function carregarLista(userID) {
        const response = await axios.get(`${API_URL}/message/buscarUsuariosComConversa/${userID}`);
        if (response) {
            setListaContato(response.data);
        }
    }

    function chamarDetalhes(OtherID){
       
        navigation.navigate('Chat');
    }

    useEffect(() => {
        carregarLista(userID);
    }, [userID]);

    return (
        <View style={styles.container}>
            <StatusBar style="light-content" />

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}
            >
                {listaContato.map(item => {
                    if (item.id != userID)
                        return (
                            <TouchableOpacity
                                onPress={() => chamarDetalhes(item.id)}
                                key={item.id}
                            >
                                <ItemLista id={item.id} avatar={item.avatar} nome={item.nome}></ItemLista>
                            </TouchableOpacity>
                        );
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

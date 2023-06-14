import { StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { RefreshControl } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import ItemLista from "./ItemLista";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://192.168.0.10:8080';

export default function AppConversas({ navigation, userID }) {
    const [listaContato, setListaContato] = useState([]);

    async function carregarLista(userID) {

        const response = await axios.get(`${API_URL}/message/buscarUsuariosComConversa/${userID}`);
        if (response) {
            setListaContato(response.data);
            await AsyncStorage.setItem('horaAtualizacao', String(new Date()));

        }
    }

    function chamarDetalhes(otherID) {

        navigation.navigate('Chat', { otherUserID: otherID});
    }

    async function verificarMensagens() {


        let ultimaAtualizacao = await AsyncStorage.getItem('horaAtualizacao');



        carregarLista(userID);


    }

    useEffect(() => {
        carregarLista(userID);
        setInterval(verificarMensagens, 1000 * 60 * 1);
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Nova Conversa</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Adjust as needed
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 5,
    },
});

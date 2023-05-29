import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function AppLogin({ navigation }) {

    const [userID, setUserID] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [foto, setFoto] = useState();
    const [hash, setHash] = useState('');
    const API_URL = 'http://192.168.0.10:8080';

    function userIdMudou(id){
        setUserID(id);
    }
    function hashMudou(hash){
        setHash(hash);
    }

    function loginMudou(login){
        setLogin(login);
    }

    function senhaMudou(senha){
        setPassword(senha);
    }

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${API_URL}/user/${login}/${password}`);

            userIdMudou(String(response.data.id));

           let getHash = (await axios.get(`${API_URL}/user/${userID}`)).data;


            hashMudou(getHash);

            
            await criarLocalStorage();

            navigation.navigate('Main');


            Alert.alert('Sucesso', 'Usuario logado com sucesso!');
        } catch (error) {
            // Handle any errors
            console.error('Erro ao logar:', error);

            // Example: Show an error message
            Alert.alert('Erro', 'Falha ao entrar');
        }

    };

    async function criarLocalStorage() {
        await AsyncStorage.setItem('userHash', String(hash));
        await AsyncStorage.setItem('userID', String(userID));
        
        console.log(await AsyncStorage.getItem('userHash'));
        console.log(await AsyncStorage.getItem('userID'));
    }

    const novoUsuario = () => {
        navigation.navigate('Cadastro');
    };


    return (
        <View style={styles.container}>
            <Image
                style={styles.foto}
                source={foto ? { uri: foto } : require('../../assets/pigeon.png')}
            />
            <Text style={styles.title}>Chat</Text>
            <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={loginMudou}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={senhaMudou}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.novoLink}
                onPress={novoUsuario}>
                <Text style={styles.linkText}>Novo? Criar Usuario</Text>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
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
    foto: {
        width: 150,
        height: 100,
        marginTop: 30,

        backgroundColor: '#fff',
    },
    linkText: {
        color: '#008',
    },
    novoLink: {
        width: 300,
        height: 40,
        alignItems: 'center',
        color: '#fff',
        borderRadius: 5,
        marginTop: 10,
    }
});

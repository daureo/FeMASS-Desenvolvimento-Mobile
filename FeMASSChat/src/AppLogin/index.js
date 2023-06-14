import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


//const API_URL = 'http://192.168.0.10:8080';
const API_URL = 'http://192.168.70.61:8080';


export default function AppLogin({ navigation }) {

    const [userID, setUserID] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [foto, setFoto] = useState();
    const [hash, setHash] = useState();
    
   
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

   useEffect(() => {
    
  }, [hash]);
    
    const handleLogin = async () => {
     
        try {
            
            const response = await axios.get(`${API_URL}/user/${login}/${password}`);
            
            serverUSERID = response.data.id;

            temp = (await axios.get(`${API_URL}/user/${response.data.id}`));
            
            await criarLocalStorage(temp.data, serverUSERID);

            navigation.navigate('Conversas');


            Alert.alert('Sucesso', 'Usuário logado com sucesso!');
        } catch (error) {
            
            if (error.response && error.response.status === 500) {
                Alert.alert('Falha', 'Usuário não encontrado')
                console.error("Usuário não encontrado");
                navigation.navigate('Login');
              } else {
                console.error('Erro ao verificar local storage:', error);
              }
        }

    };
      

    async function criarLocalStorage(hash, id) {
        let localUserHash = String(hash);
        let localID = String(id);
        await AsyncStorage.setItem('userHash', localUserHash);
        await AsyncStorage.setItem('userID', localID);
       
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
                onPress={() => {handleLogin()}}
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

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AppCadastro from '../AppCadastro';




export default function AppLogin({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [foto, setFoto] = useState();

    const handleLogin = () => {

    };

    const novoUsuario = () => {
        navigation.navigate('Cadastro');
    };


    return (
        <View style={styles.container}>
            <Image
                style={styles.foto}
                source={foto ? { uri: foto } : require('../../assets/logo-faculdade-femass.png')}
            />
            <Text style={styles.title}>Chat</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setPassword}
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

import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function AppCadastro() {
    const [id, setId] = useState('');
    const [foto, setFoto] = useState();
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [hash, setHash] = useState('');

    function manipularImagem() {
        Alert.alert(
            "Adicionar Foto",
            "Informe de onde você quer adicionar a foto",
            [
                {
                    text: "Galeria",
                    onPress: () => { pickImage() },
                    style: 'default'
                },
                {
                    text: "Câmera",
                    onPress: () => { takeImage() },
                    style: 'default'
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log("Cancelado"),
            }
        );
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });



        if (!result.canceled) {
            fotoMudou(result.assets[0].uri);
        }
    };

    function fotoMudou(foto){
        setFoto(foto);
      }

    const handleRegister = () => {
        // TODO: Send the id, nome, apelido, avatar, senha, email, telefone, and hash to your backend server to register the user.
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <TouchableOpacity
                onPress={() => manipularImagem()}
            >
                <Image
                    style={styles.foto}
                    source={foto ? { uri: foto } : require('../../assets/photoIcon.png')}

                /></TouchableOpacity>



            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Apelido"
                onChangeText={setApelido}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                onChangeText={setTelefone}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
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
    foto: {
        width: 100,
        height: 100,
        marginTop: 30,
        borderRadius: 50,
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
});

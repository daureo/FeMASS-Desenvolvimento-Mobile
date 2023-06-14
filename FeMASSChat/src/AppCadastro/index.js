import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

//const API_URL = 'http://192.168.0.10:8080';
const API_URL = 'http://192.168.70.61:8080';


export default function AppCadastro({ navigation }) {
    const [id, setId] = useState('');
    const [foto, setFoto] = useState();
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [hash, setHash] = useState('');
    const [base64Image, setBase64Image] = useState('');
   

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
            const selectedAsset = result.assets[0];
            const base64Image = await convertImageToBase64(selectedAsset);
            const uri = selectedAsset.uri;
            fotoMudou(uri, base64Image);
        }
    };

    const convertImageToBase64 = async (asset) => {
        const base64Image = await FileSystem.readAsStringAsync(asset.uri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        return base64Image;
    }

    function novoID() {
        setId(new Date().getMilliseconds);
    }
    function fotoMudou(foto, base64Image) {
        setFoto(foto);
        setBase64Image(base64Image);

    }
    function nomeMudou(nome) {
        setNome(nome);
    }
    function apelidoMudou(apelido) {
        setApelido(apelido);
    }
    function senhaMudou(senha) {
        setSenha(senha);
    }
    function emailMudou(email) {
        setEmail(email);
    }
    function telefoneMudou(telefone) {
        //setTelefone(formatPhoneNumber(telefone));
        setTelefone(telefone);
    }

    function formatPhoneNumber(phoneNumber) {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const ddd = cleaned.substring(0, 2);
        const firstPart = cleaned.substring(2, 7);
        const secondPart = cleaned.substring(7, 11);
        const formattedPhoneNumber = `(${ddd})${firstPart}-${secondPart}`;

        return formattedPhoneNumber;
    }

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_URL}/user/`, {
                nome: nome,
                apelido: apelido,
                avatar: base64Image,
                senha: senha,
                email: email,
                telefone: telefone,

            });


            //console.log(response.config.data);

            navigation.navigate('Login')


            Alert.alert('Sucesso', 'Usuario cadastrado com sucesso!');
        } catch (error) {
            // Handle any errors
            console.error('Erro ao cadastrar:', error);

            // Example: Show an error message
            Alert.alert('Erro', 'Falha ao cadastrar');
        }
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
                onChangeText={nomeMudou}
            />
            <TextInput
                style={styles.input}
                placeholder="Apelido"
                onChangeText={apelidoMudou}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={senhaMudou}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={emailMudou}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                onChangeText={telefoneMudou}
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

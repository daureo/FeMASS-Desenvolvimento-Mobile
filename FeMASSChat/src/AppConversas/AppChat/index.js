import { useState, useEffect, useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

//const API_URL = 'http://192.168.0.10:8080';
const API_URL = 'http://192.168.70.61:8080';


export default function AppChat({ navigation, userID, otherUserID }) {

    const [newMessage, setNewMessage] = useState('');
    const scrollViewRef = useRef();
    const [conversas, setConversas] = useState([]);

    async function carregarMensagens(id, otherId) {

        const mensagens = (await axios.get(`${API_URL}/message/buscarMensagensComUmUsuario/${id}/${otherId}`)).data;

        setConversas(mensagens);

    };

    async function sendMessage() {
        
        const dados = {
            "id": parseInt(userID),
            "idOther": otherUserID,
            "texto": newMessage
        };
        console.log(dados);
        try {
             const response = await axios.post(`${API_URL}/message/enviarMensagem`, dados);
            
           
        }  catch(error){
            console.log(error);
        }finally {
           
            console.log(newMessage);
            carregarMensagens(userID, otherUserID);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // Rola para o fim das msgs
        scrollViewRef.current.scrollToEnd({ animated: true });
        carregarMensagens(userID, otherUserID);
    }, [conversas]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.messagesContainer}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {conversas.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.messageContainer,
                            message.from.id == userID ? styles.rightAlign : styles.leftAlign,
                        ]}
                    >
                        <Text style={styles.messageText}>{message.mensagem}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva a mensagem..."
                    value={newMessage}
                    onChangeText={text => setNewMessage(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingBottom: 10,
    },
    messagesContainer: {
        flexGrow: 1,
        padding: 10,
    },
    messageContainer: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    leftAlign: {
        alignSelf: 'flex-start',
        backgroundColor: '#F2F2F2',
    },
    rightAlign: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C0',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 20,
        marginRight: 10,
    },
    sendButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

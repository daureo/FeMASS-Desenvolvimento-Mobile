import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight +22 : 64;

export default function Header({nomeUsuario}){
    return(
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.usuario}>{nomeUsuario}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.botaoUsuario}>
                    <Feather name='user' color='#FFF' size={27} />
                </TouchableOpacity>
            </View>
        </View>
    );
} ;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBar,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        flexDirection: 'row'
    },
    conteudo: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    usuario: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    botaoUsuario: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2
    },

});
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import ResultadosIMC from './ResultadosIMC';
import styles from './Form.component.style';

export default function Form() {
//posso mover codigo 'puramanete' javascript para um arquivo .js e referenciar aqui?
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState('');
    const [msg, setMsg] = useState('');
    const [textoBotao, setTextoBotao] = useState("Calcular IMC");
    const [msgImc, setMsgImc] = useState('');

    function CalcIMC() {
//sera que enquanto a funcao nao terminar de executar o useState nao eh atualizado?
//isso pode explicar as primeiras versoes em que o imc nao pega o valor ateh que a funcao conclua e atualize o state
        const resultado = (Number(peso) / (Number(altura) * Number(altura))).toPrecision(4);
        if (resultado < 18.5) {
            setMsg("Seu IMC está classificado como: Magreza");
        } else if (resultado < 24.9) {
            setMsg("Seu IMC está classificado como: Normal");
        } else if (resultado < 29.9) {
            setMsg("Seu IMC está classificado como: Sobrepeso");
        } else if (resultado < 39.9) {
            setMsg("Seu IMC está classificado como: Obesidade");
        } else {
            setMsg("Seu IMC está classificado como: Obesidade Grave");
        }

        setIMC(resultado);
        setTextoBotao("Recalcular IMC");
        setMsgImc("Seu Índice de Massa Corporea: " + resultado);

    }

    function limpaTela() {
        setPeso('');
        setAltura('');
        setIMC('');

    }


    function ValidarCalculo() {

        CalcIMC();


    }

    return (
        <View style={styles.mainView}>
            <Text style={styles.tituloTexto}>Peso (em Kg)</Text>
            <TextInput
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                placeholder="Exemplo: 64.3"

                style={styles.caixaTexto}

            />
            <Text style={styles.tituloTexto}>Altura (em M)</Text>
            <TextInput
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                placeholder="Exemplo: 1.73"

                style={styles.caixaTexto}

            />
            

            <Button title={textoBotao} onPress={() => ValidarCalculo()} />

            <ResultadosIMC msgIMC={msgImc} mensagem={msg} />

            <StatusBar style="auto" />
        </View>
    );
}






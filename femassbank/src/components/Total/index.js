import { StyleSheet, Text, View } from "react-native";

export default function Total({ saldo, despesa }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.tituloItem}>Saldo</Text>
                <View style={styles.conteudo}>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.valor}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.tituloItem}>Gastos</Text>
                <View style={styles.conteudo}>
                    <Text style={styles.simboloMoeda}>R$</Text>
                    <Text style={styles.valor}>{despesa}</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    tituloItem: {
        fontSize: 20,
        color: '#DADAEE'
    },
    conteudo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    simboloMoeda: {
        color: '#DADAEE',
        marginRight: 6
    },
    valor: {
        fontSize: 22,
        color: '#2ECC71'
    },
    despesa: {
        fontSize: 22,
        color: '#E74C3C'
    }
});
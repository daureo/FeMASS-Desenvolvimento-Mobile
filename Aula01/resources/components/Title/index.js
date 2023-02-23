import { StyleSheet, View, Text } from "react-native";

export default function Title() {

    return (
        <View>
            <Text>Cálculo de IMC</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});


import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppItem(props){
    console.log(props[1]);
    return(
        
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>E</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#CCC',
        alignItems: 'center'

    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#CCC',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    textItem: {
        fontSize: 20
    }
});
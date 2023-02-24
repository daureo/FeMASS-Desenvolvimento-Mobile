import {View, Text} from "react-native";
import styles from "../Form.component.style.js"
export default function ResultadosIMC(props) {
    return (
        <View
            style={styles.msgBox} >
            <Text

            > {props.msgIMC}
            </Text>
            <Text

            >{props.mensagem}
            </Text>
        </View>
    );
}
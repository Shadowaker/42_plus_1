import { Text } from "react-native-elements";
import { View } from "react-native-web";
import { StyleSheet } from "react-native";

export default function ProfileButton({ navigation }) {
return (
    <View style={styles.buttonContainer}>
        <Text style={styles.button}>
            User Settings
        </Text>
        <Text style={styles.button}>
            History
        </Text>
        <Text style={styles.button}>
            Privacy and security
        </Text>
    </View>);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'rgba(0,0,0,0.2)',
		borderColor: 'white',
		margin: 10,
		borderRadius: 999,
		minHeight: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 800,
        borderWidth: 2,
		borderColor: "white",
		backgroundColor: "white",
		borderRadius: 999,
		padding: 2,
		elevation: 4, // Aggiunge l'ombra solo per Android (Richiede l'API 21+)
		shadowColor: "rgba(0, 0, 0, 0.3)", // Aggiunge l'ombra solo per iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 4,

	},
    buttonContainer: {
		position: 'absolute',
		top: '50%',
		width: '100vw'
	}
});
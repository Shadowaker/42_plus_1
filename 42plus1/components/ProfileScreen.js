import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import {App} from "../App"
import AvatarComponent from "../section/AvatarComponent";
export default function ProfileScreen({ navigation }) {
    
    const handlePress = () => {
        navigation.navigate("Map");
    };

	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<Icon
					name="rotate-left"
					type="font-awesome"
					size={30}
					color="red"
					style={styles.avatarContainer}
				/>
			</TouchableOpacity>
			<AvatarComponent
				avatarAction={() => this.add("dssda")}
				customStyle={styles.customStyle}
				size={"xlarge"}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	avatarContainer: {
		position: "relative",
		zIndex: 1,
		margin: 10,
		// borderWidth: 2,
		// borderColor: "white",
		// backgroundColor: "red",
		// borderRadius: 999,
		padding: 2,
		// elevation: 4, // Aggiunge l'ombra solo per Android (Richiede l'API 21+)
		// shadowColor: "rgba(0, 0, 0, 0.3)", // Aggiunge l'ombra solo per iOS
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 1,
		// shadowRadius: 4,
	},
	button: {
		margin: 10,
		padding: 10,
		borderRadius: 999,
		backgroundColor: "blue",
		position: "absolute",
		zIndex: 1,
		top: 0,
	},
	customStyle: {
		position:"absolute",
		left:"calc(50% - 70px)",
		top:"15%",
	},
});
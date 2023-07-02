import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import AvatarComponent from "../section/AvatarComponent";
import ProfileButton from "../section/ProfileButton";
import { ImageBackground, View } from "react-native-web";
export default function ProfileScreen({ navigation }) {
    
    const handlePress = () => {
        navigation.navigate("Map");
    };


	return (
		<View style={styles.view}>
			<ImageBackground 
				source={require('../assets/Untitled.png')}
				style={{width: '100%', height: '100%'}}
			>
			<Icon
				name="rotate-left"
				type="font-awesome"
				size={30}
				color="red"
				onPress={handlePress}
				style={styles.avatarContainer}
			/>
			<AvatarComponent
				avatarAction={() => this.add("dssda")}
				customStyle={styles.customStyle}
				size={"xlarge"}
			/>
			<ProfileButton />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	avatarContainer: {
		position: "relative",
		zIndex: 1,
		margin: 10,
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
	customStyle: {
		position:"absolute",
		left:"calc(50% - 70px)",
		top:"15%",
		padding: 2,
		elevation: 4, // Aggiunge l'ombra solo per Android (Richiede l'API 21+)
		shadowColor: "rgba(0, 0, 0, 0.3)", // Aggiunge l'ombra solo per iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 4,
	},
	view: {
		height: '100vh',

	}
});
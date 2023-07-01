import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

export default function AvatarComponent () {
    
    const navigation = useNavigation();
    
    const handleAvatarPress = () => {
        navigation.navigate('Profile');
    };
    
    return (
            <Avatar
                onPress={handleAvatarPress}
                containerStyle={styles.avatarContainer}
                avatarStyle={styles.avatar} 
                rounded source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJczMizIBPUV0S8Z5iDmdia9BRfhTSsmpa6Aaiq0d6XQ&s' }} 
                size="large" 
            />
    )
}

const styles = StyleSheet.create({
      avatarContainer: {
        margin: 10,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 999,
        padding: 2,
        elevation: 4, // Aggiunge l'ombra solo per Android (Richiede l'API 21+)
        shadowColor: 'rgba(0, 0, 0, 0.3)', // Aggiunge l'ombra solo per iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
  });
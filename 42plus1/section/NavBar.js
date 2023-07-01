import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function AvatarComponent () {
    
    const navigation = useNavigation();
    
    const handlePress = (path) => {
        navigation.navigate(path);
    };
    
    return (
        <>
        </>
        )
}

const styles = StyleSheet.create({
  });
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function NavBar () {
    
    const navigation = useNavigation();
    
    const handlePress = (path) => {
        navigation.navigate(path);
    };

    const showBar = () => {
        const newRotation = (rotation + 180) % 360;
        setRotation(newRotation);
    }
    
    const [rotation, setRotation] = useState(0);

    const styles = StyleSheet.create({
        button: {
          margin: 10,
          padding: 10,
          borderRadius: 999,
          backgroundColor: 'blue',
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
        },
        up: {
            transform: [{rotateZ: `${rotation}deg`}],
            perspective: 1000,
            transition: 0.5
        }
      });
    return (
        
    <TouchableOpacity style={styles.button} onPress={showBar}>
        <Icon 
            name="angle-up"   
            type='font-awesome'
            size={30}
            color="red"
            style={styles.up}
        />
    </TouchableOpacity>
    )
}

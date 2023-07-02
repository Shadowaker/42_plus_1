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
        up: {
            transform: [{rotateZ: `${rotation}deg`}],
        },
        icon: {
            perspective: 1000,
            minWidth: 50,
            minHeight: 50,

        },
        container: {
            width: '90vw',
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
            margin: '5vw',
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,0.8)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 999,
            padding: 2,
            elevation: 4,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 4,
            display:'flex'
        },
        button: {
            width: '25%'
        },
        buttons: {
            width: '75%',
            display: 'flex',
            justifyContent: "space-evenly",
            position: 'absolute',
            top: '20%',
            left: '25%'
        }
      });
    return (
        <div style={styles.container}>
            <div style={styles.button}>
            <Icon 
                name="angle-up"   
                type='font-awesome'
                size={30}
                color="black"
                style={[styles.up, styles.icon]}
                onPress={showBar}
            />
            </div>
            <div style={styles.buttons}>
                <Icon 
                name="users"   
                type='font-awesome'
                color="green"
                size={30}
                style={styles.icon}
                />
                <Icon 
                name="bookmark"   
                type='font-awesome'
                size={30}
                color="blue"
                style={styles.icon}
                onPress={() => {
                    navigation.navigate("Bookmark")
                }}
                />
                <Icon 
                name="trophy"   
                type='font-awesome'
                size={30}
                color="gold"
                style={styles.icon}
                />
            </div>
        </div>
    )
}

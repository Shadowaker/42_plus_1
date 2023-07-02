import {ScrollView} from "react-native";
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import { BackgroundImage } from "react-native-elements/dist/config";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native-web";

    
const handlePress = () => {
    navigation.navigate("Map");
};

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
});

export default function BookmarkScreen() {
    return <>
        <BackgroundImage 				
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
        <ScrollView>
            
            <Card sx={{ display: 'flex' , margin: "5px"}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/P.Plebiscito_Napoli.jpg/1920px-P.Plebiscito_Napoli.jpg"
                    />
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',                    }}>
                    <CardContent sx={{ display: 'flex', textAlign: 'center',  }}>
                        <Typography component="div" variant="h5" sx={{display:"flex", alignItems:"center"}} >
                            Piazza del Plebiscito
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{ display: 'flex' , margin: "5px"}}>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',                    }}>
                    <CardContent sx={{ display: 'flex', textAlign: 'center',  }}>
                        <Typography component="div" variant="h5" sx={{display:"flex", alignItems:"center"}} >
                            Duomo di Milano
                        </Typography>
                    </CardContent>
                </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/260px-Milan_Cathedral_from_Piazza_del_Duomo.jpg"
                            />
            </Card>
        </ScrollView>
        </BackgroundImage>
    </>
}
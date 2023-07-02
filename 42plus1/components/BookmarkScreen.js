import {ScrollView} from "react-native";
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";

export default function BookmarkScreen() {
    return <>
        <ScrollView>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/P.Plebiscito_Napoli.jpg/1920px-P.Plebiscito_Napoli.jpg"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Piazza del Plebiscito
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </ScrollView>
    </>
}
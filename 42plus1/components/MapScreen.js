import { Button, Text, View } from "react-native";
import AvatarComponent from "../section/AvatarComponent";

export default function MapScreen ({ navigation }) {
    return (
        <>
        <AvatarComponent />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MapScreen</Text>
        </View>
  </>
    )
}
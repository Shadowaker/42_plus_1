import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import MapScreen from './components/MapScreen';
import ProfileScreen from './components/ProfileScreen';
import DetailScreen from './components/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Map' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            { /* Raiz de la app: las pestañas de navegacion */}
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}
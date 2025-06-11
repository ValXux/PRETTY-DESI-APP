import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from '../screens/Home/HomeScreen';
import MusicScreen from '../screens/Music/MusicScreen';
import BoardScreen from '../screens/Board/BoardScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({focused, size }) => {
                    const iconMap = {
                        Home: "home",
                        Music: "musical-notes",
                        Board: "brush",
                    };
                    return <Ionicons
                        name= {iconMap[route.name]}
                        size={size}
                        color={focused ? "#F48FB1" : "#222"}
                    />
                },
                tabBarActiveTintColor: "#F48FB1",
                tabBarInactiveTintColor: "#222",
            })}
        >
            <Tab.Screen name="Music" component={MusicScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Board" component={BoardScreen} />
        </Tab.Navigator>
    )
}
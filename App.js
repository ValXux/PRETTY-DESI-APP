import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

// import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    //<View style={styles.container}>
    //  <Text>Open up App.js to start working on your app!</Text>
    //  <StatusBar style="auto" />
    //</View>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

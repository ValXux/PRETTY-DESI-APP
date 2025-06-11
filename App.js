import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

// import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
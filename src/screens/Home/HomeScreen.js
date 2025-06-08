import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

export default function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
            <LottieView
                source={require('../../../assets/animations/frog_animation.json')}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
}
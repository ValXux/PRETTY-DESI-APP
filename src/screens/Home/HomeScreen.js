import React, { useState, useCallback } from "react";
import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';
import { 
    mensajesNormales,
    obtenerMensajeSecreto,
} from './mensajes';

export default function HomeScreen() {

    /* Estado para el modal y el texto mostrado */
    const [modalVisible, setModalVisible] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [clicks, setClicks] = useState(0);      // contador infinito

    /* Long-press sobre la ranita  (≥600 ms) */
    const handleLongPressRana = useCallback(() => {
        setMensaje(obtenerMensajeSecreto('lottie'));
        setModalVisible(true);
    }, []);

    /* Presionar a la ranita */
    const handlePressRana = useCallback(() => {
        setMensaje(obtenerMensajeSecreto('presionaRanita'));
        setModalVisible(true);
    }, []);

    /* Botón “Presioname” */
    const handleBotonPress = useCallback(() => {
        setClicks(prev => {
            const nuevo = prev + 1;

            // ¿Es múltiplo de 10?
            if (nuevo % 5 === 0) {
                // Mensaje dinámico con el total de clics
                setMensaje(
                    obtenerMensajeSecreto('clics').replace('{n}', nuevo)
                );
            } else {
                // Mensaje normal al azar
                const idx = Math.floor(Math.random() * mensajesNormales.length);
                setMensaje(mensajesNormales[idx]);
            }

            setModalVisible(true);
        return nuevo;           // <<— NO se reinicia
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>🌸 Te amo mi vida 🌸</Text>

            {/* Ranita con long-press */}
            <Pressable onLongPress={handleLongPressRana} delayLongPress={600} onPress={handlePressRana}>
                <LottieView
                    source={require('../../../assets/animations/frog_animation.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </Pressable>

            {/* Botón que cuenta los clics */}
            <TouchableOpacity style={styles.boton} onPress={handleBotonPress}>
                <Text style={styles.textoBoton}>✨ Presioname ✨</Text>
            </TouchableOpacity>

            {/* MODAL */}
            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
            <View style={styles.modalContainer}>
                <View style={styles.modalContenido}>
                    <Text style={styles.mensaje}>{mensaje}</Text>

                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.cerrar}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </View>
    );
}
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
    },
    animation: {
        width: 300,
        height: 300,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boton: {
        backgroundColor: "#F48FB1",
        padding: 15,
        borderRadius: 15,
        marginTop: 30,
    },
    textoBoton: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContenido: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 20,
        alignItems: "center",
        margin: 20,
    },
    mensaje: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    cerrar: {
        color: "#F48FB1",
        fontSize: 16,
        fontWeight: "bold",
    },
});
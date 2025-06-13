import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
        color: '#ff5e78',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fef1f4',
        marginBottom: 15,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#ccc',
    },
    image: {
        width: 80,
        height: 80,
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    controls: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 5,
    },
});
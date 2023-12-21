import { StyleSheet } from 'react-native';

export const chatBoardStyles = StyleSheet.create({
    chatBoardContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userMessage: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        maxWidth: '70%',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#c1e1c1',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        maxWidth: '70%',
    },
    inputContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 10,
    },
});


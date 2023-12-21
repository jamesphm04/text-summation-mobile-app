// ChatBoard.js

import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TextInputBar from '../../molecules/TextInputBar/TextInputBar';

const Template = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        const newMessage = { text: message, fromUser: true };
        setMessages((prev) => [...prev, newMessage]);

        // Simulate a bot response
        const botResponse = { text: 'Hi, I am a Robin!', fromUser: false };
        setTimeout(() => {
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <View style={styles.chatBoardContainer}>
            <FlatList
                style={{ margin: 10 }}
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={item.fromUser ? styles.userMessage : styles.botMessage} id={index}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInputBar onSendMessage={handleSendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Template;

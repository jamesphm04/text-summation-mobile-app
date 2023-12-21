// ChatBoard.js

import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { chatBoardStyles } from './ChatBoard.styles';

const ChatBoard = ({ messages }) => {
    return (
        <View style={chatBoardStyles.chatBoardContainer}>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={item.fromUser ? styles.userMessage : styles.botMessage}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
};



export default ChatBoard;

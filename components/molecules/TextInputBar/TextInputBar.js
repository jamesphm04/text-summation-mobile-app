// ChatInputBar.js

import React, { useState } from 'react';
import { View } from 'react-native';
import { textInputBarStyles } from './TextInputBar.styles'

import TextInput from '../../atoms/TextInput/TextInput';
import Button from '../../atoms/Button/Button';
import { AntDesign } from '@expo/vector-icons';

export const TextInputBar = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleSendPress = () => {
        if (inputValue.trim() !== '') {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <View style={textInputBarStyles.inputBarContainer}>
            <TextInput
                placeholder="Type a paragraph and I will summarize it for you"
                value={inputValue}
                onChangeText={handleInputChange}
            />
            <Button onPress={handleSendPress}><AntDesign name="caretup" size={12} color="white" /></Button>
        </View>
    );
};




export default TextInputBar;

import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { textInputStyles } from './TextInput.styles';

const TextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <RNTextInput
            style={textInputStyles.input}
            placeholder={placeholder}
            placeholderTextColor="gray"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default TextInput;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './Button.styles';

const Button = ({ onPress, title, children }) => {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default Button;

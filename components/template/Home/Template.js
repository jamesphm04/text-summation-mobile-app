// HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { templateStyles } from './Template.styles';

const Template = ({ navigation }) => {
    const handleButtonPress = () => {
        navigation.navigate('ProjectT');
    };

    return (
        <View style={templateStyles.lcontainer}>
            <Text style={templateStyles.text}>Welcome to HyperAI!</Text>
            <Button title="Go to ProjectT" onPress={handleButtonPress} />
        </View>
    );
};



export default Template;

import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e90ff',
        width: '95%',
        marginLeft: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    container_PRIMARY: {
        backgroundColor: '#1e90ff',
    },
    container_TERTIARY: {
        backgroundColor: '#fff',
        marginTop: -5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;
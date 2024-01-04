/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>FancyCard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    headingtext: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        marginTop: 30,
        marginBottom: 30,
    },
});

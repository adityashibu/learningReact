/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking, Image } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Blog Card</Text>
            <View style={[styles.card, styles.elevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingtext}>
                        What's new in JavaScript 12 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=x_0,y_0,h_720,w_1280,c_fill/w_800',
                    }}
                    style={styles.cardImage}
                />
            </View>
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

    card: {},

    elevated: {},

    headingContainer: {},

    cardImage: {
        height: 100,
    },
});

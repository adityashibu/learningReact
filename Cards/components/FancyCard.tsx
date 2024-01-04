/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: 'https://www.cntower.ca/sites/default/files/images/tickets_0.jpg'
                        }}
                    />
                </View>
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

    card: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        height: 100,
        width: 300,
    },

    cardElevated: {
        elevation: 5,
    },

    cardImage: {
        height: 100,
        width: 300,
        borderRadius: 4,
    },
});

/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
    return (
        <View>
            <View>
                <View style={styles.container}>
                    <Text style={styles.headingtext}>Scroll Cards</Text>
                </View>
                <ScrollView horizontal={true} style={styles.ScrollCard} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>Me</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>To</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>Scroll</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>And</Text>
                    </View>
                    <View style={[styles.card, styles.elevated]}>
                        <Text style={styles.cardText}>View</Text>
                    </View>
                </ScrollView>
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

    ScrollCard: {
        flexDirection: 'row',
    },

    card: {
        flex: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        height: 100,
        width: 100,
    },

    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: 'black',
    },

    elevated: {
        backgroundColor: 'white',
        shadowColor: 'red',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
});

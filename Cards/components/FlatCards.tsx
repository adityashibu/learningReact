/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards(): JSX.Element {
    return (
        <View>
            <View>
                <View style={styles.container}>
                    <Text style={styles.headingtext}>FlatCards</Text>
                </View>
                <View style={styles.flatCardView}>
                    <View style={[styles.flatCard, styles.flatCardRed]}>
                        <Text style={styles.flatCardText}>Red</Text>
                    </View>
                    <View style={[styles.flatCard, styles.flatCardBlue]}>
                        <Text style={styles.flatCardText}>Blue</Text>
                    </View>
                    <View style={[styles.flatCard, styles.flatCardGreen]}>
                        <Text style={styles.flatCardText}>Green</Text>
                    </View>
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

    flatCardText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },

    flatCard: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        height: 100,
    },

    flatCardRed: {
        backgroundColor: 'red',
    },

    flatCardBlue: {
        backgroundColor: 'blue',
    },

    flatCardGreen: {
        backgroundColor: 'green',
    },

    flatCardView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
});

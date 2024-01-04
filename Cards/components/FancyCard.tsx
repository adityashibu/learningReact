/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://www.cntower.ca/sites/default/files/images/tickets_0.jpg'
                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>CN Tower</Text>
                    <Text style={styles.cardLabel}>
                        Located in Toronto, Canada
                    </Text>
                    <Text style={styles.cardDescription}>
                        The CN Tower is a 553.3 m-high concrete communications and observation tower in Toronto, Ontario, Canada. Completed in 1976, it is located in downtown Toronto, built on the former Railway Lands.
                    </Text>
                    <Text style={styles.cardFooter}>
                        20 mins away
                    </Text>
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
        height: 400,
        width: 300,
        marginHorizontal: 16,
        marginBottom: 20,
        backgroundColor: 'lightgray',
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 10,
    },

    cardElevated: {
        elevation: 5,
        shadowColor: 'black',
    },

    cardImage: {
        height: 180,
        width: 260,
        borderRadius: 4,
    },

    cardTitle: {
        fontFamily: 'monospace',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        color: 'black',
    },

    cardLabel: {
        marginRight: 10,
        fontWeight: 'bold',
        color: 'black',
    },

    cardDescription: {
        paddingTop: 10,
        color: 'black',
    },

    cardFooter: {
        paddingTop: 10,
        fontWeight: 'bold',
    },
});

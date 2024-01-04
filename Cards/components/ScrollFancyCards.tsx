/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function ScrollFancyCards() {
    return (
        <View>
            <View>
                <View style={styles.container}>
                    <Text style={styles.headingtext}>Scroll Cards</Text>
                </View>
                <ScrollView horizontal={true} style={styles.ScrollCard} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: 'https://www.cntower.ca/sites/default/files/images/tickets_0.jpg',
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

                    <View style={[styles.card, styles.cardElevated]}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: 'https://www.cntower.ca/sites/default/files/images/tickets_0.jpg',
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

                    <View style={[styles.card, styles.cardElevated]}>
                        <Image
                            style={styles.cardImage}
                            source={{
                                uri: 'https://www.cntower.ca/sites/default/files/images/tickets_0.jpg',
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

    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: 'black',
    },

    elevated: {
        backgroundColor: 'lightgray',
        shadowColor: 'red',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
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
        paddingHorizontal: 15,
    },

    cardElevated: {
        elevation: 5,
        shadowColor: 'black',
    },

    cardImage: {
        height: 180,
        width: 260,
        borderRadius: 4,
        marginTop: 15,
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

/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
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
                        Explore whats new in the world of food
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=x_0,y_0,h_720,w_1280,c_fill/w_800',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>
                        The best food blogs and social media influencers from the award-winning publisher of Saveur Magazine. Get the latest food news, recipes, and trends, and join us in celebrating the chefs and other artisans who make the good stuff.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.saveur.com/')}
                    >
                        <Text style={styles.link}>Read More</Text>
                    </TouchableOpacity>
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
        width: 350,
        height: 585,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        marginBottom: 15,
    },

    elevated: {
        elevation: 5,
        shadowColor: 'black',
    },

    headingContainer: {
        marginHorizontal: 15,
        color: 'black',
    },

    cardImage: {
        height: 300,
        borderRadius: 10,
        marginHorizontal: 15,
    },

    bodyContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    body: {
        fontSize: 13,
        fontFamily: 'monospace',
        color: 'black',
    },

    footerContainer: {
        marginHorizontal: 20,
    },

    link: {
        marginTop: 10,
        color: 'blue',
    },
});

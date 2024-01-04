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
                    <Text>
                        The best food blogs and social media influencers from the award-winning publisher of Saveur Magazine. Get the latest food news, recipes, and trends, and join us in celebrating the chefs and other artisans who make the good stuff.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.saveur.com/')}
                    >
                        <Text>Read More</Text>
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
        marginHorizontal: 20,
    },

    card: {},

    elevated: {},

    headingContainer: {},

    cardImage: {
        height: 300,
    },

    bodyContainer: {},

    footerContainer: {},
});

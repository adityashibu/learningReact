/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function WhatsappStyleCards() {
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            status: 'Hey there! I am using WhatsApp.',
            imageUrl: 'https://cdn1.iconfinder.com/data/icons/ui-line-basic-0-3-1/32/UI_Website_Interface_User_Profile-512.png',
        },
        {
            uid: 2,
            name: 'Jane Doe',
            status: 'Hey there! I am not using WhatsApp.',
            imageUrl: 'https://cdn1.iconfinder.com/data/icons/ui-line-basic-0-3-1/32/UI_Website_Interface_User_Profile-512.png',
        },
        {
            uid: 3,
            name: 'John Smith',
            status: 'Hey there! I am definitely using WhatsApp.',
            imageUrl: 'https://cdn1.iconfinder.com/data/icons/ui-line-basic-0-3-1/32/UI_Website_Interface_User_Profile-512.png',
        },
        {
            uid: 4,
            name: 'Jane Smith',
            status: 'Hey there! I am using WhatsApp from today.',
            imageUrl: 'https://cdn1.iconfinder.com/data/icons/ui-line-basic-0-3-1/32/UI_Website_Interface_User_Profile-512.png',
        },
    ];

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headingtext}>Contact List - Vertical Scroll</Text>
            </View>

            <ScrollView>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={[styles.userCard, styles.elevated]}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.userImage}
                        />
                        <View style={styles.userContent}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
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

    userCard: {
        marginHorizontal: 15,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#284387',
        padding: 10,
        borderRadius: 10,
    },

    elevated: {
        elevation: 5,
        shadowColor: '#000',
    },

    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'white',
    },

    userContent: {
        marginLeft: 15,
        marginTop: 7,
    },

    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    userStatus: {
        fontSize: 13,
        color: 'white',
    },
});

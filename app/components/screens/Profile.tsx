import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from '../../navigations/Navbar';

export default function Profile({ navigation }:any) {

    return (
        <>
            <View style={styles.profile}>
                <Text>Профиль</Text>
            </View>
            <Navbar navigation={navigation}/>
        </>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
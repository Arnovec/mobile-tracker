import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import Navbar from '../../../navigations/Navbar';
import Posts from '../../blocks/Posts';
import Header from './Header';



export default function Profile({ navigation }: any) {
    const scrollOffsetY = useRef<Animated.Value>(new Animated.Value(0)).current;

    return (
        <>
            <View style={styles.profile}>
                <Header navigation={navigation}/>
                <Posts />
            </View>
            <Navbar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingTop: 10
    },
    headerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
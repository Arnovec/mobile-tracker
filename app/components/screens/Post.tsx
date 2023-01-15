import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from '../../navigations/Navbar';

export default function Post({route, navigation }:any) {
    const { id, user_login } = route.params;


    return (
        <>
            <View style={styles.home}>
                <Text>Пост №{id} от {user_login}</Text>
            </View>
            <Navbar navigation={navigation}/>
        </>

    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

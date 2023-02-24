import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import MyInput from '../../ui/MyInput';

export default function Login() {

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Вход</Text>
            <MyInput
                placeholder="Логин"
            />
            <MyInput
                placeholder='Пароль'
                secureTextEntry
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        height: "100%",
    },
    title:{
        fontSize: 48,
        fontWeight: 'bold'
    }
});
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import defailtStyles from '../styles/defailtStyles';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Navbar({ navigation }:any) {

    return (
        <View style={styles.navbar}>
            <Button
                title="Home"
                color={defailtStyles.colors.praimaryColor}
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Train"
                color={defailtStyles.colors.praimaryColor}
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Button
                title="Temp"//Profile
                color={defailtStyles.colors.praimaryColor}
                onPress={() => navigation.navigate('Temp')}//Profile
            />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: "space-around",
    },
});

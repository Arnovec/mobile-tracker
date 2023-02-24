import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import defailtStyles from '../styles/defailtStyles';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Navbar({ navigation }: any) {

    return (
        <View style={styles.navbar}>
            <View
                style={styles.elem}
            >
                <Button
                    title="Home"
                    color={defailtStyles.colors.praimaryColor}
                    onPress={() => navigation.navigate('Home')}

                />
            </View>
            <View
                style={styles.elem}
            >
                <Button
                    title="Train"
                    color={defailtStyles.colors.praimaryColor}
                    onPress={() => navigation.navigate('CreatePost')}
                />
            </View>
            <View
                style={styles.elem}
            >
                <Button
                    title="Temp"//Profile  Temp
                    color={defailtStyles.colors.praimaryColor}
                    onPress={() => navigation.navigate('Temp')}//Profile   Temp
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: "space-around",
    },
    elem: {
        flex: 1
    }
});

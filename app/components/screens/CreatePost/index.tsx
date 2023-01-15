import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import Navbar from '../../../navigations/Navbar';
import MapView, { LatLng, Region, UrlTile, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import Statistic from './Statistic';

export default function CreatePost({ navigation }: any) {
    const [region, setRegion] = useState<Region>({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("Локация", location);
        })();
    }, []);


    return (
        <>
            <View style={styles.createPost}>
                <Statistic navigation={navigation}/>
            </View>
            <Navbar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    createPost: {
        flex: 1,
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
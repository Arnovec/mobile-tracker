import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';

import { getDistanceFromLatLonInKm } from '../../scrypts/geo';
import MapView, { Marker, MarkerAnimated, Region } from 'react-native-maps';


export default function BgLoc() {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [isActive, setIsActive] = useState(false);
    

    return (
        <View style={styles.createPost}>
            <MapView
                style={styles.map}
            >
                <Marker coordinate={location} />
            </MapView>

            <Button title='swich' onPress={() => {
                setIsActive(!isActive);
            }} />
            <View>
                <Text>Дистанция {133}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    createPost: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
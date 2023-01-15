import { Button, StyleSheet, View, } from 'react-native';
import MapView, { LatLng, Region, UrlTile, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Trajectory } from "./../../types";

type MapProps = {
    trajectory: Trajectory
}

export default function Map(props: MapProps) {
    // const [initialRegion, setIntervalRegion] = useState<Region>();
    const [trajectory, setTrajectory] = useState<Array<LatLng>>();

    // useEffect(() => {
    //     (async () => {
    //         let location = await Location.getCurrentPositionAsync({});
    //         setIntervalRegion({
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //             latitudeDelta: 0.0922,
    //             longitudeDelta: 0.0421,
    //         });
    //     })();
    // }, []);

    useEffect(() => {
        console.log("Траектория изменена");
        if (props.trajectory.length != 0) {
            setTrajectory(props.trajectory.map(elem => {
                return {
                    latitude: elem.latitude,
                    longitude: elem.longitude
                }
            }))

        } else {
            setTrajectory(undefined);
        }
    }, [props.trajectory]);

    return (
        <MapView
            style={styles.map}
            // initialRegion={initialRegion}
            showsUserLocation={true}
        >
            {trajectory != undefined ?
                <Polyline
                    coordinates={trajectory}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={6}
                />
                :
                <></>
            }
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
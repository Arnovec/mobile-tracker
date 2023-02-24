import { Button, StyleSheet, View, } from 'react-native';
import MapView, { LatLng, Region, UrlTile, Polyline, Polygon, Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { Trajectory } from "./../../types";

type MapProps = {
    trajectory: Trajectory,
    enableMove: boolean
}

export default function MapWithResult(props: MapProps) {
    const [initialRegion, setInitialRegion] = useState<Region>();
    const [trajectory, setTrajectory] = useState<Array<LatLng>>();


    useEffect(() => {
        let minLat = props.trajectory[0].latitude;
        let maxLat = props.trajectory[0].latitude;
        let minLon = props.trajectory[0].longitude;
        let maxLon = props.trajectory[0].longitude;

        for (let i = 1; i < props.trajectory.length; i++) {
            if (props.trajectory[i].latitude < minLat) {
                minLat = props.trajectory[i].latitude;
            } else if (props.trajectory[i].latitude > maxLat) {
                maxLat = props.trajectory[i].latitude;
            }
            if (props.trajectory[i].longitude < minLon) {
                minLon = props.trajectory[i].longitude;
            } else if (props.trajectory[i].longitude > maxLon) {
                maxLon = props.trajectory[i].longitude;
            }
        }

        const initReg = {
            latitude: (maxLat + minLat) / 2,
            longitude: (minLon + maxLon) / 2,
            latitudeDelta: maxLat - minLat + 0.01,
            longitudeDelta: maxLon - minLon + 0.01
        }

        setInitialRegion(initReg);
    }, []);


    useEffect(() => {
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
            initialRegion={initialRegion}
            showsUserLocation={false}
            zoomEnabled={props.enableMove}
            rotateEnabled={props.enableMove}
            scrollEnabled={props.enableMove}
        >
            {
                trajectory != undefined ?
                    <>
                        <Polyline
                            coordinates={trajectory}
                            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                            strokeWidth={6}
                        />
                    </>
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
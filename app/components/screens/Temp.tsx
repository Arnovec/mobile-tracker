import MapView, { Marker, MarkerAnimated, Region } from 'react-native-maps';
import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, Button } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

// const LOCATION_TASK_NAME = 'background-location-task';

// const requestPermissions = async () => {
//     const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
//     if (foregroundStatus === 'granted') {
//         const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
//         if (backgroundStatus === 'granted') {
//             await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
//                 deferredUpdatesInterval: 10,
//             });
//         }
//     }
// };

// TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
//     if (error) {
//         // Error occurred - check `error.message` for more details.
//         return;
//     }
//     if (data) {
//         // @ts-ignore
//         const { locations } = data;
//         console.log(data);

//         // do something with the locations captured in the background
//     }
// });

export default function Temp() {
    const mapRef = useRef<any>(null);
    const region1 = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    //  useState<MapView | null>(null);
    const [region, setRegion] = useState<Region | undefined>(undefined);
    const [mapSnapshot, setSnapshot] = useState<any>('https://reactjs.org/logo-og.png');

    const coordinate = {
        latitude: 37.78825,
        longitude: -122.4324,
    };

    function qwe() {
        console.log("abw")
    }

    useEffect(() => {
        console.log(region);
    }, [region])

    useEffect(() => {


    }, [])


    function onRegionChange(region_: any) {
        console.log(region_)
    }

    async function takeSnapshot() {
        console.log("qwe");

        try{

        }catch(error){
            console.log(error);
        }
        // mapRef.current.animateToRegion(region1, 350);

        // const duration = 500


        // marker.animateMarkerToCoordinate(
        //     region1,
        //     duration
        // );

        // const snapshot = await mapRef.current.takeSnapshot({
        //     width: 300,      // optional, when omitted the view-width is used
        //     height: 300,     // optional, when omitted the view-height is used
        //     format: 'png',   // image formats: 'png', 'jpg' (default: 'png')
        //     result: 'file'   // result types: 'file', 'base64' (default: 'file')
        // });
        // console.log(snapshot);
        // setSnapshot(snapshot);
    }

    //  {uri: 'asset:/favicon.png'}
    //  {uri: mapSnapshot?.uri }
    // uri: 'https://reactjs.org/logo-og.png'

    return (
        <View style={styles.createPost}>
            <MapView
                style={styles.map}
                ref={mapRef}
                region={region}
                initialRegion={region1}
                scrollEnabled={false}
                onRegionChangeComplete={() => {
                    console.log("komplet")
                }}
            // onRegionChange={(region_)=>{
            //     setRegion(region_)
            // }}
            >
                {/* <Marker coordinate={coordinate} /> */}
                <MarkerAnimated
                    coordinate={coordinate}
                />
            </MapView>
            <Image style={styles.img} source={{ uri: mapSnapshot }} />
            <Button onPress={() => {
                takeSnapshot();
            }} title="Акшон" />
            <TouchableOpacity onPress={takeSnapshot}>
                <Text>Take Snapshot</Text>
            </TouchableOpacity>
        </View>
    );
}

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
        height: "50%",
    },
    img: {
        backgroundColor: "gray",
        width: "100%",
        height: "40%",
    },
});
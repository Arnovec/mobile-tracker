import MapView, { Marker, MarkerAnimated, Region } from 'react-native-maps';
import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, Button } from 'react-native';
import { useState, useRef, useEffect } from 'react';

export default function Temp() {
    const mapRef = useRef<any>(null);
    const region1 = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    //  useState<MapView | null>(null);
    const [region, setRegion] = useState<Region|undefined>(undefined);
    const [mapSnapshot, setSnapshot] = useState<any>('https://reactjs.org/logo-og.png');

    const coordinate = {
        latitude: 37.78825,
        longitude: -122.4324,
    };

    useEffect(()=>{
        console.log(region);
    },[region])
    

    function onRegionChange(region_: any) {
        console.log(region_)
    }

    async function takeSnapshot() {
        console.log("qwe");

        console.log(mapRef.current.animateToRegion);
        // mapRef.current.animateToRegion(region1, 350);
        setRegion(region1);
        setTimeout(()=>{
            setRegion(undefined);
            console.log("uspel")
        },100);

        // const duration = 500


        // marker.animateMarkerToCoordinate(
        //     region1,
        //     duration
        // );

        const snapshot = await mapRef.current.takeSnapshot({
            width: 300,      // optional, when omitted the view-width is used
            height: 300,     // optional, when omitted the view-height is used
            format: 'png',   // image formats: 'png', 'jpg' (default: 'png')
            result: 'file'   // result types: 'file', 'base64' (default: 'file')
        });
        console.log(snapshot);
        setSnapshot(snapshot);
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
                onRegionChangeComplete={()=>{
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
            <Button onPress={()=>{
                takeSnapshot();
            }} title="Take Snapshot"/>
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
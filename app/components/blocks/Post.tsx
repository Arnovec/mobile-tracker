import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Trajectory } from '../../types';
import MapWithResult from '../blocks/MapWithResult';

type post = {
    post: {
        id: number,
        trajectory: Trajectory,
        user_id: number
    }
};

export default function Post(props: post) {

    return (
        <>
            <View style={styles.post}>
                <View
                    style={styles.head}
                >
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>Михаил Шниц</Text>
                        <View style={styles.results}>
                            <Text style={styles.result}>Дистанция 15 км</Text>
                            <Text style={styles.result}>Время 03:07 мин</Text>
                            <Text style={styles.result}>Темп 04:55 мин/км</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.map}>
                    <MapWithResult trajectory={props.post.trajectory} enableMove={false} />
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    head: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
    },
    info: {
        alignItems: "baseline",
        overflowWrap: "break-word",
    },
    name: {
        fontWeight: "800",
        fontSize: 16,
        paddingHorizontal: 20,
    },
    results: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    result: {
        marginLeft: 20,
    },
    map: {
        width: "100%",
        height: 400,
    },

});
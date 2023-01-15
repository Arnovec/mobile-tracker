import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Trajectory } from '../../../types';
import MapWithResult from '../../blocks/MapWithResult';

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
                <Text>Пост №{props.post.id} от {props.post.user_id}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        width: 300,
        height: 500,
    }
});
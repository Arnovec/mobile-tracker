import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { getNews } from '../../../scrypts/request';
import Navbar from '../../../navigations/Navbar';
import Post from './Post';
import { Trajectory } from '../../../types';
type posts = {
    id: number,
    trajectory: Trajectory,
    user_id: number
}[];

export default function Home({ navigation }: any) {
    const [posts, setPosts] = useState<posts>();

    useEffect(() => {
        (async () => {
            setPosts(await getNews());
        })();
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <>
            {posts == undefined ?
                <View style={styles.loading}>
                    <Text>Загрузка тренировок</Text>
                </View>
                :
                <ScrollView >
                    {posts.map(elem => <Post post={elem}/>)}
                </ScrollView >
            }
            <Navbar navigation={navigation} />
        </>

    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {

    }
});

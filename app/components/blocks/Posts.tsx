import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Requests from '../../scrypts/request';
import Post from './Post';
import { Trajectory } from '../../types';
type posts = {
    id: number,
    trajectory: Trajectory,
    user_id: number
}[];

export default function Posts() {
    const [posts, setPosts] = useState<posts>();

    async function updatePosts() {
        setPosts(undefined);
        setPosts((await (await Requests.getNews()).json()).trainings);
    }

    useEffect(() => {
        updatePosts();
    }, []);

    return (
        <>
            <View style={styles.head}>
                <Pressable
                    style={styles.refrsButton}
                    onPress={() => {
                        updatePosts();
                    }}
                >
                    <Text>refresh</Text>
                </Pressable>
            </View>
            {posts == undefined ?
                <View style={styles.loading}>
                    <Text>Загрузка тренировок</Text>
                </View>
                :
                <>

                    <ScrollView style={styles.container}>
                        {posts.map(elem => <Post key={`post ${elem.id}`} post={elem} />)}
                    </ScrollView >
                </>
            }
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
        backgroundColor: '#fff',
        // paddingHorizontal: 30, 
    },
    head: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        // backgroundColor: "#345",
    },
    refrsButton: {
        // width: 100,
    }
});

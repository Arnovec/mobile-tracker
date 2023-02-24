import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import Result from '../../ui/Result';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

type props = {
    navigation: any
}

export default function Header(props: props) {
    const { setUser } = useContext<any>(AuthContext);

    async function exit() {
        await AsyncStorage.removeItem("refresh_key");
        setUser(undefined, undefined);
        props.navigation.navigate('Login');
    }

    return (
        <View style={styles.header}>
            <View style={styles.main}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.name}>Михаил Шниц</Text>
                <View>
                    <Button
                        onPress={() => {
                            exit();
                        }}
                        title="Выход"
                    />
                </View>

            </View>
            <View style={styles.results}>
                <Result name={"Тренировок"} value={"15 шт."} />
                <Result name={"Средний темп"} value={"6:01 мин"} />
                <Result name={"Преодалено"} value={"100,4 км"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    main: {
        flexDirection: "row",
    },
    exitButton: {
        // height: 40
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    name: {
        fontWeight: "800",
        fontSize: 30,
    },
    results: {
        flexDirection: "row",
        flexWrap: "wrap",
    }

});
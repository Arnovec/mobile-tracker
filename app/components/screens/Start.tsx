import { Text, View, StyleSheet, ActivityIndicator, Image, Button, ToastAndroid } from 'react-native';
import Requests from '../../scrypts/request';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Start({ navigation }: any) {
    const {setUser} = useContext<any>(AuthContext);
    
    function alert(message: string){
        ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
    }

    async function checkRefreshKey() {
        try {
            await AsyncStorage.setItem('refresh_key', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImxvZ2luIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQxMCRVUGVXc3g4ZEVsaGNwRVp2NXB6Zi8uUzVXSC9HdU5naHlZV1RIS21XRldqV1BTT2t6eGs4LiIsImlhdCI6MTY3NjYzMjcxMH0.55i8W9gSDO-zXMmy62lIQxfiGk8xzLxFDlbUfVhCTl8");
            const refreshKey = await AsyncStorage.getItem('refresh_key');
            if(refreshKey){
                const response = await Requests.refresh(refreshKey);
                if(response.ok){
                    const result = await response.json();
                    
                    AsyncStorage.setItem('refresh_key', result.refreshTokens);
                    setUser(result.acessToken, result.id);
                    navigation.navigate('Home');
                    return ;
                } 
            }
            //сценарий истекшего токена
            navigation.navigate('Login');
        } catch (error) {
            //сценарий недоступного сервера
            alert("Приложение недоступно. Попробуйте  позже")
        }
    }

    useEffect(() => {
        checkRefreshKey();
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Дневник</Text>
            <Text style={styles.title}>легкоатлета</Text>
            <Image
                source={require("assets/logo.png")}
                style={{ width: 200, height: 200 }}
            />


            <ActivityIndicator size={100} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        // justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
});
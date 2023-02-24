import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity } from 'react-native';
import MapView, { LatLng, Region, UrlTile, Polyline } from 'react-native-maps';
import Map from "./../../blocks/Map";
import Navbar from '../../../navigations/Navbar';
import * as Location from 'expo-location';
import { Trajectory, Training } from "./../../../types";
import Request from '../../../scrypts/request';
import defaultStyles from '../../../styles/defailtStyles';

export default function Statistic({ navigation }: any) {
    const [trajectory, setTrajectory] = useState<Trajectory>([]);
    const [isRun, setIsRun] = useState(false);

    useEffect(() => {
        console.log(isRun ? "Да" : "Нет");
        console.log(trajectory);
        if (isRun) {
            const interval = setInterval(() => {
                (async () => {
                    let location = await Location.getCurrentPositionAsync({});
                    setTrajectory((prev) => [
                        ...prev,
                        {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            time: Date.now()
                        }
                    ]);
                    console.log(trajectory);
                })();
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }
    }, [isRun])

    function startTrack() {
        setTrajectory([]);
        console.log("Начало")
        setIsRun(true);
    }

    function pauseTrack() {
        console.log("Остановка")
        setIsRun(false);
    }

    function continueTrack() {
        console.log("Продолжить")
        setIsRun(true);
    }

    async function saveTrack() {
        console.log("Сохранение");
        try {
            const training = await (await Request.finishTraining(trajectory)).json();
            setTrajectory([]);
            navigation.navigate('Post', {
                id: training.id,
                user_login: training.user_login,
            });
        } catch (error) {
            console.log("Не сохранился(мб)");
            console.log(error);
        }
    }

    return (
        <>
            <Map trajectory={trajectory} />
            <View style={styles.buttonContainer}>
                {isRun ?
                    <TouchableOpacity
                        onPress={() => {
                            pauseTrack();
                        }}
                        style={styles.roundButton}
                    >
                        <Text style={styles.text}>Стоп</Text>
                    </TouchableOpacity>
                    :
                    trajectory.length == 0 ?
                        <TouchableOpacity
                            onPress={() => {
                                startTrack();
                            }}
                            style={styles.roundButton}
                        >
                            <Text style={styles.text}>Старт</Text>
                        </TouchableOpacity>
                        :
                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    continueTrack();
                                }}
                                style={styles.roundButton}
                            >
                                <Text style={styles.text}>Продолжить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    saveTrack();
                                }}
                                style={styles.roundButton}
                            >
                                <Text style={styles.text}>Сохранить</Text>
                            </TouchableOpacity>
                        </>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        width: 220,
        justifyContent: "space-around",
    },
    roundButton: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: defaultStyles.colors.praimaryColor,

    },
    text: {
        color: "white",
    }
});
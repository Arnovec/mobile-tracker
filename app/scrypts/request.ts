import { Trajectory, Training } from "./../types";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const domain = "http://192.168.1.252:8000/";
const domain = "http://169.254.252.193:8000/";

class Requests {

    private static async getRequest(url: string) {
        return await fetch(domain + url, {
            method: 'GET',
        });
    }

    private static async postRequest(url: string, body?: any, token?: string) {
        return await fetch(domain + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(body)
        });
    }

    static async loginReq(login: string, password: string) {
        return await Requests.postRequest("api/auth/login", { login, password });
    }

    static async refresh(refreshKey: string) {
        // await AsyncStorage.setItem('refresh_key', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImxvZ2luIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQxMCRVUGVXc3g4ZEVsaGNwRVp2NXB6Zi8uUzVXSC9HdU5naHlZV1RIS21XRldqV1BTT2t6eGs4LiIsImlhdCI6MTY3NjYzMjcxMH0.55i8W9gSDO-zXMmy62lIQxfiGk8xzLxFDlbUfVhCTl8");
        // const refreshKey = await AsyncStorage.getItem('refresh_key');
        // if (!refreshKey)
        //     throw new Error();
        return await Requests.postRequest("api/auth/refresh", {}, refreshKey);

        // return await fetch(domain + "api/auth/refresh", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //         'Authorization': 'Bearer ' + refreshKey,
        //     },
        // });
        
        // q123we 
        // {
        //     "acessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImxvZ2luIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQxMCRVUGVXc3g4ZEVsaGNwRVp2NXB6Zi8uUzVXSC9HdU5naHlZV1RIS21XRldqV1BTT2t6eGs4LiIsImlhdCI6MTY3NjYzNDY4NSwiZXhwIjoxNjc2NjM1Mjg1fQ.YItrV4De0bKXhSQnqSBHkc6p32sED-AzCT8ZeEoCaEU",
        //     "id": 15,
        //     "refreshTokens": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImxvZ2luIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQxMCRVUGVXc3g4ZEVsaGNwRVp2NXB6Zi8uUzVXSC9HdU5naHlZV1RIS21XRldqV1BTT2t6eGs4LiIsImlhdCI6MTY3NjYzNDY4NX0.oBMLulGnIkDZATKA6nSqj4Tbt1vARK_6K5JYO5r2RNE"
        // }

    }


    // НЕ ВЕРНЫЙ КОД!!!!!!!
    static async getNews() {
        const res = await Requests.getRequest("news");

        return res;
    }


    static async finishTraining(trajectory: Trajectory) {
        const res = await Requests.postRequest("add/training", { trajectory });

        return res;
    }
}

export default Requests;
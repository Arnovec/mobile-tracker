import { Trajectory, Training } from "./../types";

const domain = "http://192.168.1.252:8000/";


async function getRequest(url: string) {
    let response = await fetch(domain + url, {
        method: 'GET',
    });
    let result = await response.json();
    
    return result;
}

async function postRequest(url: string, body?: any) {
    let response = await fetch(domain + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });
    let result = await response.json();

    return result;
}

async function getNews() {
    const res = await getRequest("news");
    console.log(res);

    return res.trainings;
}


async function finishTraining(trajectory: Trajectory) {
    const res = await postRequest("add/training", { trajectory });
    console.log(res);

    return res.training;
}

export { getNews, finishTraining };
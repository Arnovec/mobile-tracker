type Location = {
    latitude: number,
    longitude: number,
}

type Trajectory = {
    latitude: number,
    longitude: number,
    time: number,
}[];

type Training = {
    id: number,
    user_login: string,
}


export { Location, Trajectory, Training };
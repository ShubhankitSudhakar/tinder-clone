import axios from "axios";

const instance = axios.create({
    baseURL : 'https://tinder-backen-d.herokuapp.com/'
});

export default instance;
import axios from "axios";

import {baseURL} from "../config";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWY1YTI0YWQxNzgyZmE1NzQyYmU4NTNiOWEzYzUwMCIsInN1YiI6IjYzNGIwYmE2MWIxZjNjMDA3OWU3NzMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2aC5mJDHOVNqJZTAAyUbtkx3AuddHb317O3-r9hZ5A';

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = token;

    if(access) {
        config.headers.Authorization = `Bearer ${access}`
    }

    return config

});

export {
    axiosService
}
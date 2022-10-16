import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const movieService = {
    getMovies:() => axiosService.get(urls.movies)
}

export {
    movieService
}
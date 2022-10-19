import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getAll:(page) => axiosService.get(urls.movies, {params: {page}})
}

export {
    movieService
}
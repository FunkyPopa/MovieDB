import {axiosService} from "./axios.service";
import {urls} from "../config";

const movieService = {
    getAll:(page) => axiosService.get(urls.movies, {params: {page}}),
    search:(query) => axiosService.get(`${urls.search}?query=${query}`),
    getMoviesByGenre:(page,id) => axiosService.get(`${urls.movies}?page=${page}&with_genres=${id}`)
}


export {
    movieService
}
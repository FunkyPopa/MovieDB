import {useDispatch, useSelector} from "react-redux";

import css from './MoviesListCard.module.css'
import {GenreBadge} from "../Genre badge/GenreBadge";
import {useEffect} from "react";
import {genreActions} from "../../store";
import {StarsRating} from "../Stars rating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {title, overview, backdrop_path, genre_ids, vote_average} = movie;

    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    },[dispatch]);


    const genreOfMovie = [];

    genres.map(genre => {
        if(genre_ids.includes(genre.id)) {
            genreOfMovie.push(genre.name);
        }
    });


    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return(
        <div className={css.card}>
            <GenreBadge genreOfMovie={genreOfMovie} key={genres.id}/>
            <img src={`${baseURL}/${backdrop_path}`} alt={title}/>
            <div className={css.cardInfo}>
                <p>{title}</p>
                <p>{overview}</p>
                    <hr/>
                    <StarsRating vote_average={vote_average}/>
            </div>
        </div>
    )
}

export {MoviesListCard}
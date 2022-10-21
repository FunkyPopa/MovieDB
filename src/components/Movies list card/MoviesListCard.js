import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MoviesListCard.module.css';
import {GenreBadge} from "../Genre badge/GenreBadge";
import {genreActions} from "../../store";
import {StarsRating} from "../Stars rating/StarsRating";
import {urls} from "../../config";

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
            genreOfMovie.push(genre.name)
        }
    });

    return(
        <div className={css.card}>
            <GenreBadge genreOfMovie={genreOfMovie}/>
            <img src={`${urls.image}/${backdrop_path}`} alt={title}/>
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
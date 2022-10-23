import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {GenreBadge} from "../Genre badge/GenreBadge";
import {genreActions, movieActions} from "../../store";
import {StarsRating} from "../Stars rating/StarsRating";
import {urls} from "../../config";

const MoviesListCard = ({movie, theme}) => {
    const {title, release_date, overview, poster_path, genre_ids, vote_average} = movie;
    const [query] = useSearchParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(genreActions.getAll());
    },[dispatch]);


    const movieInfo = (movie) => {
        const data = {
            movie: movie,
            page: query.get('page')
        }
        dispatch(movieActions.chooseMovie(data));
        navigate('/movie');
    };


    return(
        <div className={`${css.card} ${theme}`} onClick={() => movieInfo(movie)}>
            <GenreBadge genre_ids={genre_ids}/>
            <img className={css.poster} src={`${urls.image}/${poster_path}`} alt={title}/>
            <div className={css.cardInfo}>
                <div className={`${css.title} ${theme}`}>
                    <b><p>{title}</p></b>
                </div>
                <div className={css.overview}>
                    <p>{overview}</p>
                </div>
                <p className={`${css.date} ${theme}`}>Release date: <span>{release_date}</span></p>
            </div>
            <div className={css.stars}>
                <hr/>
                <StarsRating vote_average={vote_average}/>
            </div>
        </div>
    )
};

export {MoviesListCard}
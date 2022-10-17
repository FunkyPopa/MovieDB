import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './MoviesList.module.css'
import {movieActions} from "../../store";
import {MoviesListCard} from "../Movies list card/MoviesListCard";

const MoviesList = () => {
    const {movies} = useSelector(state => state.movieReducer);
    let dispatch = useDispatch();

    useEffect(()=> {
            dispatch(movieActions.getAll());
    },[dispatch])

    return(
        <div className={css.wrapper}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {MoviesList}
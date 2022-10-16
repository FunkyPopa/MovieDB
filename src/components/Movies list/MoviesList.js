import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../store";
import {MoviesListCard} from "../Movies list card/MoviesListCard";

const MoviesList = () => {
    const {movies} = useSelector(state => state.movieReducer);
    let dispatch = useDispatch();

    useEffect(()=> {
            dispatch(movieActions.getAll());
    },[dispatch])

    return(
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {MoviesList}
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'
import {movieActions} from "../../store";
import {MoviesListCard} from "../Movies list card/MoviesListCard";

const MoviesList = () => {
    const {movies, loading, hideButton} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=> {
        dispatch(movieActions.getAll(query.get('page')))
    },[dispatch, query])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}));
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}));
    };


    return(
        <div className={css.wrapper}>
            {loading ? <div><h1>Loading</h1></div> : movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.btnWrapper}>
                <button className={css.btn} hidden={hideButton} onClick={prevPage} disabled={query.get('page') === '1'}>Prev</button>
                <button className={css.btn} hidden={hideButton} onClick={nextPage} disabled={query.get('page') === '500'}>Next</button>
            </div>
        </div>
    )

};



export {MoviesList}
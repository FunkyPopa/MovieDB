import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'
import {movieActions} from "../../store";
import {MoviesListCard} from "../Movies list card/MoviesListCard";
import {GenreList} from "../Genre list/GenreList";

const MoviesList = ({theme}) => {
    const {movies, loading, hideButton,currentMovie} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    console.log(currentMovie)

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
        <div className={css.main}>
            {!loading && <GenreList/>}
            <div className={css.wrapper}>
                <div className={css.cards}>
                    {loading ? <h1>Loading</h1> : movies.map(movie => <MoviesListCard key={movie.id} movie={movie} theme={theme}/>)}
                </div>
                <div className={css.btnWrapper}>
                    <button className={`${css.btn} ${query.get('page') !== '1' && css.active}`} hidden={hideButton} onClick={prevPage}
                            disabled={query.get('page') === '1'}>Prev
                    </button>
                    <button className={`${css.btn} ${query.get('page') !== '500' && css.active}`} hidden={hideButton} onClick={nextPage}
                            disabled={query.get('page') === '500'}>Next
                    </button>
                </div>

            </div>
        </div>
    )

};



export {MoviesList}
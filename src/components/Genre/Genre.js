import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './Genre.module.css'
import {movieActions} from "../../store";

const Genre = ({genre}) => {
    //getting promise
    const {name} = genre;

    //getting query
    const [query] = useSearchParams();
    //dispatch
    const dispatch = useDispatch();

    //logic of choosing genre
    const chooseGenre = (genre) => {
        //if button all, rerender all movies
        {genre.name === 'All' && dispatch(movieActions.getAll())}
        //packing values to pass it to reducer
        const params = {
            page: query.get('page'),
            id: genre.id
        };
        dispatch(movieActions.searchMovieByGenre(params));
    };

    return(
        <div>
            <p className={css.genreBtn} onClick={() => chooseGenre(genre)}>{name}</p>
        </div>
    )
}

export {Genre}
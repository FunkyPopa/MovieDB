import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './Genre.module.css'
import {movieActions} from "../../store";

const Genre = ({genre}) => {
    const {name} = genre;

    const [query] = useSearchParams();
    const dispatch = useDispatch();


    const chooseGenre = (genre) => {
        {genre.name === 'All' && dispatch(movieActions.getAll())}
        const params = {
            page: query.get('page'),
            id: genre.id
        }
        dispatch(movieActions.searchMovieByGenre(params));
    }

    return(
        <div>
            <p className={css.genreBtn} onClick={() => chooseGenre(genre)}>{name}</p>
        </div>
    )
}

export {Genre}
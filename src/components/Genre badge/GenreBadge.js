import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../store";

const GenreBadge = () => {
    const {genres} = useSelector(state => state.genreReducer);
    const {movies} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])

    return(
        <div>
            {genres.map(genre => <p>{genre.id === movies}</p>)}
        </div>
    )
}

export {GenreBadge}
import {useSelector} from "react-redux";

import css from './GenreBadge.module.css'

const GenreBadge = ({genre_ids}) => {
    //getting current movie
    const {currentMovie} = useSelector(state => state.movieReducer);
    //getting all genres
    const {genres} = useSelector(state => state.genreReducer);

    //empty array
    const genreOfMovie = [];

    //making new array only with suitable genres
    genres.map(genre => {
        if(genre_ids.includes(genre.id)) {
            genreOfMovie.push(genre.name)
        }
    });

    return(
        <div className={`${currentMovie ? css.genreRow : css.genreBadge}` }>
            {
                genreOfMovie.map((genre, index) => <div className={css.genre} key={index}>{genre}</div>)
            }
        </div>
    )
}

export {GenreBadge}
import css from './GenreBadge.module.css'
import {useSelector} from "react-redux";

const GenreBadge = ({genre_ids}) => {
    const {currentMovie} = useSelector(state => state.movieReducer);
   const {genres} = useSelector(state => state.genreReducer);


    const genreOfMovie = [];

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
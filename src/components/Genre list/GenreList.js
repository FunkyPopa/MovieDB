import {useSelector} from "react-redux";

import css from './GenreList.module.css'
import {Genre} from "../Genre/Genre";

const GenreList = () => {
    //getting all genres
    const {genres} = useSelector(state => state.genreReducer);

    //array with property All
    const all = [{
        name: 'All'
    }];

    //Adding all genres in new array with "All"
    const newGenresArr = all.concat(genres);


    return(
        <div className={css.genres}>
                {newGenresArr.map(genre => <Genre genre={genre}/>)}
        </div>
    )
}

export {GenreList}
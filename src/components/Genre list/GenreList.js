import {useSelector} from "react-redux";

import css from './GenreList.module.css'
import {Genre} from "../Genre/Genre";

const GenreList = () => {
    const {genres} = useSelector(state => state.genreReducer);

    const all = [{
        name: 'All'
    }]

 const newGenresArr = all.concat(genres)


    return(
        <div className={css.genres}>
                {newGenresArr.map(genre => <Genre genre={genre}/>)}
        </div>
    )
}

export {GenreList}
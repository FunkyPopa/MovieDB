import {useOutletContext} from "react-router-dom";

import {MovieInfo} from "../../components";
import css from './MovieInfoPage.module.css'

const MovieInfoPage = () => {
    const theme = useOutletContext();
    return(
        <div className={css.movieInfoPage}>
            <MovieInfo theme={theme}/>
        </div>
    )
}

export {MovieInfoPage}
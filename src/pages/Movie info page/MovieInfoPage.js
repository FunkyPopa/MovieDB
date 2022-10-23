import {MovieInfo} from "../../components";
import css from './MovieInfoPage.module.css'
import {useOutletContext} from "react-router-dom";

const MovieInfoPage = () => {
    const theme = useOutletContext();
    return(
        <div className={css.movieInfoPage}>
            <MovieInfo theme={theme}/>
        </div>
    )
}

export {MovieInfoPage}
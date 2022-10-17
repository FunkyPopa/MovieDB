import css from './MoviesPage.module.css'
import {MoviesList} from "../../components";

const MoviesPage = () => {
    return(
        <div className={css.wrapper}>
            <MoviesList/>
        </div>
    )
}

export {MoviesPage}
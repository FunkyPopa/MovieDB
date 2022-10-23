import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from "./MovieInfo.module.css";
import {GenreBadge} from "../Genre badge/GenreBadge";
import {urls} from "../../config";
import {StarsRating} from "../Stars rating/StarsRating";

const MovieInfo = ({theme}) => {
    const {currentMovie, currentPage} = useSelector(state => state.movieReducer);
    const {adult,genre_ids,original_language,original_title,
            overview,popularity,poster_path,release_date,title,
                vote_average,vote_count} = currentMovie;

    const navigate = useNavigate();

    return(
        <div className={css.wrapper}>
            <div className={`${css.card} ${theme}`}>
                    <img className={css.poster} src={`${urls.image}/${poster_path}`} alt={title}/>
                    <div className={css.cardInfo}>
                        {adult === true && <div className={css.NFST}>18+</div>}
                        <p className={css.language}>Original language: <b><span>{original_language.toUpperCase()}</span></b></p>
                        <p className={`${css.title} ${theme}`}>{original_title}</p>
                        <GenreBadge genre_ids={genre_ids}/>
                        <div className={css.overview}>
                            <p className={css.overview}>{overview}</p>
                        </div>
                        <div className={`${css.dateAndPop} ${theme}`}>
                            <p>Release date: {release_date}</p>
                            <p>Popularity: {popularity}</p>
                        </div>
                        <hr/>
                        <div className={`${css.cardFooter} ${theme}`}>
                            <p>Voted: {vote_count}</p>
                            <div className={css.rating}>
                                <p className={css.vote}>{vote_average}</p>
                                <StarsRating vote_average={vote_average}/>
                            </div>
                        </div>
                    </div>
            </div>
            <button className={css.btn} onClick={() => navigate(`/movies?page=${currentPage}`)}>Back</button>
        </div>
    )
}

export {MovieInfo}
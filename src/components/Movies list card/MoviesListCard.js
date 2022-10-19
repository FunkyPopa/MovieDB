import css from './MoviesListCard.module.css'
import {GenreBadge} from "../Genre badge/GenreBadge";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const MoviesListCard = ({movie}) => {
    const {title, overview, poster_path, genre_ids} = movie;
   const dispatch = useDispatch();

        useEffect(()=> {
            dispatch()
        })

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return(
        <div className={css.card}>
            <GenreBadge/>
            <img src={`${baseURL}/${poster_path}`} alt={title}/>
            <div className={css.cardInfo}>
                <p>{title}</p>
                <p>{overview}</p>
                <hr/>

            </div>
        </div>
    )
}

export {MoviesListCard}
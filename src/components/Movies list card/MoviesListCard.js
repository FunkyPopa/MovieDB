import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    const {title, overview, poster_path} = movie;

    const baseURL = 'https://image.tmdb.org/t/p/w500';

    return(
        <div className={css.card}>
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
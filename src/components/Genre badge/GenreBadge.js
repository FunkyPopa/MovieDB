import css from './GenreBadge.module.css'

const GenreBadge = ({genreOfMovie}) => {

    return(
        <div className={css.genreBadge}>
            {
                genreOfMovie.map((genre, index) => <div className={css.genre} key={index}>{genre}</div>)
            }
        </div>
    )
}

export {GenreBadge}
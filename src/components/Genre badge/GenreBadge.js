import css from './GenreBadge.module.css'

const GenreBadge = ({genreOfMovie}) => {

    return(
        <div className={css.genreBadge}>
            {
                genreOfMovie.map(genre => <div className={css.genre}>{genre}</div>)
            }
        </div>
    )
}

export {GenreBadge}
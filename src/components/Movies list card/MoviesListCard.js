const MoviesListCard = ({movie}) => {
    const {title} = movie;

    return(
        <div>
            <h3>title: {title}</h3>
        </div>
    )
}

export {MoviesListCard}
import StarRatings from "react-star-ratings";

import css from './StarsRating.module.css';


const StarsRating = ({vote_average}) => {

    return(
        <form className={css.starRating}>
            <StarRatings
                name="react-star-rating"
                numberOfStars={10}
                starDimension='15'
                rating={vote_average}
                starRatedColor='#FFCD00'
            />
        </form>
    );
};

export {StarsRating}
import {useSelector} from "react-redux";

import css from './Footer.module.css'

const Footer = ({theme}) => {
    //useSelector
    const {loading, hideButton} = useSelector(state => state.movieReducer);

    //function that swipe window up
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className={`${css.footer} ${theme}`}>
            {!loading && <div className={`${css.up} ${hideButton && css.none}`} onClick={topFunction}>&#8593;</div>}
        </div>
    )
}

export {Footer}
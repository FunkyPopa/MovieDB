import css from './Footer.module.css'
import {useSelector} from "react-redux";

const Footer = ({theme}) => {
    const {loading, hideButton} = useSelector(state => state.movieReducer);

    console.log(hideButton)


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
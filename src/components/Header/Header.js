import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './Header.module.css';
import {UserInfo} from "../User info/UserInfo";
import {movieActions} from "../../store";
import {urls} from "../../config";

const Header = ({handleClick, theme}) => {
    //getting state from movieReducer to hide search field
    const {hideSearch} = useSelector(state => state.movieReducer);
    //dispatch
    const dispatch = useDispatch();

    //getting currentPage
    const [query] = useSearchParams({page: '1'});
    //Form
    const {register, handleSubmit} = useForm();


    //function which do search request
    const submit = (str) => {
        dispatch(movieActions.search(str.query))
        //if search field is clear, rerender first page
        !str.query.length && dispatch(movieActions.getAll(query.get('page')))
    }

    return(
        <div className={`${css.header} ${theme === "dark" ? css.dark : css.light }`}>
            <img className={css.logo} src={urls.logo} alt="movieDB logo"/>
            {!hideSearch && <form onChange={handleSubmit(submit)}>
                <input className={`${css.search} ${theme}`} type='text' {...register('query')}/>
            </form>}
            <UserInfo/>
            <div className={css.themeOptions}>
                <div className={css.whiteSwitcher} onClick={() => handleClick("light")}></div>
                <div className={css.blackSwitcher} onClick={() => handleClick("dark")}></div>
            </div>
        </div>
    )
}

export {Header}
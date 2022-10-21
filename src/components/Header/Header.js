import {set, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './Header.module.css';
import logo from '../../img/logo.png';
import {UserInfo} from "../User info/UserInfo";
import {movieActions} from "../../store";
import {useDispatch} from "react-redux";

const Header = () => {
    const {register, handleSubmit} = useForm();
    const [query, setQuery] = useSearchParams({query: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.search(query.get('query')))
    },[dispatch]);

    function submit() {
        setQuery(value => )
    }

    return(
        <div className={css.header}>
            <img className={css.logo} src={logo} alt={logo}/>
            <form className={css.searchForm} onSubmit={handleSubmit(submit)}>
                <input className={css.search} type='text' {...register('search')}/>
            </form>
            <UserInfo/>
        </div>
    )
}

export {Header}
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from './Header.module.css';
import {UserInfo} from "../User info/UserInfo";
import {movieActions} from "../../store";
import {urls} from "../../config";
import {useSearchParams} from "react-router-dom";

const Header = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const [query] = useSearchParams({page: '1'});

    console.log(query)

    const submit = (str) => {
        console.log(str.query)
        dispatch(movieActions.search(str.query))
        !str.query.length && dispatch(movieActions.getAll(query.get('page')))
    }

    return(
        <div className={css.header}>
            <img className={css.logo} src={urls.logo} alt="movieDB logo"/>
            <form className={css.searchForm} onChange={handleSubmit(submit)}>
                <input className={css.search} type='text' {...register('query')}/>
            </form>
            <UserInfo/>
        </div>
    )
}

export {Header}
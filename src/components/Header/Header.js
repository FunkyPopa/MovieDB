import {useForm} from "react-hook-form";

import css from './Header.module.css'
import logo from '../../img/logo.png'
import glass from '../../img/magnifying-glass-solid.svg'

const Header = () => {
    const {register, handleSubmit} = useForm();

    function submit() {

    }

    return(
        <div className={css.header}>
            <img className={css.logo} src={logo}/>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('search')}/>
            </form>
        </div>
    )
}

export {Header}
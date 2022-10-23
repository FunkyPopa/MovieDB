import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {Header} from "../../components";
import {useState} from "react";

const MainLayout = () => {

    const [theme, setTheme] = useState("light");

    const handleClick = (theme) => {
         setTheme(theme)
    }

    return(
        <div className={`${css.main} ${theme}`}>
            <Header handleClick={handleClick} theme={theme}/>
            <Outlet context={theme}/>
        </div>
    )
}

export {MainLayout}
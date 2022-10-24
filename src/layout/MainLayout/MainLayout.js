import {Outlet} from "react-router-dom";
import {useState} from "react";

import css from './MainLayout.module.css'
import {Footer, Header} from "../../components";

const MainLayout = () => {

    const [theme, setTheme] = useState("light");

    const handleClick = (theme) => {
         setTheme(theme)
    }

    return(
        <div className={`${css.main} ${theme === "dark" ? css.dark : css.light}`}>
            <Header handleClick={handleClick} theme={theme}/>
            <Outlet context={theme}/>
            <Footer theme={theme}/>
        </div>
    )
}

export {MainLayout}
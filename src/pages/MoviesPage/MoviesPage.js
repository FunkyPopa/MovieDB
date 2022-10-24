import {useOutletContext} from "react-router-dom";

import {MoviesList} from "../../components";

const MoviesPage = () => {
    const theme = useOutletContext();
    return(
        <div className={"moviePage"}>
            <MoviesList theme={theme}/>
        </div>
    )
}

export {MoviesPage}
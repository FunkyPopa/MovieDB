import {MoviesList} from "../../components";
import {useOutletContext} from "react-router-dom";



const MoviesPage = () => {
    const theme = useOutletContext();
    return(
        <div className={"moviePage"}>
            <MoviesList theme={theme}/>
        </div>
    )
}

export {MoviesPage}
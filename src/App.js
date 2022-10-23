import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MovieInfoPage, MoviesPage} from "./pages";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies?page=1'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movie'} element={<MovieInfoPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;

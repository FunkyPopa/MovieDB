import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {MoviesPage} from "./pages";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;

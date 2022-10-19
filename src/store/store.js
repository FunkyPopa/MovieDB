import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
   movieReducer,
   genreReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}
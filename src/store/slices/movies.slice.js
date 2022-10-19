import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    error: null,
    loading: false,
};

const getAll = createAsyncThunk(
   "moviesSlice/getAll",
    async (setQuery, {rejectWithValue}) => {
       try {
           const {data} = await movieService.getAll(setQuery);
           return data.results;
       }catch (e) {
            return rejectWithValue(e.response.data);
       }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:[],
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addDefaultCase((state, action) => {
                const {pathElement} = action.type.split('/').splice(-1);
                if(pathElement === 'rejected') {
                    state.error = action.payload;
                    state.loading = false;
                }
            })
});

const {reducer: movieReducer} = moviesSlice;

const movieActions = {
    getAll
};

export {
    movieReducer,
    movieActions
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    error: null,
    loading: false,
    hideButton: false
};

const getAll = createAsyncThunk(
   "moviesSlice/getAll",
    async (query, {rejectWithValue}) => {
       try {
           const {data} = await movieService.getAll(query);
           return data.results;
       }catch (e) {
            return rejectWithValue(e.response.data);
       }
    }
);

const search = createAsyncThunk(
  "moviesSlice/search",
  async (query, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(query);
            return data.results
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
                state.hideButton = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.hideButton = true;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload
                state.hideButton = true;
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
    getAll,
    search
};

export {
    movieReducer,
    movieActions
}

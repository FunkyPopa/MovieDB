import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    error: null,
    loading: false,
    sss: []
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
            console.log(query)
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

            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.sss = action.payload
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

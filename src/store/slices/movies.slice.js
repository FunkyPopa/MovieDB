import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    currentMovie: null,
    currentPage: 0,
    error: null,
    loading: false,
    hideButton: false,
    hideSearch: false
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

const searchMovieByGenre = createAsyncThunk(
    "moviesSlice/searchMovieByGenre",
    async (params, {rejectWithValue}) => {
        const {page, id} = params
        console.log(page)
        console.log(id)
        try {
            const {data} = await movieService.getMoviesByGenre(page, id);
            return data.results
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
        chooseMovie:(state, action) => {
            state.currentMovie = action.payload.movie;
            state.currentPage = action.payload.page;
            state.hideSearch = true;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.currentMovie = null;
                state.error = null;
                state.loading = false;
                state.hideButton = false;
                state.hideSearch = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.hideButton = true;
                state.hideSearch = false;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload
                state.hideButton = true;
            })
            .addCase(searchMovieByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.error = null;
                state.loading = false;
                state.hideButton = false;
                state.hideSearch = false;
            })
            .addDefaultCase((state, action) => {
                const {pathElement} = action.type.split('/').splice(-1);
                if(pathElement === 'rejected') {
                    state.error = action.payload;
                    state.loading = false;
                }
            })
});

const {reducer: movieReducer, actions: {chooseMovie}} = moviesSlice;

const movieActions = {
    getAll,
    search,
    searchMovieByGenre,
    chooseMovie
};

export {
    movieReducer,
    movieActions
}

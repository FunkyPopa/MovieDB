import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genre.service";

const initialState = {
    genres: [],
    errors: null,
    loading: false
}

const getAll = createAsyncThunk(
    "genresSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
          const {data} = await genreService.getAll();
          return  data.genres;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }

);


const genresSlice = createSlice( {
        name: 'genresSlice',
        initialState,
        reducer: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.genres = action.payload;
                    state.errors = null;
                    state.loadin = false;
                })
    }
);

const {reducer: genreReducer} = genresSlice;

const genreActions = {
    getAll
}

export {
    genreReducer,
    genreActions
}
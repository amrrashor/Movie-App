import { createSlice } from "@reduxjs/toolkit";
// import MovieApi from '../../common/APIs/movieApi';
// import { APIKey } from '../../common/APIs/movieApiKey';

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    }
})


// export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const { addMovies } = movieSlice.actions;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
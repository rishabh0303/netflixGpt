import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovie = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },

    }
})

export const {addNowPlayingMovies , addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;